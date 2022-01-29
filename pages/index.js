import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienveue sur Code.io</h1>
      <span>Le blog communautaire des aficionados de déveleppement web.</span>
      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximisez votre culture web
              </h6>
              <p className="card-text">
                Chaque auteur tente de vous apporter le plus de valeur possible
                par article
              </p>
              <Link href="/blog">
                <a className="btn btn-primary">Visitez le bog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">
                Faites un tour vers la liste des membres
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez des devs
              </h6>
              <p className="card-text">
                Ajoutez, invitez et discutez avec les différents membres.
              </p>
              <Link href="/blog">
                <a className="btn btn-primary">Utilisateurs</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
