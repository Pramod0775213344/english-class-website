import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>

      <h1 className={styles.title}>Welcome to My Website</h1>
    </div>
  );
}
