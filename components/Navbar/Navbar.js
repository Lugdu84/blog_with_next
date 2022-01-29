import React from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid justify-content-center">
        <Link href="/">
          <a className='navbar-brand mx-4'>Accueil</a>
        </Link>
        <Link href="/blog">
          <a className='navbar-brand mx-4'>BLog</a>
        </Link>
        <Link href="/users">
          <a className='navbar-brand mx-4'>Liste</a>
        </Link>
      </div>
    </nav>
  );
}
