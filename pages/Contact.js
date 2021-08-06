import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";
import style from "../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere />
        <h1 className="pageTitle">Contacter nous</h1>
        <div className={style.contactContainer}>
          <div className={style.contactBlock}>
            <p className={style.contactTitle}>E-mail</p>
            <p className={style.contactObject}>Famabijoutier@gmail.com</p>
          </div>
          <div className={style.contactBlock}>
            <p className={style.contactTitle}>Numero téléphone</p>
            <p className={style.contactObject}>+261331986741</p>
          </div>
        </div>
        <div className={style.localisationBlock}>
          <h2 className={style.blockTitle}>Localisation</h2>
          <p className={style.blockDescription}>
            Notre bijoiterie se trouve à Antsirabe, Madagascar.le long de la
            route Tana juste à 100 mêtre au nord de la jirama.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
