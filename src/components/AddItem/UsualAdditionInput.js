import { useIntl } from "react-intl";

const UsualAdditionInput = ({ field, index, handleDescriptionChange }) => {
  const intl = useIntl();

  return (
    <>
      <input
        type="text"
        placeholder={intl.formatMessage({
          id: "add-item.item-description-placeholder",
        })}
        className="form-control"
        onChange={handleDescriptionChange}
        key={index + 3}
        id={field.value}
      />
    </>
  );
};

export default UsualAdditionInput;
