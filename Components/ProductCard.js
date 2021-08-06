import Image from "next/image";

export default function ProductCard(props) {
  return (
    <>
      <div className="ProductCardContainer">
        <Image
          src={props.imageUrl}
          width="300px"
          height="400px"
          alt="Product Image"
        />
        <h1 className="ProductName">{props.productName}</h1>
      </div>
    </>
  );
}
