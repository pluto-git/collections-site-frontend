const Checkbox = ({ field, index, handleDescriptionChange }) => {
  return (
    <>
      <div className="input-group-text d-flex justify-content-center">
        <input
          type="checkbox"
          // placeholder={intl.formatMessage({
          //   id: "add-item.item-description-placeholder",
          // })}
          className="form-check-input"
          onChange={handleDescriptionChange}
          key={index + 3}
          id={field.value}
        />
      </div>
    </>
  );
};

export default Checkbox;
