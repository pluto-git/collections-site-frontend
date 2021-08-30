import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FormattedMessage, useIntl } from "react-intl";

import routes from "../../../utils/routeNames";
import styles from "./Header.module.css";
const Navpart = ({ handleSetLocale, imgSources }) => {
  const intl = useIntl();
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <Link to={routes.HOME} className="nav-link px-2 text-secondary">
            <FormattedMessage id="header-menu.home" />
          </Link>
        </li>

        {isAuthenticated && (
          <li>
            <Link
              to={routes.CREATE_COLLECTION}
              className="nav-link px-2 text-white"
            >
              <FormattedMessage id="header-menu.createCollections" />
            </Link>
          </li>
        )}

        <li className="nav-item dropdown">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className={styles["filter-white"]}
              alt="logo"
              src={imgSources.SETTINGS}
            />
          </div>
          <ul
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              {intl.locale === "en" ? (
                <span
                  className="dropdown-item pe-auto"
                  onClick={handleSetLocale}
                >
                  <FormattedMessage id="header-menu.languageToRussian" />
                </span>
              ) : (
                <span
                  className="dropdown-item pe-auto"
                  onClick={handleSetLocale}
                >
                  <FormattedMessage id="header-menu.languageToEnglish" />
                </span>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Navpart;
