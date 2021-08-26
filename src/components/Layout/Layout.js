import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const Layout = (props) => {
  return (
    <>
      <Header setLocale={props.setLocale} />
      <main >
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
