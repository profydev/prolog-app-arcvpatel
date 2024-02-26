import Link from "next/link";
import styles from "./footer-container.module.scss";

export function FooterContainer() {
  return (
    <footer className={styles.container}>
      <div className={styles.versionContainer}>
        Version {process.env.npm_package_version}
      </div>
      <div className={styles.footerCenterItems}>
        <Link href="#">Docs</Link>
        <Link href="#">API</Link>
        <Link href="#">Help</Link>
        <Link href="#">Community</Link>
      </div>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/icons/logo-small.svg" alt="Logo" />
      </div>
    </footer>
  );
}
