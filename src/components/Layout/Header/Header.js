import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage, useIntl } from "react-intl";

import Navpart from "./Navpart";

import Home from "../../Home/Home";
import CreateCollection from "../../CreateCollection/CreateCollection";
import ViewCollection from "../../ViewCollection/ViewCollection";
import EditCollection from "../../EditCollection/EditCollection";
import AdminView from "../../AdminView/AdminView";
import MyCollections from "../../MyCollections/MyCollections";
import AddItem from "../../AddItem/AddItem";
import NoMatch from "../../404/404";

import routes from "../../../utils/routeNames";
import imgSources from "../../../utils/imgSources";
import { setToLS, getFromLS } from "../../../utils/localeStorage";
import Loading from "../../Loading/Loading";
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute";

import styles from "./Header.module.css";

const Header = (props) => {
  const intl = useIntl();
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const theme = getFromLS("theme") || "dark";

  if (isLoading) {
    return <Loading />;
  }

  const handleSetLocale = () => {
    const l = intl.locale;
    if (l === "en") {
      props.setLocale("ru");
      setToLS("localeLanguage", "ru");
    } else {
      props.setLocale("en");
      setToLS("localeLanguage", "en");
    }
  };

  const handleSetTheme = () => {
    const t = theme;
    if (t === "light") {
      props.setTheme("dark");
      setToLS("theme", "dark");
    } else {
      props.setTheme("light");
      setToLS("theme", "light");
    }
  };

  //   const themes = [
  //     {
  //       light: {
  //         background: "bg-primary",
  //       },
  //     },
  //     {
  //       dark: {
  //         background: "bg-dark",
  //       },
  //     },
  //   ];

  //  console.log(themes);
  return (
    <Router>
      <header className="p-3 text-white bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to={routes.HOME}
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img
                className={styles["filter-orange"]}
                alt="logo"
                src={imgSources.LOGO}
                height="40"
              />
            </Link>
            <Navpart
              handleSetLocale={handleSetLocale}
              theme={theme}
              handleSetTheme={handleSetTheme}
              imgSources={imgSources}
            />

            <form className="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3">
              <input
                type="search"
                className="form-control form-control-dark"
                placeholder={intl.formatMessage({
                  id: "header-menu.searchPlaceHolder",
                })}
                aria-label="Search"
              />
            </form>

            {/* Login button */}
            <div className="text-end">
              {!isAuthenticated ? (
                <img
                  className={styles["filter-orange"]}
                  alt="logo"
                  src={imgSources.LOGIN}
                  height="40"
                  role="button"
                  onClick={() => loginWithRedirect({ ui_locales: intl.locale })}
                />
              ) : (
                <>
                  <div
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className={styles["filter-orange"]}
                      alt="logo"
                      src={imgSources.PROFILE}
                      height="40"
                    />
                  </div>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link
                        to={routes.ADMIN_VIEW}
                        className={
                          "nav-link dropdown-item text-black " + styles["link"]
                        }
                      >
                        <FormattedMessage id="header-menu.profile.adminView" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={routes.MY_COLLECTIONS}
                        className={
                          "nav-link dropdown-item text-black " + styles["link"]
                        }
                      >
                        <FormattedMessage id="header-menu.profile.myCollections" />
                      </Link>
                    </li>

                    <li>
                      <div
                        className="dropdown-item pe-auto"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        <FormattedMessage id="header-menu.profile.logout" />
                      </div>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route
          exact
          path={routes.VIEW_COLLECTION + "/:collectionId"}
          component={ViewCollection}
        />
        {/* Need to check the admin route! on the backend!*/}

        <ProtectedRoute path={routes.ADMIN_VIEW} component={AdminView} />
        <ProtectedRoute
          exact
          path={routes.MY_COLLECTIONS}
          component={MyCollections}
        />
        <ProtectedRoute
          exact
          path={routes.CREATE_COLLECTION}
          component={CreateCollection}
        />

        <ProtectedRoute
          exact
          path={routes.EDIT_COLLECTION + "/:collectionId"}
          component={EditCollection}
        />
        <ProtectedRoute
          exact
          path={"/collection/:collectionId" + routes.ADD_ITEM}
          component={AddItem}
        />

        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </Router>
  );
};
// /collections
// /create-collection
// /edit-collection/:collectionId

// /collection/:collectionId  to VIEW
// /collection/:collectionId/add-item to ADD ITEM
// /collection/:collectionId/edit-item/:itemId to EDIT ITEM

export default Header;
