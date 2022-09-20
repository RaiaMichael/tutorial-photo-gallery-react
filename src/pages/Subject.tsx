import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonSegmentButton, IonLabel, IonSegment } from '@ionic/react';
import { camera, trash, close } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import "./Subject.css";

const Subject: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  return (
    <IonPage>
      <IonContent>
        <div className='subject'>
      <IonSegment onIonChange={(e) => console.log(`${e.detail.value} segment selected`)}>
          <IonSegmentButton value="Chinese">
            <IonLabel>中文</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="English">
            <IonLabel>英文</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Mathematics">
            <IonLabel>數學</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Common">
            <IonLabel>常識</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Subject;
