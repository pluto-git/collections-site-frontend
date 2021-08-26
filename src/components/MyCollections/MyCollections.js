import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

import routes from "../../utils/routeNames";
import dummyData from "../../utils/dummyData";

const MyCollections = () => {
  const [collections, setCollections] = useState([{}]);
  const history = useHistory();
  const intl = useIntl();

  //calling api
  useEffect(() => {
    setCollections(dummyData);
  }, [setCollections]);

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
    // const collectionId = e.target.id;
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
              {collections.map((collection, index) => {
                return (
                  <tr key={index + 1}>
                    <td key={index + 2} className="align-middle">
                      {collection.name}
                    </td>
                    <td key={index + 3} className="align-middle text-center">
                      <img
                        src={collection.image}
                        className="img-fluid rounded"
                        alt="collection"
                      ></img>
                    </td>
                    <td key={index + 4}>{collection.description}</td>
                    <td key={index + 5} className="align-middle ">
                      <div className="d-flex">
                        <div
                          className="view"
                          title={intl.formatMessage({
                            id: "collection-tool.view",
                          })}
                          data-toggle="tooltip"
                          role="button"
                          onClick={(e) => {
                            collectionToolHandlder(e, "view");
                          }}
                        >
                          <i
                            className="material-icons text-primary"
                            id={collection.id}
                          >
                            &#xE417;
                          </i>
                        </div>
                        <div
                          className="edit"
                          title={intl.formatMessage({
                            id: "collection-tool.edit",
                          })}
                          data-toggle="tooltip"
                          role="button"
                          onClick={(e) => {
                            collectionToolHandlder(e, "edit");
                          }}
                        >
                          <i
                            className="material-icons text-warning"
                            id={collection.id}
                          >
                            &#xE254;
                          </i>
                        </div>
                        <div
                          className="delete"
                          title={intl.formatMessage({
                            id: "collection-tool.delete",
                          })}
                          data-toggle="tooltip"
                          role="button"
                          onClick={(e) => {
                            collectionToolHandlder(e, "delete");
                          }}
                        >
                          <i
                            className="material-icons text-danger"
                            id={collection.id}
                          >
                            &#xE872;
                          </i>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCollections;
