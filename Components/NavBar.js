import Link from "next/link";
import NavBarMobile from "./NavBarMobile";

export default function NavBar() {
  return (
    <>
      <div className="NavContainer">
        <div className="NavItems">
          <div className="NavItem">
            <Link href="/">Acceuil</Link>
          </div>
          <div className="NavItem ProduitItem">
            <p id="ProduitText">Nos Bijoux</p>
            <div className="underItemsContainer">
              <div className="underItem">
                <Link href="/Colliers">Colliers</Link>
              </div>
              <div className="underItem">
                <Link href="/Bagues">Bagues</Link>
              </div>
              <div className="underItem">
                <Link href="/Bracellets">Bracellets</Link>
              </div>
              <div className="underItem">
                <Link href="/Boucles">Boucles d'oreille</Link>
              </div>
            </div>
          </div>
          <div className="NavItem">
            <Link href="/Contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="MobileNavContainer">
        <NavBarMobile />
      </div>
    </>
  );
}
