import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Home - Next Tutorial</title>'
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome Home</h1>
      </main>
    </div>
  );
}
