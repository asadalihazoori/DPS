import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Theme from '../../../theme/theme'
import GeneralHeader from '../../../components/Headers/GeneralHeader'
import { TabView, TabBar } from 'react-native-tab-view'
import { FontStyle } from '../../../theme/FontStyle'
import { COLORS } from '../../../theme/colors'
import PersonalInfo from '../../../components/Profile/ProfileView/PersonalInfo'
import { SvgXml } from 'react-native-svg'
import { Icons } from '../../../assets/SvgIcons/Icons'
import WeekWiseAttendace from '../../../components/WeekWiseAttendace'
import AttendanceCardNew from '../AttendanceCardNew'

const AttendanceHistory = ({ navigation }) => {



    return (
        <View style={{ flex: 1, paddingHorizontal: 16, }}>
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'} />
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'}/>
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'}/>
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'}/>
            <AttendanceCardNew punchIn={'8:30 AM'} punchOut={'9:30 PM'}/>

        </View>
    )
}

export default AttendanceHistory