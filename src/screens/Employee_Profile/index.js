import { SafeAreaView, Text, Image, FlatList, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeProfile } from '../../redux/profile/actions/getEmployeeProfile';
import { styles } from './styles';

const EmployeeProfile = ({ navigation }) => {

    const profileData = useSelector((state) => state.employeeProfile.data);
    const uid = useSelector((state) => state.signin.uid);
    // const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        // setLoading(true)
        dispatch(getEmployeeProfile({
            uid,
            navigation
        }))


    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center' }}>

                <Image source={{ uri: `data:image/png;base64,${profileData?.image}` }} height={100} width={100} />
            </View>

            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19, marginTop: 30 }}>Personal Information</Text>
            <Text style={styles.text}>Name: {profileData?.name}</Text>
            <Text style={styles.text}>Job Title: {profileData?.job_title}</Text>
            <Text style={styles.text}>Address: {profileData?.address}</Text>


            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19, marginTop: 30 }}>Family Information</Text>
            <Text style={styles.text}>Father Name: {profileData?.father_name}</Text>
            <Text style={styles.text}>Mother Name: {profileData?.mother_name}</Text>

            <FlatList
                data={profileData?.spouse_info}
                keyExtractor={(_, index) => index}
                renderItem={(item) =>
                    (<Text style={styles.text}>Spouse Name: {item?.item?.spouse_name}</Text>)
                }

            />

            <FlatList
                data={profileData?.child_info}
                keyExtractor={(_, index) => index}
                renderItem={(item) =>
                    (<Text style={styles.text}>Child Name: {item?.item?.child_name}</Text>)
                }
            />

            <FlatList
                data={profileData?.experience}
                keyExtractor={(_, index) => index}
                renderItem={(item) =>
                (<View>
                    <Text style={styles.text}>Company Name: {item?.item?.company}</Text>
                    <Text style={styles.text}>Designation: {item?.item?.designation}</Text>
                    <Text style={styles.text}>Total Experience: {item?.item?.total}</Text>
                </View>)
                }
            />

            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 19, marginTop: 30 }}>Qualifications</Text>

            <FlatList
                data={profileData?.qualification}
                keyExtractor={(_, index) => index}
                renderItem={(item) =>
                (<View>
                    <Text style={styles.text}>Qualifications: {item?.item?.qualification}</Text>
                    <Text style={styles.text}>Institue: {item?.item?.institue}</Text>
                    <Text style={styles.text}>Passing Year: {item?.item?.passing_year}</Text>
                </View>)
                }
            />



        </SafeAreaView>
    )
}

export default EmployeeProfile