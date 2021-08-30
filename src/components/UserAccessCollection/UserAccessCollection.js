import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAuth0 } from "@auth0/auth0-react";
// import TestTableBody from "./TestTableBody";

import routes from "../../utils/routeNames";

const ViewCollection = ({ match }) => {
  const [items, setItems] = useState([[{}]] || "");
  const history = useHistory();
  const { user } = useAuth0();
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      getItems();
      loadedRef.current = true;
    }
  });

  const getItems = () => {
    fetch(
      routes.LOCALHOST +
        user.sub +
        "/collections/" +
        match.params.collectionId +
        "/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  };

  const itemToolHandler = (event, tool) => {
    const itemId = event.target.id;
    if (tool === "create") {
      createItem();
    } else if (tool === "view") {
      viewItem(itemId);
    } else if (tool === "edit") {
      editItem(itemId);
    } else if (tool === "delete") {
      deleteItem(itemId);
    }
  };

  const createItem = () => {
    history.push("/collection/" + match.params.collectionId + routes.ADD_ITEM);
  };

  const viewItem = (id) => {
    history.push(
      "/collection/" + match.params.collectionId + routes.VIEW_ITEM + `/${id}`
    );
  };

  const editItem = (id) => {
    history.push(
      "/collection/" + match.params.collectionId + routes.EDIT_ITEM + `/${id}`
    );
  };

  const deleteItem = (id) => {
    //do something
    getItems();
  };

  console.log(items);

  return (
    <>
      <div className="container">
        <div className="table-responsive">
          <div className="bg-secondary mt-2 py-2 px-2">
            <span className="fs-2 mb-0 d-flex justify-content-between ">
              <FormattedMessage id="collection.header" />
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-dark mx-2"
                  onClick={(e) => {
                    itemToolHandler(e, "create");
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
              </tr>
            </thead>
            <tbody>
              {/* <TestTableBody
                items={items}
                itemToolHandler={itemToolHandler}
                viewItem={viewItem}
              /> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewCollection;
