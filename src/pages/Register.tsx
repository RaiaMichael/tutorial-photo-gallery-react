import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";
import {
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonList,
} from "@ionic/react";
import { Link } from "react-router-dom";
import {useIonRouter} from "@ionic/react";
import { API_ORIGIN } from "../api";


const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  let router = useIonRouter()

  async function registerUser() {
    // console.log("in side---");
    const res = await fetch(API_ORIGIN+"/api/v1/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username: name, password: password }),
    });

      router.push(`/login`)
 
  }

  return (
    <>
    <div className="bgImage"></div>
    <IonPage style={{ padding: "20px" }}>
      <IonContent>
        <h1>登記用戶</h1>
        <div className="inputName">
        <IonItem routerAnimation={undefined}>
          <IonLabel style={{ marginBottom: "10px" }} position="stacked">Name</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)}>
            {" "}
          </IonInput>
        </IonItem>
        </div>
        <div className="inputPasword">
        <IonItem routerAnimation={undefined}>
          <IonLabel style={{ marginBottom: "10px" }} position="stacked">Password</IonLabel>
          <IonInput
            value={password}
            type="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
          >
            {" "}
          </IonInput>
        </IonItem>
        </div>
      </IonContent>
      {errorMsg && <IonItem routerAnimation={undefined}>{errorMsg}</IonItem>}
      
      <button className="Startbutton" onClick={() => registerUser()}>
      登記
      </button>
    </IonPage>
    </>
  );
};

export default Register;
