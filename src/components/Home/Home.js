import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CollectionCard from "./CollectionCard";
import routes from "../../utils/routeNames";
import { FormattedMessage } from "react-intl";

const Home = () => {
  const { user } = useAuth0();
  const [collections, setCollections] = useState([{}]);

  useEffect(() => {
    fetch(routes.LOCALHOST + "all-collections", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCollections(data));
  }, []);

  useEffect(() => {
    if (user) {
      fetch(routes.LOCALHOST + "save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user_id: user.sub,
          user_email: user.email,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  }, [user]);
  console.log(collections);
  return (
    <>
      <div className="container">
        {/* <LastAddedItems /> */}
        <h2 className="text-center">
          <FormattedMessage id="home-collectionsCard.header" />
        </h2>
        {collections.map(
          (item, index) =>
            item.collections &&
            item.collections.map((col, subIndex) => {
              console.log(col.name);
              return (
                <div className="row" key={subIndex + 1}>
                  <div className="col" key={subIndex + 2}>
                    <CollectionCard
                      name={col.name}
                      image={col.image}
                      description={col.description}
                      _id={col._id}
                      items={col.items}
                    />
                  </div>
                </div>
              );
            })
        )}
        <br />
        {/* <SimpleTagCloud /> */}
      </div>
    </>
  );
};

export default Home;
