import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
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
import { informationCircle, map } from "ionicons/icons";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useLocation, useParams } from "react-router"

interface Grades { 
  _id: string;
  level: string
 }


const Tab1: React.FC = () => {
  const [text, setText] = useState<string>();
  const [data, setData] = useState<Grades[]>([])

  async function getData(){
    const res = await fetch('http://localhost:8080/api/v1/grade/get')
    const ele = await res.json()
    setData(ele.data)
  }

  useEffect(()=>{
    getData()
  },[])


  
  return (
    <IonPage>
      <IonContent>
        <div className="PLevel 1To3">
      {data.map((ite)=>(
        <Link to={`/subject?grade_id=${ite._id}`}>
        <button key={ite._id} className="GradeButton p1"><h1>{ite.level}</h1></button>
        </Link>
          
      ))}
              
        
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;


