import React from "react";
import "../Pagination/Pagination.css";
const Pagination = () => {
  return (
    <div>
      <div class="center">
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" class="active">
            2
          </a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
    </div>
  );
};

export default Pagination;