import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    EmployeePayslip, EmployeeProfile, LeaveStatus,
    LeaveSubmission, AttendanceReport, LoansAdvances,
    ApplyForLoans, MedicalClaims, ApplyForMedicalClaims,
    Shift, TardinesReport, TaxCertificate, HolidayNews, ChangePassword, Logout
} from "../screens";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {

    return (
        <Drawer.Navigator >

            <Drawer.Screen name="EmployeeProfile" component={EmployeeProfile} />
            <Drawer.Screen name="EmployeePayslip" component={EmployeePayslip} />
            <Drawer.Screen name="LeaveStatus" component={LeaveStatus} />
            <Drawer.Screen name="LeaveSubmission" component={LeaveSubmission} />
            <Drawer.Screen name="AttendanceReport" component={AttendanceReport} />
            <Drawer.Screen name="LoansAdvances" component={LoansAdvances} />
            <Drawer.Screen name="ApplyForLoans" component={ApplyForLoans} />
            <Drawer.Screen name="MedicalClaims" component={MedicalClaims} />
            <Drawer.Screen name="ApplyForMedicalClaims" component={ApplyForMedicalClaims} />
            <Drawer.Screen name="Shift" component={Shift} />
            <Drawer.Screen name="TardinesReport" component={TardinesReport} />
            <Drawer.Screen name="TaxCertificate" component={TaxCertificate} />
            <Drawer.Screen name="HolidayNews" component={HolidayNews} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />
            <Drawer.Screen name="Logout" component={Logout} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigation