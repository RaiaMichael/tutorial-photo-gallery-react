import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { square, triangle, images } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Start from './pages/Start';
import Login from './pages/Login';
import Details from './pages/Details';
import Subject from './pages/Subject';
import { person, podium, book } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Global CSS */
import './global.css';
import Question from './pages/Question';
import Register from './pages/Register';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Start} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        
        <Route path="/tab">
          <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab/1" component={Tab1} exact={true} />
          <Route path="/tab/2" component={Tab2} exact={true} />
          <Route path="/tab/2/details" component={Details} />
          <Route path="/tab/3" component={Tab3} />
          <Route path="/tab/subject" component={Subject} exact={true} />
          <Route path="/tab/question" component={Question} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login" href="/login" >
            <IonIcon icon={person} />
            <IonLabel>登出</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab/1">
            <IonIcon icon={book} />
            <IonLabel>年級</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab/2">
            <IonIcon icon={podium} />
            <IonLabel>排行榜</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
        </Route>
      </IonRouterOutlet>
      
    </IonReactRouter>
  </IonApp>
);

export default App;
