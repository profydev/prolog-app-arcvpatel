import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <img
        className={styles.spinner}
        src="/icons/loading-circle.svg"
        alt="Spinner"
      />
    </div>
  );
}
