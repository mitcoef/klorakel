import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import { Wrapper } from "../components/components";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Wrapper>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <text>{`Powered by Harndrang and ❤️`}</text>
        </footer>
      </Wrapper>
    </>
  );
}
