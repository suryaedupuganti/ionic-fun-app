import React from "react";
import "./Avatar.scss";
import { IonThumbnail } from "@ionic/react";

const Avatar: React.FC = () => {
  return (
    <>
      {" "}
      <IonThumbnail item-start>
        <img
          src="14050919-the-word-fun-in-a-burst-of-colorful-stars-representing-an-amusing-entertainment-way-to-spend-your-ti.jpg"
          alt="Avatar"
        />
      </IonThumbnail>
    </>
  );
};
export default Avatar;
