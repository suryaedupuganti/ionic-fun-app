import React from "react";
import "./LoginFormScreen.scss";
import Avatar from "../../components/Avatar/Avatar";
import Input from "../../components/Input/Input";

const LoginFormScreen: React.FC = () => {
  return (
    <div className="LoginFormScreen">
      <div className="LoginFormScreen__Avatar">
        <Avatar></Avatar>
      </div>
      <div className="LoginFormScreen__input ion-padding-top">
        <div className="LoginFormScreen__input--email">
          <Input placeholder={"Enter Your E-mail"}></Input>
        </div>
        <div className="LoginFormScreen__input--password"></div>
        <Input placeholder={" Enter Your Password "}></Input>
      </div>
    </div>
  );
};
export default LoginFormScreen;
