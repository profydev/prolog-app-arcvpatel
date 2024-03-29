import styles from "./info.module.scss";
import { Button } from "../button";

interface InfoProps {
  onClick: () => void;
}

export function Info(props: InfoProps) {
  const handleOnClick = () => {
    props.onClick();
  };
  return (
    <div className={styles.infoContainer}>
      <img src="/icons/info.svg" alt="Info" />
      <p className={styles.infoText}>
        There was a problem while loading the project data
      </p>
      <Button className={styles.tryButton} onClick={handleOnClick}>
        <span className={styles.infoText}>Try again</span>
        <span>
          <img
            className={styles.arrowIcon}
            src="/icons/arrow-right.svg"
            alt="Right"
          ></img>
        </span>
      </Button>
    </div>
  );
}
