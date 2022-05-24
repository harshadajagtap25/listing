import React from "react";
import CardButton from "./CardButton";
import styles from "./Card.module.css";
function Card({date,text1,val1,val2,style}) {
  return (
    <div className={styles.card} style={style}  >
      <div>{date}</div>
      <CardButton />
      <div className={styles.text}>
        <h1  >{text1}</h1>
      </div>
      <div>
        <p>{val1} - {val2}</p>
      </div>
    </div>
  );
}

export default Card;
