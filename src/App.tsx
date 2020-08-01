import React from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
// import Avatar from "./components/Avatar/Avatar";
// import Button from "./components/Button/Button";
// import LoginFormScreen from "./screens/LoginFormScreen/LoginFormScreen";
// import { IonMenu } from "@ionic/react";
import Menu from "./components/Menu/Menu";
import { IonApp } from "@ionic/react";
import NewIngredientScreen from "./screens/NewIngredientsScreen/NewIngredientsScreen";

const App: React.FC = () => {
  return (
    <IonApp>
      {/* <IonMenu></IonMenu>
      <Avatar></Avatar>
      <LoginFormScreen></LoginFormScreen> */}
      <NewIngredientScreen></NewIngredientScreen>

      <Menu></Menu>
    </IonApp>
  );
};
export default App;
