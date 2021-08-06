import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Bijoux</h1>
        <div className="CardLinkContainer">
          <LinkCard
            imageLink="/bague.jpg"
            linkUri="/Bagues"
            title="Bagues"
            description="Nous créons pour vous vos bague sur commande"
          />
          <LinkCard
            imageLink="/collier.png"
            linkUri="/Colliers"
            title="Colliers"
            description="Nous créons pour vous vos bague sur commande"
          />
          <LinkCard
            imageLink="/boucle.png"
            linkUri="/Boucles"
            longTitle="Boucles d'oreille"
            description="Nous créons pour vous vos bague sur commande"
          />
          <LinkCard
            imageLink="/bracellet.jpg"
            linkUri="/Bracellets"
            title="Bracellets"
            description="Nous créons pour vous vos bague sur commande"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}
