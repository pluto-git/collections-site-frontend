import { useIntl } from "react-intl";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TableBody = ({ collections, collectionToolHandlder, viewCollection }) => {
  const intl = useIntl();
  return (
    <>
      {collections.map((collection, index) => {
        return (
          <tr key={index + 1}>
            <td key={index + 2} className=" align-middle link-primary">
              <div
                className="view "
                title={intl.formatMessage({
                  id: "collection-tool.view",
                })}
                data-toggle="tooltip"
                role="button"
                onClick={() => {
                  viewCollection(collection._id);
                }}
              >
                {collection.name}
              </div>
            </td>

            <td key={index + 3} className="align-middle">
              {collection.theme}
            </td>
            <td key={index + 4} className="align-middle text-center">
              <img
                src={collection.image}
                className="img-fluid rounded"
                alt="collection"
                width="60"
              />
            </td>
            <td key={index + 5} className="align-middle">
              <ReactMarkdown
                children={collection.description}
                remarkPlugins={[remarkGfm]}
              />
            </td>
            <td key={index + 6} className="align-middle ">
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
                    id={collection._id}
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
                    id={collection._id}
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
                  <i className="material-icons text-danger" id={collection._id}>
                    &#xE872;
                  </i>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default TableBody;
