import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const CollectionCard = ({ image, description, name, _id, items }) => {
  const history = useHistory();

  const visitCollection = (e) => {
    const id = e.target.id;
    history.push("guest/collection/" + id);
  };

  return (
    <>
      <div className="card">
        <img className="card-img-top img-fluid" src={image} alt="Card cap" />
        <div className="text-center"> {name} </div>
        <div className="text-center">
          {items.length}
          <FormattedMessage id="home-collections-item-quantity" />
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="btn btn-dark mb-10 " onClick={visitCollection} id={_id}>
          <FormattedMessage id="home-collections-button-visit" />
        </div>
      </div>
    </>
  );
};

export default CollectionCard;
