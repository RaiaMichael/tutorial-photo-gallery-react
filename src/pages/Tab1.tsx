import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonImg,
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
import { API_ORIGIN } from "../api";

interface Grades { 
  _id: string;
  level: string
 }


const Tab1: React.FC = () => {
  const [text, setText] = useState<string>();
  const [data, setData] = useState<Grades[]>([])

  let params = new URLSearchParams(useLocation().search)
  // let user_id = params.get('user_id')
  
  async function getData(){
    const res = await fetch('https://api.michaelraia.me/api/v1/grade/get')
    const ele = await res.json()
    setData(ele.data)
  }

  useEffect(()=>{
    getData()
  },[])

  let pPicture: {name: string}[] = [
    {"name":"https://bpic.51yuansu.com/pic3/cover/03/37/04/5b8fbabfa1ce6_610.jpg?x-oss-process=image/sharpen,100"},
  ]


  return (
    <IonPage>
      <div className="tab1Image"></div>
      <IonContent>
        <div className="PLevel 1To3">
      {data.map((ite)=>(
        <Link to={`/tab/subject?grade_id=${ite._id}`}> 
        {/* <Link to={`/tab/subject?grade_id=${ite._id}&user_id=${user_id}`}>  */}
        <button key={ite._id} className="GradeButton p1"><h1 key={ite.level}>{ite.level}</h1>
        {/* {pPicture.map((pic)=>(
          <IonImg src={pic.} />
        ))} */}
        </button>
        </Link>  
      ))}
             
        
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;


