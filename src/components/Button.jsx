/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

export function Button(props) {


  return (
    <div className={styles.buttons}>
      <button onClick={() => props.decrement()}>DECREMENTAR</button>
      <button
        className={styles.createButton}
        disabled={props.disabled}
        onClick={() => props.increment()}
      >
        INCREMENTAR
      </button>
    </div>
  );
}
