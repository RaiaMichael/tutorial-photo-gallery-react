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
import { useLocation } from "react-router-dom";


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
  let params = new URLSearchParams(useLocation().search)
  let user_id = params.get('user_id')

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
      <div className="rankImage 0"></div>
      <div>
        <IonCard style={{backgroundImage: 'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s104-0372.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e1b1ad4ae2db4690837a34ecfeee1b7b"',
                        display: 'flex',
                        Wrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        marginTop: '25px'                 
                       }}>
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
              <div className="title"><h1>小學雞排名</h1></div>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent></IonCardContent>
        </IonCard>
        <IonCard style={{marginTop: '30px',}}>
          {data.map((mark)=>(
          <IonItem  key={mark._id} >
            <IonLabel><IonIcon icon={trophySharp} slot="start" /></IonLabel>
            <IonLabel><h2>{mark.username}</h2></IonLabel>
            <IonLabel>{selected === "chinese" || selected ===''? mark.chineseMarks : selected === "english"?mark.englishMarks: selected ==="math"?mark.mathMarks: selected ==="common" ?mark.commonMarks: mark.allMarks}</IonLabel>
          </IonItem>
          ))}
        </IonCard>
      </div>
    </IonPage>
  );
};

export default Tab2;
