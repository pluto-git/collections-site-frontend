import { FormattedMessage } from "react-intl";

const NoMatch = () => {
  return (
    <>
      <div className="container  h-100 ">
        <div className="d-flex fs-2 fw-bold text-center ">
          <div className="my-auto">
            <FormattedMessage id="404-page" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
