import React from "react";
import CardsStyles from "./css/Cards.module.css";

// cards component
export default function Cards() {
  const arr = [
    {
      id: "1",
      imgSrc:
        "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png",
      name: "Ganesan R",
      designation: "Frontend Web Developer",
    },
    {
      id: "2",
      imgSrc:
        "https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png",
      name: "Santhosh Sivan A",
      designation: "Fullstack Web Developer",
    },
    {
      id: "3",
      imgSrc:
        "https://www.vhv.rs/dpng/d/256-2569650_men-profile-icon-png-image-free-download-searchpng.png",
      name: "John Doe",
      designation: "Backend Web Developer",
    },
  ];

  return (
    <div className={CardsStyles.componentContainer}>
      {arr.map((data) => {
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