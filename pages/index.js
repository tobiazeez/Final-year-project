import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import aeies from "/public/images/aeies.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Departmental Voting App</title>
        <meta name="description" content="Departmental Voting App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Departmental Voting App!
        </h1>
        <p className={styles.description}>
          Please login to access the voting system
        </p>
        <div className={styles.grid}>
          <Link href="/loginpage" className={styles.card}>
            <h3>Login &rarr;</h3>
            <p>Access the voting system</p>
          </Link>
        </div>{" "}
        <div className={styles.grid}>
          <Link href="/signup" className={styles.card}>
            <h3>Register &rarr;</h3>
            <p>Access the Login Page</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.powered}>
          Powered by
          <Image
            src={aeies}
            width={100}
            height={80}
            className={styles.logo}
            alt="logo"
          />
        </div>
      </footer>
    </div>
  );
}
