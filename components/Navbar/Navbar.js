import React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/blog">
        <a>BLog</a>
      </Link>
      <Link href="/users">
        <a>Liste</a>
      </Link>
    </nav>
  )
}
