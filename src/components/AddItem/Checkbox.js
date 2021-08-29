const Checkbox = ({ field, index, fields, setFields}) => {

  const handleCheckbox = (e) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === e.target.id) {
        return (field.visible_value = e.target.checked);
      } else {
        return "";
      }
    });
    setFields(temp_arr);
  };

  return (
    <>
      <div className="input-group-text d-flex justify-content-center">
        <input
          type="checkbox"
          // placeholder={intl.formatMessage({
          //   id: "add-item.item-description-placeholder",
          // })}
          className="form-check-input"
          onChange={handleCheckbox}
          key={index + 3}
          id={field.value}
        />
      </div>
    </>
  );
};

export default Checkbox;
