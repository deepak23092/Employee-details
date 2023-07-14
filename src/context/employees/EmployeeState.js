import EmployeeContext from "./employeeContext"
import { useState } from "react"

const EmployeeState = (props) => {

    let host = "http://localhost:5000";

    let detailsInitial = [];
    const [details, setDetails] = useState(detailsInitial)

    //Get details of all employees
    const getDetails = async () => {
        const response = await fetch(`${host}/api/employees/getdetails`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        setDetails(json)
    }

    //enter the details of employees
    const enterDetails = async (Fname, Lname, Dob, Pnum, Email) => {
        const response = await fetch(`${host}/api/employees/enterdetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({Fname, Lname, Dob, Pnum, Email })
        })
        const detail = await response.json();
        setDetails(details.concat(detail))
    }

    return (
        <div>
            <EmployeeContext.Provider value={{ details, getDetails, enterDetails }}>
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}

export default EmployeeState
