import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
// import MDEditor from "@uiw/react-md-editor";

import FormLayout from "../Layout/FormLayout/FormLayout";
import TagsCreation from "../TagsCreation/TagsCreation";
// import { useTable } from "react-table";

import choices from "../../utils/choices";
// const choices = [
//   { value: "id", label: "Id" , label_ru: "Идентификатор", isFixed: true, visible_value: "Id", visible: true},
//   { value: "name", label: "Name", label_ru: "Имя", isFixed: true, visible_value: "", visible: true},
//   { value: "tags", label: "Tags", label_ru: "Тэги", isFixed: true, visible_value: "", visible: true},
//   { value: "number1", label: "Number", label_ru: "Число", isFixed: false, visible_value: "" },
//   { value: "number2", label: "Number",label_ru: "Число", isFixed: false, visible_value: "" },
//   { value: "number3", label: "Number", label_ru: "Число", isFixed: false, visible_value: ""},
//   { value: "char1", label: "Single-line text", label_ru: "Однострочное поле", isFixed: false, visible_value: ""},
// ];

const AddItem = (props) => {
  const intl = useIntl();
  // const MdEditor1Ref = useRef();
  const [fields, setFields] = useState(choices);
  // const [markdown, setMarkdown] = useState("");
  const history = useHistory();

  const handleFieldNameChange = (e) => {
    console.log(e.target.value);
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

  const handleDescriptionChange = (e) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === e.target.id) {
        return (field.visible_value = e.target.value);
      } else {
        return "";
      }
    });
    setFields(temp_arr);
  };

  const addButtonHandler = (e) => {
    console.log(fields);
    ///calling api
    history.push("");
  };

  return (
    <FormLayout>
      <div className="d-flex justify-content-center fs-1">
        <FormattedMessage id="add-item.header" />
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th scope="col">
                <FormattedMessage id="add-item.item-field-type" />
              </th>
              <th scope="col">
                <FormattedMessage id="add-item.item-field-data" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={intl.formatMessage({
                    id: "add-item.item-id",
                  })}
                  className="form-control"
                  id="id"
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  value={intl.formatMessage({
                    id: "add-item.item-id-description",
                  })}
                  className="form-control"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={intl.formatMessage({
                    id: "add-item.item-name",
                  })}
                  className="form-control"
                  id="name"
                  disabled
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder={intl.formatMessage({
                    id: "add-item.item-description-placeholder",
                  })}
                  className="form-control"
                  onChange={handleDescriptionChange}
                  id="name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  defaultValue={intl.formatMessage({
                    id: "add-item.item-tags",
                  })}
                  className="form-control"
                  onChange={handleDescriptionChange}
                  id="tags"
                  disabled
                />
              </td>
              <td>
                <TagsCreation />
              </td>
            </tr>
            {fields &&
              fields.slice(3, 18).map((field, index) => {
                return (
                  <tr key={index + 1}>
                    {/* <td key={index + 2} className="align-middle">
                      {field.label}
                    </td> */}
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
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={addButtonHandler}>
          Save item
        </button>
        <button className="btn btn-primary" onClick={addButtonHandler}>
          Go to my collection
        </button>
      </div>
    </FormLayout>
  );
};

export default AddItem;
