import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonSegmentButton, IonLabel, IonSegment, IonItem, IonList, IonThumbnail } from '@ionic/react';
import { camera, trash, close, image } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import "./Subject.css";
import { Link } from 'react-router-dom';
import { useLocation, useParams } from "react-router";
import { API_ORIGIN } from '../api';


interface Subject { 
  _id: string;
  title: string;
  picture: string
 }

const Subject: React.FC = () => {
  const [data, setData]=  useState<Subject[]>([])

  let params = new URLSearchParams(useLocation().search)
  let grade_id = params.get('grade_id')
  // let user_id= params.get('user_id')
  
  console.log("比我睇下",grade_id)

  async function getData(){
    const res = await fetch(API_ORIGIN+'/api/v1/subject/get')
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
        <div className='subjectImage '></div>
        <div className='subject'>
        {data.map((sub)=>(
          <Link to={`/question?subject_id=${sub._id}&grade_id=${grade_id}`}>
            {/* <Link to={`/question?subject_id=${sub._id}&grade_id=${grade_id}&user_id=${user_id}`}></Link> */}
          <button className="chineseButton" key={sub._id}>
          <IonLabel><IonImg src={sub.picture} /></IonLabel>
          </button>
          </Link>
        ))}
        {/* {items.map((ite)=>(<div></div>))} */}
        </div>
        
      </IonContent>
      </IonPage>
  );
};

export default Subject;
