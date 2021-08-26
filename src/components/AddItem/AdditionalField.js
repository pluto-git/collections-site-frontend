import { useState, useEffect } from "react";

const AdditionalField = (props) => {
  const removeById = () => {
    console.log(props.id);
    console.log(props.fieldList);
  };
  // 0 - delete 0?


  return (
    <>
      <div className="mb-3 d-flex justify-content-between">
        <input placeholder="Your input here" />
        <button className="btn btn-primary" id={props.id} onClick={removeById}>
          Remove
        </button>
      </div>
    </>
  );
};

export default AdditionalField;
