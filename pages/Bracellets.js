import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const bracellets=[
  {
    produitName:"Bracellet en argent",
    imageUrl:"/Images/bracellets/bracellet1.jpg"
  },
  {
    produitName:"Bracellet en argent",
    imageUrl:"/Images/bracellets/bracellet2.jpg"
  },
  {
    produitName:"Bracellet en argent",
    imageUrl:"/Images/bracellets/bracellet3.jpg"
  },
  {
    produitName:"Bracellet en argent",
    imageUrl:"/Images/bracellets/bracellet4.jpg"
  }
]

export default function Bracellets() {
  return (
    <>
      <Head>
        <title>Nos bracellets</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Bracellets</h1>
        <div className="CardLinkContainer">
        {bracellets.map((collier,key)=><ProductCard key={key} productName={collier.produitName} imageUrl={collier.imageUrl}/>)}
        </div>
        <Footer />
      </div>
    </>
  );
}
