import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import {useLocalStorage} from './hooks';

function App() {

  const [birthDate, setBirthDate] = useLocalStorage('birthDate','');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate &&
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate}/>
        }
        <IonItem>
          <IonLabel position="floating">Date of Birth : </IonLabel>
          <IonDatetime displayFormat='DD MMM YYYY' 
          value={birthDate}
          onIonChange={(event) => setBirthDate(event.detail.value)} />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Target Date : </IonLabel>
          <IonDatetime displayFormat='DD MMM YYYY' 
          value={targetDate}
          onIonChange={(event) => setTargetDate(event.detail.value)} />
        </IonItem>

      </IonContent>
    </IonApp>
  );
}

export default App;
