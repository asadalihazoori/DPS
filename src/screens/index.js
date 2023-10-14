// export { default as EmployeeProfile } from '../screens/Employee_Profile'

import EmployeePayslip from "./Reports/Employee_Payslip"
import EmployeeProfile from "./Profile/Employee_Profile"
import ApplyForLoans from "./Loans/Apply_For_Loans"
import ApplyForMedicalClaims from "./MedicalClaims/Apply_For_Medical_Claims"
import AttendanceReport from "./Attendance/Attendance_Report"
import AttendanceRequest from "./Attendance/Attendance_Request"
import ChangePassword from "./AuthScreens/Change_Password"
import HolidayNews from "./Holiday_News"
import Home from "./Home"
import Leave_Details from "./Leaves/Leave_Details"
import LeaveStatus from "./Leaves/Leave_Status"
import LeaveSubmission from "./Leaves/Leave_Submission"
import LoansAdvances from "./Loans/Loans_Advances"
import Logout from "./AuthScreens/Logout"
import MedicalClaims from "./MedicalClaims/Medical_Claims"
import Attendance from "./Menus/Attendance/index.js"
import Leaves from "./Menus/Leaves"
import Loans from "./Menus/Loans"
import MedicalClaim from "./Menus/MedicalClaims"
import Reports from "./Menus/Reports"
import Shift from "./Shift"
import TardinesReport from "./Reports/Tardines_Report"
import TaxCertificate from "./Reports/Tax_Certificate"
import UpdateProfile from "./Profile/UpdateProfile"


export {
    Home, EmployeePayslip, EmployeeProfile, LeaveStatus,
    LeaveSubmission, AttendanceReport, LoansAdvances, ApplyForLoans,
    MedicalClaims, ApplyForMedicalClaims, Shift, TardinesReport, TaxCertificate,
    HolidayNews, ChangePassword, Logout, Leave_Details, AttendanceRequest, Attendance,
    Leaves, Loans, Reports, MedicalClaim, UpdateProfile,
}