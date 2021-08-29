import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LastAddedItems from "./LastAddedItems";
import GetCollectionCards from "./GetCollectionCards";
import SimpleTagCloud from "./SimpleTagCloud";

import routes from "../../utils/routeNames";

const Home = () => {
  const { user } = useAuth0();

  useEffect(() => {
    fetch(routes.LOCALHOST, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
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

  const image =
    "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png";
  const description =
    "It is a long established fact that a reader will be distracted by the text.";
  return (
    <>
      <div className="container">
        <LastAddedItems />
        <GetCollectionCards image={image} description={description} />
        <SimpleTagCloud />
      </div>
    </>
  );
};

export default Home;
