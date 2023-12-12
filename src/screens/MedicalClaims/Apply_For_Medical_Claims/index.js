import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, ActivityIndicator, View, Alert, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { createMedicalClaimsApi, getDiseasesListApi } from '../../../utilities/api/apiController'
import { MedicalClaimRequestSchema } from '../../../utilities/Validations'
import RadioSelectionModal from '../../../components/RadioSelectionModal'
import inputValidation from '../../../utilities/Validations/YupValidate'
import TouchableView from '../../../components/Buttons/TouchableView'
import ImagePicker from '../../../components/ImagePicker'
import Button from '../../../components/Buttons/Button'
import Input from '../../../components/InputField'
import { styles } from './styles'
import ProfileTextInput from '../../../components/Inputs/ProfileTextInput'
import { NextButton } from '../../../components/Inputs'

const ApplyForMedicalClaims = ({ navigation }) => {

    const { familyInfo, data: employee_data } = useSelector((state) => state.employeeProfile);
    const uid = useSelector((state) => state.signin.uid);

    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const [diseasesList, setDiseaseList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        remainingMedicalClaim: `Remaining Balance: ${employee_data?.remaining_medical_claim}`,
        claimFor: null,
        disease: null,
        claimAmount: null,
        date: new Date(),
        description: null,
        image: [],

    });

    const handleInputChange = (field, value) => {
        setInputs({
            ...inputs,
            [field]: value,
            errors: {
                ...inputs.errors,
                [field]: false
            }
        })
    }


    const handleImageSelected = (imagebase64) => {

        const updatedImages = [...inputs.image, { 'image': 'data:image/jpeg;base64,' + imagebase64 }];
        handleInputChange('image', updatedImages)
    };

    const imageElements = inputs.image.map((imageUri, index) => (
        <View style={{ marginRight: 15 }} key={index}>

            <Image
                key={index}
                source={{ uri: imageUri.image }}
                style={{ width: 100, height: 200 }}
            />
        </View>
    ));

    const getDiseaseList = async () => {

        setLoading(true);

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {}
            }

            const response = await getDiseasesListApi({ body, navigation });

            setLoading(false);
            if (response?.data?.result?.response) {
                setDiseaseList(response?.data?.result?.response);
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }

            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);

            }

        } catch (error) {
            console.error(error);
        }

    };


    const validate = async () => {

        const result = await inputValidation(MedicalClaimRequestSchema, inputs)

        if (result.isValidate) {
            // handleSubmit();

        } else {
            setInputs(prev => ({
                ...prev,
                errors: result?.err
            }))
        }

    }


    const handleSubmit = async () => {

        setLoading(true);
        const dateObject = new Date(inputs.date);
        const formattedDate = dateObject.toISOString().split('T')[0];

        try {
            const body = {
                "jsonrps": 2.0,
                "params": {
                    "employee_id": uid,
                    "description": inputs.description,
                    "claim_amount": inputs.claimAmount,
                    "claim_for": inputs.claimFor.name,
                    "relation_with": inputs.claimFor.relation,
                    "id_of_selected": inputs.claimFor.id,
                    "date_claim": formattedDate,
                    "disease_type": inputs.disease.id,
                    "images": inputs.image,
                    "date": formattedDate

                }

            }

            const response = await createMedicalClaimsApi({ body, navigation });

            setLoading(false);
            if (response?.data?.result?.response) {
                Alert.alert("Confirmation", "Medical Claim Requested Successfully")
            }

            else if (response?.data?.error) {
                Alert.alert(response?.data?.error?.message, `${response?.data?.error?.data?.message}`);
            }
            else if (response == 'AxiosError: Request failed with status code 404') {
                Alert.alert("Session Expired", `Please Login Again`);
            }

            else {
                Alert.alert("Internet Connection Failed", `${response}`);

            }

        } catch (error) {
            console.error(error);
        }
    };

    // useEffect(() => {
    //     getDiseaseList();
    // }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
            contentContainerStyle={{ justifyContent: 'space-between', flexGrow: 1 }}>

            <View>

                <ProfileTextInput
                    label={'Remaining Balance'}
                    editable={false}
                    value={inputs.remainingMedicalClaim}
                />

                <TouchableView
                    label={'Claim For'}
                    header={'Select'}
                    text={inputs?.claimFor}
                    // text={inputs?.claimFor?.name ? `${inputs?.claimFor?.name} - ${inputs?.claimFor?.relation}` : null}
                    error={inputs?.errors?.claimFor}
                    data={familyInfo}
                    onChange={(selectedType) => handleInputChange('claimFor', selectedType)}
                />

                <TouchableView
                    label={'Disease Type'}
                    header={'Select'}
                    text={inputs?.disease}
                    handleModal={() => setModalVisible(true)}
                    error={inputs?.errors?.disease}
                    data={diseasesList}
                    onChange={(selectedType) => handleInputChange('disease', selectedType)}
                />

                <ProfileTextInput
                    label={'Claim Amount'}
                    placeholder={'12000'}
                    value={inputs.amount}
                    keyboardType={'number-pad'}
                    onChangeText={(text) => handleInputChange('claimAmount', text)}
                    error={inputs?.errors?.claimAmount}
                />

                <ProfileTextInput
                    label={'Description'}
                    placeholder={'For urgent need in home financials'}
                    value={inputs.description}
                    error={inputs?.errors?.description}
                    onChangeText={(text) => handleInputChange('description', text)}
                />

                <ProfileTextInput
                    label={'Appling Date'}
                    editable={false}
                    value={(inputs.date).toDateString()}
                />

                {/* <Input
                        marginTop={24}
                        editable={false}
                        value={(inputs.date).toDateString()}
                        onChangeText={(text) => handleInputChange('date', text)}
                    /> */}

                {/* <Input
                        marginTop={24}
                        placeholder={'Description'}
                        value={inputs.description}
                        error={inputs?.errors?.description}
                        onChangeText={(text) => handleInputChange('description', text)}
                    /> */}

                <ScrollView style={{ marginTop: 20, flexDirection: 'row' }} horizontal={true} >
                    {imageElements}
                </ScrollView>

                <View style={styles.imagesButtonView}>

                    <TouchableOpacity style={styles.imagesButton} onPress={() => setModalVisible2(true)}>
                        <Text style={styles.text}>Add Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.imagesButton} onPress={() =>
                        // handleInputChange('image', [])
                        setInputs({
                            ...inputs,
                            ['image']: []
                        })
                    }
                    >
                        <Text style={styles.text}>Clear</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.bottomView}>
                <NextButton title={'Submit'} onPress={validate} />
            </View>


            {/* <Button title={'Submit'} handelSubmit={validate} /> */}

            {
                loading &&
                <ActivityIndicator size={'large'} />
            }

            <RadioSelectionModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                header={'Select Disease'}
                data={diseasesList}
                onChangeSelection={(selectedDisease) => handleInputChange('disease', selectedDisease)}
            />

            <RadioSelectionModal
                modalVisible={modalVisible1}
                setModalVisible={setModalVisible1}
                header={'Claim For'}
                data={familyInfo}
                onChangeSelection={(person) => handleInputChange('claimFor', person)}
            />

            <ImagePicker
                modalVisible={modalVisible2}
                setModalVisible={setModalVisible2}
                onImageSelected={handleImageSelected}
            />

        </ScrollView >

    )
}

export default ApplyForMedicalClaims