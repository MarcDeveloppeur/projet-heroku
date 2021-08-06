import Head from "next/head";
import Image from "next/image";
import { Banniere } from "../Components/baniere";
import Footer from "../Components/Footer";
import { LinkCard } from "../Components/LinkCard";
import Navigateur from "../Components/NavBar";
import ProductCard from "../Components/ProductCard";

const colliers=[
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier1.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier2.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier3.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier4.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier5.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier6.jpg"
  },
  {
    productName:"Collier en argent",
    imageUrl:"/Images/colliers/collier7.jpg"
  },
]

export default function Collier() {
  return (
    <>
      <Head>
        <title>Nos colliers</title>
      </Head>
      <div className="container">
        <Navigateur />
        <Banniere/>
        <h1 className="pageTitle">Nos Colliers</h1>
        <div className="CardLinkContainer">
          {colliers.map((collier,key)=><ProductCard key={key} productName={collier.productName} imageUrl={collier.imageUrl}/>)}
        </div>
        <Footer />
      </div>
    </>
  );
}
