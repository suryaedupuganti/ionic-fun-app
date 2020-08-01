import React from "react";
import "./NewIngredientsScreen.scss";
import { IonSelect, IonSelectOption } from "@ionic/react";
import Button from "../../components/Button/Button";
import { start } from "repl";

const NewIngredientScreen: React.FC = () => {
  return (
    <>
      <input placeholder={"name of the ingredient"}></input>
      <IonSelect value={"brown"}>
        <IonSelectOption value={"brown"}>brown</IonSelectOption>
        <IonSelectOption value={"blue"}>blue</IonSelectOption>
        <IonSelectOption value={"white"}>white</IonSelectOption>
        <IonSelectOption value={"red"}>red</IonSelectOption>
        <IonSelectOption value={"black"}>black</IonSelectOption>
      </IonSelect>
      <Button text={"ADD"}></Button>
      <Button text={"Cancel"}></Button>
    </>
  );
};
export default NewIngredientScreen;
