import React from 'react';

export default function Pagination({
  posts,
  postsPerPage,
  onClickPage,
  currentPage,
}) {
  const numbersofPages = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    numbersofPages.push(i);
  }

  return (
    <div>
      <ul className="pagination mx-auto justify-content-center">
        {numbersofPages.map((el) => (
          <li
            key={el}
            className={(currentPage === el ? 'active ' : '') + 'page-item'}
          >
            <button onClick={() => onClickPage(el)} className="page-link">
              {el}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
