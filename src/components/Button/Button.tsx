import React from "react";
import "./Button.scss";
import { IonButton } from "@ionic/react";
import { text } from "ionicons/icons";

type ButtonProps = { text: String };
const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <IonButton className="button" slot="start" color="primary">
        {" "}
        {text}
      </IonButton>{" "}
    </>
  );
};
export default Button;
