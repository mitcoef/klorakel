import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className={styles.footer}>Powered by Harndrang</footer>
    </>
  );
}
