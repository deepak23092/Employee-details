import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    Fname: Yup.string().min(2).max(25).required("please enter your first name!"),
    Lname: Yup.string().min(2).max(25).required("please enter your last name!"),
    Pnum: Yup.string().matches(/^[0-9]{10}$/, 'Must be exactly 10 digits').required("please enter your phone number!"),
    Email: Yup.string().email().required("please enter your email"),
})