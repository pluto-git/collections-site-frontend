import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

import FormLayout from "../Layout/FormLayout/FormLayout";
import DropZone from "../DropZone/DropZone";
import Select from "react-select";

import routes from "../../utils/routeNames";
import choices from "../../utils/choices";

const CreateCollection = () => {
  const [markdown, setMarkdown] = useState("");
  const [values, setValues] = useState([choices[0], choices[1], choices[2]]);

  const intl = useIntl();
  const history = useHistory();
  console.log(intl.locale);

  const handleCreate = (moveToItemsEditPage = false) => {
    ///saving to api our coolection data. autogenerating our id for the collection
    //reading the ID and passing it as an argument to our dynamic route to Add/Edit Items.
    const id = 1;
    console.log(values);
    if (moveToItemsEditPage === true) {
      history.push(`/collection/${id}` + routes.ADD_ITEM);
    } else {
      history.push(routes.MY_COLLECTIONS);
    }
  };

  // for fields adding:
  const handleChange = (e, option) => {
    if (option.removedValue && option.removedValue.isFixed) return;

    setValues(e);
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
      <FormLayout>
        <div className="mb-3">
          <label htmlFor="collectionName" className="form-label">
            <FormattedMessage id="create-collection.form.name" />
          </label>
          <input type="name" className="form-control" id="collectionName" />
        </div>
        <div className="mb-3">
          <label htmlFor="collectionDescription" className="form-label">
            <FormattedMessage id="create-collection.form.description" />
          </label>
          <MDEditor value={markdown} onChange={setMarkdown} preview="edit" />
        </div>
        <div className="mb-3">
          <label htmlFor="drap-and-drop" className="form-label">
            <FormattedMessage id="create-collection.form.image" />
          </label>
          <DropZone />
        </div>
        <div className="mb-3">
          <label htmlFor={"fields"}>
            <FormattedMessage id="create-collection.form.fields-add-message" />
          </label> 
          {intl && intl.locale === "ru" ? (
            <Select
              getOptionLabel={(option) => option.label_ru}
              isMulti
              name="additional fields"
              value={values}
              options={choices || []}
              inputId="fields"
              isClearable={values && !values.some((v) => v.isFixed)}
              noOptionsMessage={noOptionMessageHandler}
              onChange={handleChange}
              styles={styles}
            />
          ) : (
            <Select
              isMulti
              name="additional fields"
              value={values}
              options={choices || []}
              inputId="fields"
              isClearable={values && !values.some((v) => v.isFixed)}
              noOptionsMessage={noOptionMessageHandler}
              onChange={handleChange}
              styles={styles}
            />
          )}
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleCreate(true);
            }}
          >
            <FormattedMessage id="create-collection.form.create-and-add-items" />
          </button>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleCreate();
            }}
          >
            <FormattedMessage id="create-collection.form.create" />
          </button>
        </div>
      </FormLayout>
    </>
  );
};

export default CreateCollection;
