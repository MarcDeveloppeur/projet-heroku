import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const boucles=[
  {
    produitName:"Boucles d'oreille en argent",
    imageUrl:"/Images/boucles/boucle1.jpg"
  },
  {
    produitName:"Boucles d'oreille en argent",
    imageUrl:"/Images/boucles/boucle2.jpg"
  },
  {
    produitName:"Boucles d'oreille en argent",
    imageUrl:"/Images/boucles/boucle3.jpg"
  },
  {
    produitName:"Boucles d'oreille en argent",
    imageUrl:"/Images/boucles/boucle4.jpg"
  },
  {
    produitName:"Boucles d'oreille en argent",
    imageUrl:"/Images/boucles/boucle5.jpg"
  },
]

export default function Boucles() {
  return (
    <>
      <Head>
        <title>Nos Boucles d'oreille</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Boucles d'oreille</h1>
        <div className="CardLinkContainer">
        {boucles.map((collier,key)=><ProductCard key={key} productName={collier.produitName} imageUrl={collier.imageUrl}/>)}
        </div>
        <Footer />
      </div>
    </>
  );
}
