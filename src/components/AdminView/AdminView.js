import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AdminView = () => {
  const [userMetadata, setUserMetadata] = useState(null);
  const { user, getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUserMetadata(JSON.stringify(data.user_metadata));
          });
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return <><h1>
      {userMetadata} is the metadata!
  </h1></>;
};

export default AdminView;
