import { useIntl } from "react-intl";

const AdditionalTextarea = ({ field, index, handleDescriptionChange }) => {
  const intl = useIntl();
  return (
    <>
      <textarea
        placeholder={intl.formatMessage({
          id: "add-item.item-description-placeholder",
        })}
        className="form-control"
        onChange={handleDescriptionChange}
        key={index + 3}
        rows="1"
        id={field.value}
      />
    </>
  );
};

export default AdditionalTextarea;
