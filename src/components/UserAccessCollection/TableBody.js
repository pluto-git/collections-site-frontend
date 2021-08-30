import { useIntl } from "react-intl";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TableBody = ({ items, itemToolHandler, viewItem }) => {
  const intl = useIntl();
  return (
    <>
      {items && items.map((item, index) => {
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
                  viewItem(item._id);
                }}
              >
                {item.name}
              </div>
            </td>

            <td key={index + 3} className="align-middle">
              {item.theme}
            </td>
            <td key={index + 5} className="align-middle">
              <ReactMarkdown
                children={item.description}
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
                    itemToolHandler(e, "view");
                  }}
                >
                  <i
                    className="material-icons text-primary"
                    id={item._id}
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
                    itemToolHandler(e, "edit");
                  }}
                >
                  <i
                    className="material-icons text-warning"
                    id={item._id}
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
                    itemToolHandler(e, "delete");
                  }}
                >
                  <i className="material-icons text-danger" id={item._id}>
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
