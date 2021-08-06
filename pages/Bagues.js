import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const colliers=[
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague1.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague2.jpg"
  },  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague3.jpg"
  },  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague4.jpg"
  },  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague5.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague6.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague7.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague9.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague10.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague11.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague12.jpg"
  },
  {
    produitName:"Bague en argent",
    imageUrl:"/Images/bagues/bague13.jpg"
  }

]

export default function Bagues() {
  return (
    <>
      <Head>
        <title>Nos bagues</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Bagues</h1>
        <div className="CardLinkContainer">
           {colliers.map((collier,key)=><ProductCard key={key} productName={collier.produitName} imageUrl={collier.imageUrl}/>)}
        </div>
        <Footer />
      </div>
    </>
  );
}
