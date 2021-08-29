import ItemCard from "./ItemCard";
import { FormattedMessage } from "react-intl";

const LastAddedItems = () => {
  const itemName = "Harry Potter 2 (book)";
  const collectionName = "My bookshelf books";

  return (
    <>
    <br />
      <h2 className="text-center"><FormattedMessage id="home-lastAddedItems.header" /></h2>
      <div className="row">
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
        <div className="col">
          <ItemCard collectionName={collectionName} itemName={itemName} />
        </div>
      </div>
      <br />
    </>
  );
};

export default LastAddedItems;
