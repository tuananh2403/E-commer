import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ total, setPage }) => {
  let list = [];
  const handlePage = (page) => {
    setPage(+page);
  };
  for (let i = 1; i <= total; i++) {
    list.push(
      <li>
        <Link
          to="#"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          onClick={(e) => handlePage(e.target.innerText)}
        >
          {i}
        </Link>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example" className="flex justify-center">
      <ul className="inline-flex items-center -space-x-px  mt-4">
        <li>
          <a
            href="#"
            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <span className="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        {list}
        <li>
          <a
            href="#"
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;
