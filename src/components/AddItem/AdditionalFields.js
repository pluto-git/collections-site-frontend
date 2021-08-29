import { useIntl } from "react-intl";
import UsualAdditionInput from "./UsualAdditionInput";
import Checkbox from "./Checkbox";
import AdditionalTextarea from "./AdditionalTextarea";

const AdditionalFields = ({
  fields,
  handleDescriptionChange,
  handleFieldNameChange,
}) => {
  const intl = useIntl();
  console.log(fields);
  return (
    <>
      {fields &&
        fields.slice(3, 18).map((field, index) => {
          return (
            <tr key={index + 1}>
              <td>
                <input
                  type="text"
                  placeholder={intl.formatMessage({
                    id: "add-item.item-" + field.label,
                  })}
                  className="form-control"
                  onChange={handleFieldNameChange}
                  key={index + 2}
                  id={field.value}
                />
              </td>
              <td>
                {field.value.includes("checkbox") && (
                  <Checkbox
                    field={field}
                    index={index}
                    handleDescriptionChange={handleDescriptionChange}
                  />
                )}
                {field.value.includes("text") && (
                  <AdditionalTextarea
                    field={field}
                    index={index}
                    handleDescriptionChange={handleDescriptionChange}
                  />
                )}
                {(field.value.includes("number") ||
                  field.value.includes("char") ||
                  field.value.includes("date")) && (
                  <UsualAdditionInput
                    field={field}
                    index={index}
                    handleDescriptionChange={handleDescriptionChange}
                  />
                )}
              </td>
            </tr>
          );
        })}
    </>
  );
};

export default AdditionalFields;
