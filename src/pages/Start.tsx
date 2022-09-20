import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Start.css";
import { useState } from "react";
import {
  IonTextarea,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonList,
  IonFabButton
} from "@ionic/react";

import star from '../../public/startPageIcon.png'
import { Route } from "react-router";

const Start: React.FC = () => {
  const [text, setText] = useState<string>();
  const router = Route

function handleClick() {
    
}


  return (
    <div style={{}}>
       <IonPage style={{marginTop:'50vh'}}>
    <IonContent >
      <div style={{display: 'flex', alignItems:'center', justifyContent:'center',}}>
      <button onClick={()=>handleClick()} className="Startbutton">Start</button>
      </div>
      </IonContent>
    </IonPage> 
    </div>
    
    
  );
};

export default Start;
