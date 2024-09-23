// import { createSlice } from "@reduxjs/toolkit";

// interface IInitialState {
//   whatServicesDoesProHealthOffer: boolean;
//   howDoIScheduleAnAppointmentWithProHealth: boolean;
//   doYouAcceptInsurance: boolean;
//   whatShouldIBringToMyAppointment: boolean;
//   howDoIRequestAPrescriptionRefill: boolean;
// }
// const initialState: IInitialState = {
//   whatServicesDoesProHealthOffer: false,
//   howDoIScheduleAnAppointmentWithProHealth: false,
//   doYouAcceptInsurance: false,
//   whatShouldIBringToMyAppointment: false,
//   howDoIRequestAPrescriptionRefill: false,
// };

// const UsualyAskedFeatures = createSlice({
//   name: "Usualy asked features",
//   initialState,
//   reducers: {
//     handlewhatServicesDoesProHealthOffer: (state) => {
//       state.whatServicesDoesProHealthOffer = true;
//       state.howDoIScheduleAnAppointmentWithProHealth = false;
//       state.doYouAcceptInsurance = false;
//       state.howDoIRequestAPrescriptionRefill = false;
//     },

//     handlehowDoIScheduleAnAppointmentWithProHealth: (state) => {
//       state.whatServicesDoesProHealthOffer = false;
//       state.howDoIScheduleAnAppointmentWithProHealth = true;
//       state.doYouAcceptInsurance = false;
//       state.howDoIRequestAPrescriptionRefill = false;
//     },
//     handledoYouAcceptInsurance: (state) => {
//       state.whatServicesDoesProHealthOffer = false;
//       state.howDoIScheduleAnAppointmentWithProHealth = false;
//       state.doYouAcceptInsurance = true;
//       state.howDoIRequestAPrescriptionRefill = false;
//     },

//     handlehowDoIRequestAPrescriptionRefill: (state) => {
//       state.whatServicesDoesProHealthOffer = false;
//       state.howDoIScheduleAnAppointmentWithProHealth = false;
//       state.doYouAcceptInsurance = false;
//       state.howDoIRequestAPrescriptionRefill = true;
//     },
//   },
// });
// export const {
//   handlewhatServicesDoesProHealthOffer,
//   handlehowDoIScheduleAnAppointmentWithProHealth,
//   handledoYouAcceptInsurance,
//   handlehowDoIRequestAPrescriptionRefill,
// } = UsualyAskedFeatures.actions;
// export default UsualyAskedFeatures.reducer;
