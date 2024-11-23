import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Navbar"

export default function Home() {
  return (
    <div className={styles.page}>
      <header> <Navbar/> </header>
      <main className={styles.main}>
     <section>
      <div className={`${styles.sitewrap}`}>
        <div className={`${styles.gridcontainer}`}>
          <div className={`${styles.gridcell}`}>
            <div className={`${styles.linkcard} ${styles.large}`}>
            <a href="./about" target="_blank" rel="noopener">
            <div className={`${styles.aspectratiohelper}`}></div>
            </a>
            </div>
          </div>
        </div>
      </div>
      
     </section>
      </main>
      <footer className={styles.footer}>
        <a href="/page.js" className="a-footer"><Image
      aria-hidden
      src="/footerlogo.svg"
      alt="Footer Logo"
      width={75}
      height={75}
      />
      </a>
      <span>portfolio voor limitnl</span>
      </footer>
    </div>
  );
}
