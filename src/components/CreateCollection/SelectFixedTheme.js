import Select from "react-select";
import { useIntl } from "react-intl";

const SelectFixedTheme = ({ fixedTheme, setFixedTheme, fixedThemes }) => {
  const intl = useIntl();

  const handleChange = (selectedOption) => {
    setFixedTheme(selectedOption);
  };

  const noOptionMessageHandler = () => {
    return intl.formatMessage({
      id: "creatable-multi.no-option-message",
    });
  };
  return (
    <>
      {intl && intl.locale === "ru" ? (
        <Select
          getOptionLabel={(option) => option.label_ru}
          name="fixedTheme"
          value={fixedTheme}
          options={fixedThemes || []}
          inputId="collectionTheme"
          placeholder={intl.formatMessage({
            id: "create-collection-selectFixedTheme.placeholder",
          })}
          noOptionsMessage={noOptionMessageHandler}
          onChange={handleChange}
        />
      ) : (
        <Select
          name="fixedTheme"
          value={fixedTheme}
          options={fixedThemes || []}
          inputId="collectionTheme"
          noOptionsMessage={noOptionMessageHandler}
          placeholder={intl.formatMessage({
            id: "create-collection-selectFixedTheme.placeholder",
          })}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default SelectFixedTheme;
