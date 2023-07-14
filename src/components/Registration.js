import { React, useContext, useState } from 'react'
import employeeContext from "../context/employees/employeeContext"
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';


const Registration = () => {

  const [detail, setDetail] = useState({  Fname: "", Lname: "", Dob: "", Pnum: "", Email: "" })
  const initialValues = detail

  const Navigate = useNavigate();
  
  let context = useContext(employeeContext);
  const { enterDetails } = context;

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    values: detail,
    onSubmit: (detail, action)=>{
      enterDetails(detail.Fname, detail.Lname, detail.Dob, detail.Pnum, detail.Email)
      setDetail({ Fname: "", Lname: "", Dob: "", Pnum: "", Email: "" })
      action.resetForm();
      Navigate('/details')
    },
    onChange: (e)=> {
      setDetail({ ...detail, [e.target.name]: e.target.value })
    }
  })

  return (
    <div className='container d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <h3 className='my-4'>
          Enter details of employees
        </h3>

        <div className='d-flex flex-row'>
          <div className="mb-4">
            <label htmlFor="Fname" className="form-label">First Name <spam>*</spam></label>
            <input type="text" name='Fname' value={values.Fname} onChange={handleChange} onBlur={handleBlur} className="form-control" id="Fname" />
            { errors.Fname && touched.Fname ? <p className='form-error' style={{position: "absolute", color: "red", fontSize: "14px"}}>{ errors.Fname }</p> : null}
          </div>

          <div className="mb-4  mx-5">
            <label htmlFor="Lname" className="form-label">Last Name <spam>*</spam></label>
            <input type="text" name='Lname' value={values.Lname} onChange={handleChange} onBlur={handleBlur} className="form-control" id="Lname" />
            { errors.Lname && touched.Lname ? <p className='form-error' style={{position: "absolute", color: "red", fontSize: "14px"}}>{ errors.Lname }</p> : null}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="Dob" className="form-label">Date of birth</label>
          <input type="date" name='Dob' value={values.Dob} onChange={handleChange} onBlur={handleBlur} className="form-control" id="Dob" style={{width:" 29.4em"}} />
        </div>

        <div className="mb-4">
          <label htmlFor="Pnum" className="form-label">Phone Number <spam>*</spam></label>
          <input type="number" name='Pnum' value={values.Pnum} onChange={handleChange} onBlur={handleBlur} className="form-control" id="Pnum" style={{width:" 29.4em"}} minLength={10} maxLength={10} />
          { errors.Pnum && touched.Pnum ? <p className='form-error' style={{position: "absolute", color: "red", fontSize: "14px"}}>{ errors.Pnum }</p> : null}
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="form-label">Email id <spam>*</spam></label>
          <input type="email" name='Email' value={values.Email} onChange={handleChange} onBlur={handleBlur} className="form-control" id="Email" style={{width:" 29.4em"}} />
          { errors.Email && touched.Email ? <p className='form-error' style={{position: "absolute", color: "red", fontSize: "14px"}}>{ errors.Email }</p> : null}
        </div>

        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  )
}


export default Registration;
