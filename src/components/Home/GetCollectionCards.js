import CollectionCard from "./CollectionCard";
import { FormattedMessage } from "react-intl";

const GetCollectionCards = ({ image, description }) => {
  return (
    <>
      <br />
      <h2 className="text-center"><FormattedMessage id="home-collectionsCard.header" /></h2>
      <div className="row">
        <div className="col">
          <CollectionCard image={image} description={description} />
        </div>
        <div className="col">
          <CollectionCard image={image} description={description} />
        </div>
        <div className="col">
          <CollectionCard image={image} description={description} />
        </div>
        <div className="col">
          <CollectionCard image={image} description={description} />
        </div>
        <div className="col">
          <CollectionCard image={image} description={description} />
        </div>
      </div>
      <br />
    </>
  );
};

export default GetCollectionCards;
