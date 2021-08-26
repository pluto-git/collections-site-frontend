import { FormattedMessage } from "react-intl";
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container text-secondary text-center">
        <FormattedMessage id="footer.content" />
      </div>
    </footer>
  );
};

export default Footer;
