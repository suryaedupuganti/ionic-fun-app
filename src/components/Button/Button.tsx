import React from "react";
import "./Button.scss";
import { IonButton } from "@ionic/react";

const Button: React.FC = () => {
  return (
    <>
      <IonButton slot="start" color="primary">
        Primary
      </IonButton>{" "}
    </>
  );
};
export default Button;
