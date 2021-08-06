import baniereStyle from '../styles/Banniere.module.css';

export const Banniere=()=>{
    return(
        <div className={baniereStyle.Baniere}>
        <div className={baniereStyle.TextContainer}>
          <h1 className={baniereStyle.title}>Bijoutier Famah</h1>
          <h2 className={baniereStyle.underTitle}>
            Bijoutier professionnel à Madagascar. <br />
            <br />
            Commande, Creation et transformation en or et argent
          </h2>
        </div>
      </div>
    )
}
