import React, { Component } from "react";
import { Paginate } from "../helper/Paginate";

class Pagination extends Component {
  render() {
    // console.log("Pagination props", this.props);

    const { totalItems, activePage, pageSize, onPageChange } = this.props;

    const { pages, currentPage, totalPages } = Paginate(
      totalItems,
      activePage,
      pageSize
    );

    // console.log("pages", pages);
    // console.log("currentPage", currentPage);
    // console.log("totalPages", totalPages);

    if (pages.length === 0 || totalPages < 2) return null;

    return (
      <nav aria-label="Page navigation">
        <ul className="pagination" id="ulPagination">
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(1)}>
              {"|<"}
            </button>
          </li>

          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <button
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </button>
            </li>
          ))}

          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(totalPages)}
            >
              {">|"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
