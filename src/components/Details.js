import { React, useContext, useEffect, useState } from 'react'
import employeeContext from "../context/employees/employeeContext"
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const Details = () => {

  const Navigate = useNavigate();

  const context = useContext(employeeContext);
  const { details, getDetails } = context;

  const [page, setPage] = useState(1)
  const [detailsPerPage] = useState(10)

  // current detail
  const indexOfLastDetail = page * detailsPerPage
  const indexOfFirstDetail = indexOfLastDetail - detailsPerPage
  const currentdetails = details.slice(indexOfFirstDetail, indexOfLastDetail)

  // change page
  const paginate = (pageNumber) => {
    setPage(pageNumber)
  }

  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, [])

  const handleClick = () => {
    Navigate('/registration')
  }

  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <h3 className='my-3'>Details of Employees</h3>

        <form className="search-bar d-flex my-3" role="search">
          <input className="form-control me-2" type="search" style={{border: "1px solid black"}} placeholder="Search" onChange={handleChange} />
          <i class="fa-solid fa-magnifying-glass position-absolute" style={{margin: "11px 183px", cursor: "pointer"}}></i>
        </form>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date of birth</th>
              <th scope="col">Phone number</th>
              <th scope="col">Email id</th>
            </tr>
          </thead>
          {currentdetails.filter((detail) => {
            return search.toLowerCase() === '' ? detail : detail.Fname.toLowerCase().includes(search) || detail.Lname.toLowerCase().includes(search) || detail.Dob.toLowerCase().includes(search) || detail.Email.toLowerCase().includes(search);
          }).map((detail) => {
            return (
              <tbody key={detail.Id}>
                <tr>
                  <td>{detail.Id}</td>
                  <td>{detail.Fname}</td>
                  <td>{detail.Lname}</td>
                  <td>{detail.Dob === "" ? "NULL" : detail.Dob}</td>
                  <td>{detail.Pnum}</td>
                  <td>{detail.Email}</td>
                </tr>
              </tbody>
            )
          })}
        </table>
      </div>

      <div className='d-flex justify-content-between'>

        <button className="btn btn-primary btn-sm mb-3" type="button" onClick={handleClick}>Register new Employee</button>

        <Pagination detailsPerPage={detailsPerPage} details={details.length} paginate={paginate} />

      </div>
    </div>
  )
}

export default Details
