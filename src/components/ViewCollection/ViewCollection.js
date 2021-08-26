const ViewCollection = ({ match }) => {
  return (
    <>
      {"This is a View Collection Page. The match id is " +
        match.params.collectionId}
    </>
  );
};


export default ViewCollection;