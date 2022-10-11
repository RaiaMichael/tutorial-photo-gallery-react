import React from 'react';
import { IonBackdrop, IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { person, pin } from 'ionicons/icons';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <div className='userData'>
        <IonCard>
          <IonItem>
            <IonIcon icon={person} slot="start" />
            <IonLabel></IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent></IonCardContent>
        </IonCard>
        </div>
      <IonContent>
        <ExploreContainer name="About us" />
      </IonContent>
     
    </IonPage>
  );
};

export default Tab3;
