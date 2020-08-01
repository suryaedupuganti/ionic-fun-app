import React from "react";
import "./Menu.scss";
import {
  IonApp,
  IonMenu,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonRouterLink,
  IonContent,
  IonList,
  IonListHeader,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { logOutOutline } from "ionicons/icons";
const Menu: React.FC = () => {
  return (
    <IonApp>
      <IonMenu contentId="main" type="overlay">
        <IonHeader className="ion-no-border">
          <IonToolbar>this is my app</IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>
              Fethi Ouali
              <IonButton>
                <IonIcon slot="end" icon={logOutOutline} />
              </IonButton>
            </IonListHeader>
          </IonList>
        </IonContent>
      </IonMenu>
    </IonApp>
  );
};
export default Menu;
