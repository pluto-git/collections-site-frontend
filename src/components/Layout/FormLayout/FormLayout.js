import styles from "./FormLayout.module.css";

const FormLayout = (props) => {
  return (
    <>
      <div className={"container bg-light my-3 " + styles["special-container"]}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {props.children}
        </form>
      </div>
    </>
  );
};

export default FormLayout;
