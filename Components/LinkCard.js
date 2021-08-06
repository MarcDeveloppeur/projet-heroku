import Image from "next/image";
import Link from "next/link";

export function LinkCard(props) {
  return (
    <>
      <div className="CardContainer">
        <Image src={props.imageLink} width="100%" height="100px" alt="Icones" />
        {props.title ? (
          <h1 className="LinkTitle">{props.title}</h1>
        ) : (
          <h1 className="LongTitle">{props.longTitle}</h1>
        )}
        <p className="LinkDescription">{props.description}</p>
        <div className="seeMore">
            <Link href={props.linkUri}>Voire tous</Link>
        </div>
      </div>
    </>
  );
}
