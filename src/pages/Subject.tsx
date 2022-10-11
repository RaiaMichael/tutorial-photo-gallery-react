import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonSegmentButton, IonLabel, IonSegment, IonItem, IonList, IonThumbnail } from '@ionic/react';
import { camera, trash, close, image } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import "./Subject.css";
import { Link } from 'react-router-dom';
import { useLocation, useParams } from "react-router";


interface Subject { 
  _id: string;
  title: string;
  picture: string
 }

const Subject: React.FC = () => {
  const [data, setData]=  useState<Subject[]>([])

  let params = new URLSearchParams(useLocation().search)
  let grade_id = params.get('grade_id')
  
  console.log("比我睇下",grade_id)

  async function getData(){
    const res = await fetch('http://localhost:8080/api/v1/subject/get')
    const el = await res.json()
    setData(el.data)
  }


  useEffect(()=>{
    getData()
  },[])

  type Item = {
    chi: string;
    eng: string;
    Mat: string;
    com: string
  };
  const items: Item[] = [{ 
  chi: 'https://www.chinese-word.com/font-2/0021-7.jpg',
  eng: 'https://media.istockphoto.com/vectors/english-vector-id1047570732?s=612x612',
  Mat: 'https://www.21clhk.org/wp-content/uploads/2020/12/Creativity-in-Mathematics.png',
  com: 'https://www.tkokt.edu.hk/CustomPage/69/5415.jpg'
}];

  return (
    <IonPage>
      <IonContent>
        <div className='subject'>
      <IonSegment onIonChange={(e: { detail: { value: any; }; }) => console.log(`${e.detail.value} segment selected`)}>
        {data.map((sub)=>(
          <Link to={`/question?subject_id=${sub._id}&grade_id=${grade_id}`}>
          <button className="chineseButton" key={sub._id}>
          <IonLabel><IonImg src={sub.picture} /></IonLabel>
          </button>
          </Link>
        ))}
        </IonSegment>
        </div>
        <IonList>
      
    </IonList>
      </IonContent>
      </IonPage>
  );
};

export default Subject;
