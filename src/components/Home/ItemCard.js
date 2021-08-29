const ItemCard = ({ collectionName, itemName }) => {
  return (
    <>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{itemName}</h5>
          <p className="card-text"> Tags: #goog #goo #eroo</p>
          <a href="/" className="card-link">
            {collectionName}
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
