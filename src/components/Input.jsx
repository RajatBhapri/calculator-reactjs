import styles from "./Input.module.css";

const Input = ({ curval }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={curval}
      readOnly
    ></input>
  );
};

export default Input;
