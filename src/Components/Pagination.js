import React from 'react'

 const Pagination = ({postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts/ postsPerPage); i++){
        pageNumbers.push(i);
    }
    const pageNumber = pageNumbers.map(number => (
        <li key = {number} className="page-item">
            <a href="a" className='page-link'>
                {number}
            </a>

        </li>
    ))
  return (
    <nav>
        <ul className='pagination'>
    {pageNumber}

        </ul>
    </nav>
  )
}

export default Pagination;