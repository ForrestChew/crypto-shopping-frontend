import "./Pagination.css";

const Pagination = ({ pageNumbers, paginate }) => {
  return (
    <nav className="pagination">
      <ul className="pagination__menu">
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className="pagination__item"
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
