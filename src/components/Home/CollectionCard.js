const CollectionCard = ({image, description}) => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={image} alt="Card cap" />
        <div className="text-center"> Header </div>
        <div className="text-center"> 5 items </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <a href="/" className="btn btn-dark ">Visit the collection </a>
      </div>
    </>
  );
};

export default CollectionCard;
