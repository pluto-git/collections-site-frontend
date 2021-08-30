import { useIntl } from "react-intl";

const NameFields = ({ fields, setFields }) => {
  const intl = useIntl();
  console.log(fields);

  const handleFieldNameChange = (e) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === e.target.id) {
        return (field.visible_label = e.target.value);
      } else {
        return "";
      }
    });
    setFields(temp_arr);
  };

  return (
    <>
      <div>
        {fields &&
          fields.slice(3, fields.length).map((field, index) => {
            return (
              <input
                type="text"
                defaultValue={
                  intl.locale === "ru" ? field.label_ru : field.label
                }
                className="form-control"
                onChange={handleFieldNameChange}
                id={field.value}
                key={field.value + index}
              />
            );
          })}
      </div>
    </>
  );
};

export default NameFields;
