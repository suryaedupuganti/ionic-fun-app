import React from "react";
import "./Input.scss";
import { IonInput } from "@ionic/react";
type InputProps = { placeholder: string };
const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <IonInput
      className="my-text"
      placeholder={placeholder}
      required
      type="email"
    ></IonInput>
  );
};
export default Input;
