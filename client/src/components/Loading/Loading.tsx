import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center border border-danger">
      <div className="spinner-border" role="status">
        <span className="sr-only">...</span>
      </div>
    </div>
  );
};

export default Loading;