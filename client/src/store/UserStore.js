import { create } from "zustand";
import axios from "axios";
import { getEmail, setEmail } from "../utility/utility";

const UserStore = create((set) => ({
    LoginFormData:{email:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },
  isFormSubmit: false,
  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`/api/v1/UserOTP/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },
  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`/api/v1/UserOTP/${email}/${otp}`);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },
}));

export default UserStore;
