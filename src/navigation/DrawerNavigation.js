import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    Dashboard, Profile,
    Attendance, Leaves, Loans, MedicalClaim,
    Shifts, AttendaceChangeRequest, Reports, OvertimeTracking, Timesheet,
    // TardinesReport, TaxCertificate, HolidayNews, ChangePassword,
} from "../screens";
import CustomDrawer1 from "../components/CustomDrawer1";
import BottomTab from "./BottomTab";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { RESET_ATTENDANCE } from "../redux/attendance/attendance.types";
import { getCoordinates, getCoordinatesTest, getPermissionJust } from "../screens/Attendance/Location/AccessLocation";
import { asyncAttendances } from "../redux/attendance/actions/asyncAttendances";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    const dispatch = useDispatch();
    const lastUpdatedDate = useSelector((state) => state.attendance.lastUpdatedDate);
    const asyncPunches = useSelector((state) => state.attendance.asyncPunches);
    const attendance = useSelector((state) => state.attendance);
    // console.log(attendance);

    useEffect(() => {
        const currentDate = moment().format('YYYY-MM-DD');

        if (currentDate !== lastUpdatedDate) {
            dispatch({ type: RESET_ATTENDANCE });
        }
    }, [dispatch, lastUpdatedDate]);

    // useEffect(() => {
    //     dispatch({ type: RESET_ATTENDANCE });
    // })

    useEffect(() => {

        // console.log("len", asyncPunches.length)
        // if (asyncPunches.length > 0 ) {
        // }


        asyncPunches?.map((record) => {
            console.log('called')
            dispatch(asyncAttendances({
                body: record,
                navigation
            }))
        })



    }, [])

    return (
        <Drawer.Navigator initialRouteName="BottomTab"
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <CustomDrawer1 {...props} />}>



            <Drawer.Screen name="BottomTab" component={BottomTab} />
            <Drawer.Screen name="Home" component={Dashboard} />

            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Attendance" component={Attendance} />
            <Drawer.Screen name="Leaves" component={Leaves} />
            <Drawer.Screen name="Loans" component={Loans} />
            <Drawer.Screen name="MedicalClaim" component={MedicalClaim} />
            <Drawer.Screen name="Reports" component={Reports} />
            <Drawer.Screen name="Shifts" component={Shifts} />
            <Drawer.Screen name="Timesheet" component={Timesheet} />
            <Drawer.Screen name="OvertimeTracking" component={OvertimeTracking} />

            <Drawer.Screen name="AttendaceChangeRequest" component={AttendaceChangeRequest} />


            {/* <Drawer.Screen name="TardinesReport" component={TardinesReport} />
            <Drawer.Screen name="TaxCertificate" component={TaxCertificate} />
            <Drawer.Screen name="HolidayNews" component={HolidayNews} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} /> */}

            {/* <Drawer.Screen name="LeaveRequets" component={LeaveRequets} /> */}
            {/* <Drawer.Screen name="AttendanceReport" component={AttendanceReport} /> */}
            {/* <Drawer.Screen name="AttendanceRequest" component={AttendanceRequest} /> */}
        </Drawer.Navigator>
    );
}

export default DrawerNavigation