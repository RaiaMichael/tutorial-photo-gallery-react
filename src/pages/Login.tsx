import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
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

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  let router = useIonRouter()

  async function getUser() {
    console.log("in side---");
    const res = await fetch(API_ORIGIN+`/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ name: name, password: password }),
    });
    const result = await res.json();
    // console.log(result.item[0]._id!);
    // return
   
    if (result.statusCode === 200) {
      router.push(`/tab/1`)
      localStorage.setItem("user_id", result.item[0]._id);
      // router.push(`/tab/1?user_id=${result.item[0]._id}`)
    } else {
      setErrorMsg("invalid username or passworrd!");

      return;
    }
  }

  return (
    <>
  <div className="bgImage"></div>
    <IonPage style={{ padding: "20px" }}>
      
      <IonContent>
      <div className="inputName">
        <IonItem routerAnimation={undefined}>
          
          <IonLabel style={{ marginBottom: "10px" }} position="stacked"><h1>Name</h1></IonLabel>
          <IonInput value={name} onIonChange={(e) => setName(e.detail.value!)}>
            {" "}
          </IonInput>
        </IonItem>
        </div>
        <div className="inputPasword">
        <IonItem routerAnimation={undefined}>
          <IonLabel style={{ marginBottom: "10px" }} position="stacked"><h1>Password</h1></IonLabel>
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
      <div className="userLogin">
      <button className="loginButton" onClick={() => getUser()}>
        登入
      </button>
      <Link to={`/register`}>
      <div> <button className="Registerbutton">登記</button>  </div>
      </Link>
      </div>
    </IonPage>
    </>
  );
};

export default Login;
