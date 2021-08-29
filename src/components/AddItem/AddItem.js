import { useState, useEffect, useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import FormLayout from "../Layout/FormLayout/FormLayout";
import TagsCreation from "./TagsCreation";
import AdditionalFields from "./AdditionalFields";

import routes from "../../utils/routeNames";

const AddItem = ({ match }) => {
  const intl = useIntl();
  const [fields, setFields] = useState([{}]);
  const { user } = useAuth0();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (user && !loadedRef.current) {
      fetch(routes.LOCALHOST + "get-fields", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
          collection_id: match.params.collectionId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setFields(data);
          loadedRef.current = true;
        });
    }
  }, [user, match]);

  const history = useHistory();

  const setLocalizedVisualLabels = (targetValue, targetLabel) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === targetValue) {
        return (field.visible_label = targetLabel);
      } else {
        return "";
      }
    });
    setFields(temp_arr);
  };

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

  const handleDescriptionChange = (e) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === e.target.id) {
        return (field.visible_value = intl.formatMessage({
          id: "add-item.item-id",
        }));
      } else {
        return "";
      }
    });
    setFields(temp_arr);
  };

  const addButtonHandler = (e) => {
    setLocalizedVisualLabels("id");
    setLocalizedVisualLabels("name");
    setLocalizedVisualLabels("tags");
    console.log(fields);
    ///calling api
  };

  console.log(fields);

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
                  readOnly
                />
              </td>
              <td>
                <input
                  type="text"
                  value={intl.formatMessage({
                    id: "add-item.item-id-description",
                  })}
                  className="form-control"
                  readOnly
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
                  readOnly
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
                  id="tags"
                  readOnly
                />
              </td>
              <td>
                <TagsCreation fields={fields} setFields={setFields} />
              </td>
            </tr>
            <AdditionalFields
              fields={fields}
              handleDescriptionChange={handleDescriptionChange}
              handleFieldNameChange={handleFieldNameChange}
            />
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
