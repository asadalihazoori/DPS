import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    EmployeePayslip, EmployeeProfile, LeaveStatus,
    LeaveSubmission, AttendanceReport, LoansAdvances,
    ApplyForLoans, MedicalClaims, ApplyForMedicalClaims,
    TardinesReport, TaxCertificate, HolidayNews, ChangePassword,
    AttendanceRequest, Attendance, Leaves, Loans, MedicalClaim, Reports, Dashboard, Profile, PayslipDetails, Punch, Shifts, LeaveRequets, AttendaceChangeRequest,
} from "../screens";
import CustomDrawerContent from "../components/CustomDrawerContent";
import CustomDrawer1 from "../components/CustomDrawer1";
import BottomTab from "./BottomTab";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { RESET_ATTENDANCE } from "../redux/attendance/attendance.types";
import { getPermissionJust } from "../screens/Attendance/Location/AccessLocation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {

    useEffect(() => {
        SplashScreen.hide();
        getPermissionJust();
    }, []);

    const dispatch = useDispatch();
    const lastUpdatedDate = useSelector((state) => state.attendance.lastUpdatedDate);

    useEffect(() => {
        const currentDate = moment().format('YYYY-MM-DD');

        if (currentDate !== lastUpdatedDate) {
            dispatch({ type: RESET_ATTENDANCE });
        }
    }, [dispatch, lastUpdatedDate]);

    // useEffect(() => {
    //     dispatch({ type: RESET_ATTENDANCE });

    // })


    return (
        <Drawer.Navigator initialRouteName="BottomTab"
            screenOptions={{
                headerShown: false
            }}
            // drawerContent={(props) => <CustomDrawerContent {...props} />}>
            drawerContent={(props) => <CustomDrawer1 {...props} />}>



            <Drawer.Screen name="BottomTab" component={BottomTab} />
            <Drawer.Screen name="Home" component={Dashboard} />
            {/* <Drawer.Screen name="EmployeeProfile" component={EmployeeProfile} /> */}
            <Drawer.Screen name="TardinesReport" component={TardinesReport} />
            <Drawer.Screen name="TaxCertificate" component={TaxCertificate} />
            <Drawer.Screen name="HolidayNews" component={HolidayNews} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />
            <Drawer.Screen name="AttendaceChangeRequest" component={AttendaceChangeRequest} />


            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Attendance" component={Attendance} />
            <Drawer.Screen name="Leaves" component={Leaves} />
            <Drawer.Screen name="Loans" component={Loans} />
            <Drawer.Screen name="MedicalClaim" component={MedicalClaim} />
            <Drawer.Screen name="Reports" component={Reports} />
            <Drawer.Screen name="Shifts" component={Shifts} />
            <Drawer.Screen name="EmployeePayslip" component={EmployeePayslip} />
            <Drawer.Screen name="LeaveRequets" component={LeaveRequets} />


            {/* <Drawer.Screen name="LeaveStatus" component={LeaveStatus} /> //Tables I have Created */}
            {/* <Drawer.Screen name="LeaveSubmission" component={LeaveSubmission} /> */}
            {/* <Drawer.Screen name="AttendanceReport" component={AttendanceReport} /> */}
            {/* <Drawer.Screen name="LoansAdvances" component={LoansAdvances} /> */}
            {/* <Drawer.Screen name="ApplyForLoans" component={ApplyForLoans} /> */}
            {/* <Drawer.Screen name="MedicalClaims" component={MedicalClaims} /> */}
            {/* <Drawer.Screen name="ApplyForMedicalClaims" component={ApplyForMedicalClaims} /> */}
            {/* <Drawer.Screen name="ApplyShift" component={ApplyShift} /> */}
            {/* <Drawer.Screen name="Punch" component={Punch} /> */}
            {/* <Drawer.Screen name="AttendanceRequest" component={AttendanceRequest} /> */}
        </Drawer.Navigator>
    );
}

export default DrawerNavigation