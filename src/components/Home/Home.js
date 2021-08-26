import { useEffect, useState } from "react";

import routes from "../../utils/routeNames";
const Home = () => {
  const [testData, setTestData] = useState("");

  useEffect(() => {
    fetch(routes.HEROKU, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestData(data));
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <p className="text-center">This is a HOME PAGE! Testing API </p>
          {JSON.stringify(testData)}
        </div>
      </div>
    </>
  );
};

export default Home;
