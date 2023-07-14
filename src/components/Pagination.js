import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ detailsPerPage, details, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(details/detailsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'><Link onClick={()=>{paginate(number)}} href='/details' className='page-link'>{number}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
