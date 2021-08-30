import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAuth0 } from "@auth0/auth0-react";
import TableBody from "./TableBody";

import routes from "../../utils/routeNames";

const MyCollections = () => {
  const [collections, setCollections] = useState([{}]);
  const history = useHistory();
  const { user } = useAuth0();
  const loadedRef = useRef(false);
  //calling api
  useEffect(() => {
    if (!loadedRef.current){
    getCollections();
    loadedRef.current = true;
    }
  });

  const getCollections = () => {
    fetch(routes.LOCALHOST + user.sub + "/collections/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCollections(data);
      });
  };

  const collectionToolHandlder = (event, tool) => {
    const collectionId = event.target.id;
    if (tool === "create") {
      createCollection();
    } else if (tool === "view") {
      viewCollection(collectionId);
    } else if (tool === "edit") {
      editCollection(collectionId);
    } else if (tool === "delete") {
      deleteCollection(collectionId);
    }
  };

  const createCollection = () => {
    history.push(routes.CREATE_COLLECTION);
  };

  const viewCollection = (id) => {
    history.push(routes.VIEW_COLLECTION + `/${id}`);
  };

  const editCollection = (id) => {
    history.push(routes.EDIT_COLLECTION + `/${id}`);
  };

  const deleteCollection = (id) => {
    fetch(routes.LOCALHOST + user.sub + "/delete-collection/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setCollections(data);
      });
    getCollections();
  };

  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <div className="bg-secondary mt-2 py-2 px-2">
            <span className="fs-2 mb-0 d-flex justify-content-between ">
              <FormattedMessage id="my-collections.header" />
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-dark mx-2"
                  onClick={(e) => {
                    collectionToolHandlder(e, "create");
                  }}
                >
                  <FormattedMessage id="collection-tool.create" />
                </button>
              </div>
            </span>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <FormattedMessage id="collection-table.name" />
                </th>
                <th scope="col">
                  <FormattedMessage id="collection-table.theme" />
                </th>
                <th scope="col" className="text-center">
                  <FormattedMessage id="collection-table.image" />
                </th>
                <th scope="col">
                  <FormattedMessage id="collection-table.description" />
                </th>
                <th scope="col">
                  <FormattedMessage id="collection-table.actions" />
                </th>
              </tr>
            </thead>
            <tbody>
              <TableBody
                collections={collections}
                collectionToolHandlder={collectionToolHandlder}
                viewCollection={viewCollection}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCollections;
