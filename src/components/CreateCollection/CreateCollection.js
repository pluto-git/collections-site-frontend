import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import FormLayout from "../Layout/FormLayout/FormLayout";
import SelectFixedTheme from "./SelectFixedTheme";
import MDEditor from "@uiw/react-md-editor";
import DropZone from "./DropZone";
import SelectFields from "./SelectFields";

import defaultImage from "../../utils/defaultImage";
import routes from "../../utils/routeNames";
import fixedThemes from "../../utils/fixedThemes";
import choices from "../../utils/choices";
import { useEffect } from "react/cjs/react.development";

const CreateCollection = () => {
  const [collectionName, setCollectionName] = useState("");
  const [fixedTheme, setFixedTheme] = useState("");
  const [markdownDescription, setMarkdownDescription] = useState("");
  const [image, setImage] = useState(defaultImage);
  const [fields, setFields] = useState([choices[0], choices[1], choices[2]]);
  const [id, setId] = useState("");

  const { user } = useAuth0();
  const history = useHistory();

  const saveCollection = () => {
    fetch(routes.LOCALHOST + "add-user-collection", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: user.sub,
        name: collectionName,
        theme: fixedTheme.value,
        description: markdownDescription,
        image: image[0].data_url,
        fields: fields,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setId(data);
      });
  };

  useEffect(() => {
    if (id !== "") {
      history.push(`/collection/${id}` + routes.ADD_ITEM);
    }
  }, [id, history]);

  const handleCreate = () => {
    ///saving to api our coolection data. autogenerating our id for the collection
    //reading the ID and passing it as an argument to our dynamic route to Add/Edit Items.
    saveCollection();
  };

  return (
    <>
      <FormLayout>
        <div className="mb-3">
          <label htmlFor="collectionName" className="form-label">
            <FormattedMessage id="create-collection.form.name" />
          </label>
          <input
            type="name"
            className="form-control"
            id="collectionName"
            onChange={(e) => setCollectionName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="collectionTheme" className="form-label">
            <FormattedMessage id="create-collection.form.theme" />
          </label>
          <SelectFixedTheme
            fixedTheme={fixedTheme}
            setFixedTheme={setFixedTheme}
            fixedThemes={fixedThemes}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="collectionDescription" className="form-label">
            <FormattedMessage id="create-collection.form.description" />
          </label>
          <MDEditor
            value={markdownDescription}
            onChange={setMarkdownDescription}
            preview="edit"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="drap-and-drop" className="form-label">
            <FormattedMessage id="create-collection.form.image" />
          </label>
          <DropZone image={image} setImage={setImage} />
        </div>
        <div className="mb-3">
          <label htmlFor={"fields"}>
            <FormattedMessage id="create-collection.form.fields-add-message" />
          </label>
          <SelectFields
            fields={fields}
            setFields={setFields}
            choices={choices}
          />
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleCreate();
            }}
          >
            <FormattedMessage id="create-collection.form.create-items-fields" />
          </button>
        </div>
        <div className="mb-3 d-flex justify-content-center"></div>
      </FormLayout>
    </>
  );
};

export default CreateCollection;
