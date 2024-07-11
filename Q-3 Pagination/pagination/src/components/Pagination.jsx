import React from "react";

const Pagination = ({ pageNo, setPageNo }) => {
  const prevTwo = Array.from({ length: 2 }, (_, index) => pageNo - 1 - index)
    .filter((value) => value > 0)
    .reverse();
  const nextTwo = Array.from({ length: 2 }, (_, index) => pageNo + index);
  console.log("next", nextTwo);
  console.log("prev", prevTwo);
  const paginationArray = [...prevTwo, ...nextTwo];
  console.log(paginationArray);
  const handleNext = () => {
    setPageNo((last) => last + 1);
  };
  const handlePrev = () => {
    setPageNo((last) => last - 1);
  };
  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div onClick={handlePrev} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {paginationArray.map((value, index) => {
        return (
          <div
          onClick={() => setPageNo(value)}
            className={value === pageNo ? `page-btn active` : `page-btn`}
            key={index}
          >
            {value}
          </div>
        );
      })}

      <div onClick={handleNext} className="page-btn">
        {">"}
      </div>
    </div>
  );
};

export default Pagination;
