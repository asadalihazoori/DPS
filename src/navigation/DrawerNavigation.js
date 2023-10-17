import { createDrawerNavigator } from "@react-navigation/drawer";

import {
    EmployeePayslip, EmployeeProfile, LeaveStatus,
    LeaveSubmission, AttendanceReport, LoansAdvances,
    ApplyForLoans, MedicalClaims, ApplyForMedicalClaims,
    Shift, TardinesReport, TaxCertificate, HolidayNews, ChangePassword,
    Home, AttendanceRequest, Attendance, Leaves, Loans, MedicalClaim, Reports,
} from "../screens";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({ navigation }) => {

    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}>

            <Drawer.Screen name="Home" component={Home}
            //  options={{ headerShown: false }}
            />
            <Drawer.Screen name="EmployeeProfile" component={EmployeeProfile} />
            <Drawer.Screen name="EmployeePayslip" component={EmployeePayslip} />
            <Drawer.Screen name="LeaveStatus" component={LeaveStatus} />
            <Drawer.Screen name="LeaveSubmission" component={LeaveSubmission} />
            <Drawer.Screen name="AttendanceReport" component={AttendanceReport} />
            <Drawer.Screen name="AttendanceRequest" component={AttendanceRequest} />
            <Drawer.Screen name="LoansAdvances" component={LoansAdvances} />
            <Drawer.Screen name="ApplyForLoans" component={ApplyForLoans} />
            <Drawer.Screen name="MedicalClaims" component={MedicalClaims} />
            <Drawer.Screen name="ApplyForMedicalClaims" component={ApplyForMedicalClaims} />
            <Drawer.Screen name="Shift" component={Shift} />
            <Drawer.Screen name="TardinesReport" component={TardinesReport} />
            <Drawer.Screen name="TaxCertificate" component={TaxCertificate} />
            <Drawer.Screen name="HolidayNews" component={HolidayNews} />
            <Drawer.Screen name="ChangePassword" component={ChangePassword} />

            <Drawer.Screen name="Attendance" component={Attendance} />
            <Drawer.Screen name="Leaves" component={Leaves} />
            <Drawer.Screen name="Loans" component={Loans} />
            <Drawer.Screen name="MedicalClaim" component={MedicalClaim} />
            <Drawer.Screen name="Reports" component={Reports} />

        </Drawer.Navigator>
    );
}

export default DrawerNavigation