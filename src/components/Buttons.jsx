import styles from "./buttons.module.css";

const Buttons = ({ buttonClicked }) => {
  const num = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    ".",
    "0",
    "=",
  ];

  return (
    <div className={styles.box}>
      {num.map((items) => (
        <button
          className={styles.container}
          onClick={() => buttonClicked(items)}
        >
          {items}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
