import React from "react";
import styles from "./Confirmer.module.css";
import image3 from "../../assets/image3.png"
import { useNavigate } from "react-router-dom";

function Confirmer() {
  let navigate = useNavigate();
  return <div className={styles.big}>
    <div  className={styles.ct}>
      <div className={styles.imagecontainer}>
    <img className={styles.image} src={image3}/>
    </div>
    <div className={styles.paragraph}>
    <p className={styles.first_paragraph}> Votre lettre est reçue avec succés</p>
    <p className={styles.second_paragraph}> Notre manager vous contactera dans les plus brefs délais</p>
    <input type="button" value="Retourner" className={styles.buuton} onClick={()=>navigate('/shop')}></input>
    </div>
    
    </div>
     
  </div>;
}

export default Confirmer;
