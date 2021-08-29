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
  const history = useHistory();

  ///get fields, the most important labels for fields.
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

  const setLocalizedVisualLabels = (targetValue) => {
    const temp_arr = fields;
    temp_arr.find((field) => {
      if (field.value === targetValue) {
        return (field.visible_label = intl.formatMessage({
          id: "add-item.item-id",
        }));
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

  const addItemButtonHandler = () => {
    setLocalizedVisualLabels("id");
    setLocalizedVisualLabels("name");
    setLocalizedVisualLabels("tags");

    saveItem();
  };

  const goToCollectionHandler = () => {
    //history to the collection page handler.
    history.push(routes.VIEW_COLLECTION+"/"+match.params.collectionId);
  };

  const saveItem = () => {
    fetch(routes.LOCALHOST + "add-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: user.sub,
        collection_id: match.params.collectionId,
        item: fields,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
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
                  id="tags"
                  disabled
                />
              </td>
              <td>
                <TagsCreation fields={fields} setFields={setFields} />
              </td>
            </tr>
            <AdditionalFields
              fields={fields}
              setFields={setFields}
              handleDescriptionChange={handleDescriptionChange}
            />
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-dark" onClick={addItemButtonHandler}>
          <FormattedMessage id="add-item.save-button" />
        </button>
        <button className="btn btn-dark" onClick={goToCollectionHandler}>
          <FormattedMessage id="add-item.go-to-my-collection-button" />
        </button>
      </div>
    </FormLayout>
  );
};

export default AddItem;
