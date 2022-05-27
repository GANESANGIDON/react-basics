import React from "react";
import CardsStyles from "./css/Cards.module.css";
import CardsData from './json/cardsData.json';

// cards component
export default function Cards() {

  return (
    <div className={CardsStyles.componentContainer}>
      {CardsData.map((data) => {
        return (
          <div className={CardsStyles.card} key={data.id}>
            <div className={CardsStyles.cardImgContainer}>
              <img
                className={CardsStyles.cardImg}
                src={data.imgSrc}
                alt="profile_picture"
              />
            </div>
            <div className={CardsStyles.profileDescription}>
              <h2 className={CardsStyles.profileName}>{data.name}</h2>
              <p className={CardsStyles.profileDesignation}>
                {data.designation}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}