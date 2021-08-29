import { FormattedMessage, useIntl } from "react-intl";
import Select from "react-select";

const SelectFields = ({fields, setFields, choices}) => {
  const intl = useIntl();

  const handleChange = (e, option) => {
    if (option.removedValue && option.removedValue.isFixed) return;

    setFields(e);
  };

  const noOptionMessageHandler = () => {
    return intl.formatMessage({
      id: "creatable-multi.no-option-message",
    });
  };

  const styles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? {
            ...base,
            fontWeight: "bold",
            color: "white",
            padding: "6px 0px",
            paddingRight: "8px",
            paddingLeft: "8px",
          }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: "none" } : base;
    },
  };

  return (
    <>
      {intl && intl.locale === "ru" ? (
        <Select
          getOptionLabel={(option) => option.label_ru}
          isMulti
          name="additional fields"
          value={fields}
          options={choices || []}
          inputId="fields"
          isClearable={fields && !fields.some((v) => v.isFixed)}
          noOptionsMessage={noOptionMessageHandler}
          onChange={handleChange}
          styles={styles}
        />
      ) : (
        <Select
          isMulti
          name="additional fields"
          value={fields}
          options={choices || []}
          inputId="fields"
          isClearable={fields && !fields.some((v) => v.isFixed)}
          noOptionsMessage={noOptionMessageHandler}
          onChange={handleChange}
          styles={styles}
        />
      )}
    </>
  );
};

export default SelectFields;
