// @ts-ignore
import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonItem,
  IonLabel,
  // @ts-ignore
} from "@ionic/react";
import {
  camera,
  trash,
  close,
  pin,
  walk,
  warning,
  wifi,
  wine,
  trophySharp,
  trophy,
  trophyOutline,
  person,
} from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../hooks/usePhotoGallery";
import "./Tab2.css";

interface User{
  _id: string;
  username: string;
  password: string;
  chineseMarks: number;
  englishMarks: number;
  mathMarks: number;
  commonMarks: number;
  allMarks: number
}

const Tab2: React.FC = () => {
  const [data, setData]=  useState<User[]>([])
  const [selected, setSelected] = useState<String>("")
  

  async function getData(){
    const res = await fetch('http://localhost:8080/api/v1/user/getalluser',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    const outCome = await res.json()
    // console.log(outCome)
    setData(outCome.item)
    if(selected === ''){
      data.sort((a, b) => b.chineseMarks - a.chineseMarks)
     
    }
    
  }

  console.log(data)
  // const sumWithInitial = array1.reduce(
  //   (previousValue: User, currentValue:User) => previousValue + currentValue,
  //   initialValue
  // );

  
// expected output: 10
  function clickSubject(subject: string) {
    console.log(subject)
    if (subject === "chinese") {
      data.sort((a, b) => b.chineseMarks - a.chineseMarks)
      setData([...data])
      setSelected(subject)
    } else if (subject === "english"){
      data.sort((a, b) => b.englishMarks - a.englishMarks)
      setData([...data])
      setSelected(subject)
    } else if (subject === "math"){
      data.sort((a, b) => b.mathMarks - a.mathMarks)
      setData([...data])
      setSelected(subject)
    } else if (subject === "common"){
      data.sort((a, b) => b.commonMarks - a.commonMarks)
      setData([...data])
      setSelected(subject)
    } else if (subject === "all"){

    const allMarkArr =[]
    for (let item of data){
      allMarkArr.push({_id: item._id, password:item.password, username: item.username, chineseMarks: item.chineseMarks, mathMarks: item.mathMarks,
        commonMarks:item.commonMarks, englishMarks:item.englishMarks, allMarks: item.chineseMarks + item.commonMarks + item.mathMarks + item.englishMarks})
    }

    allMarkArr.sort((a,b)=>b.allMarks - a.allMarks)
    setData([...allMarkArr])
    setSelected(subject)
    }
  }
  

  useEffect(()=>{
    getData()
  },[])

  // console.log("show.............",data)

  return (
    <IonPage>
      <div>
        <IonCard>
          <IonCardContent>
            <div className="rankOfSubject">
              <IonCardSubtitle>
                <IonButton color="medium" onClick={()=>clickSubject("chinese")}>中文</IonButton>
                <IonButton color="danger" onClick={()=>clickSubject("english")}>英文</IonButton>
                <IonButton color="success" onClick={()=>clickSubject("math")}>數學</IonButton>
                <IonButton onClick={()=>clickSubject("common")}>常識</IonButton>
                <IonButton color="warning" onClick={()=>clickSubject("all")}>綜合</IonButton>
              </IonCardSubtitle>
            </div>
          </IonCardContent>
          <IonCardHeader>
            <IonCardTitle>
              <div className="title">小學雞排名</div>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent></IonCardContent>
        </IonCard>
        <IonCard>
          {data.map((mark)=>(
          <IonItem key={mark._id}>
            <IonIcon icon={trophySharp} slot="start" />
            <IonLabel></IonLabel>
            <IonLabel>{mark.username}</IonLabel>
            <IonLabel>{selected === "chinese" || selected ===''? mark.chineseMarks : selected === "english"?mark.englishMarks: selected ==="math"?mark.mathMarks: selected ==="common" ?mark.commonMarks: mark.allMarks}</IonLabel>
          </IonItem>
          ))}
        </IonCard>
      </div>
    </IonPage>
  );
};

export default Tab2;
