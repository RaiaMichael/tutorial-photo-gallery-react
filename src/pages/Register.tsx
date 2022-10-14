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


const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  let router = useIonRouter()

  async function registerUser() {
    // console.log("in side---");
    const res = await fetch("http://localhost:8080/api/v1/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ username: name, password: password }),
    });
    // const result = await res.json();
    // // console.log(result.item[0]._id!);
    // // return
   
    // if (result.statusCode === 200) {
      router.push(`/login`)
    // } else {
    //   setErrorMsg("invalid username or passworrd!");

    //   return;
    // }
  }

  return (
    <>
    <div className="bgImage"></div>
    <IonPage style={{ padding: "200px" }}>
      <IonContent>
        <h1>登記用戶</h1>
        <IonItem routerAnimation={undefined}>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)}>
            {" "}
          </IonInput>
        </IonItem>
        <IonItem routerAnimation={undefined}>
          <IonLabel position="stacked">Password</IonLabel>
          <IonInput
            value={password}
            type="password"
            onIonChange={(e) => setPassword(e.detail.value!)}
          >
            {" "}
          </IonInput>
        </IonItem>
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
