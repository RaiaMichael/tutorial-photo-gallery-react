import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Question.css";
import { pin } from "ionicons/icons";
import { useLocation, useParams } from "react-router";
import { getDefaultNormalizer } from "@testing-library/react";

interface Question {
  _id: string;
  subject: string;
  grade: string;
  title: string;
  option: any;
  answer: string;
}
type AnsRight = {
    right: string;
    
  };

const Question: React.FC = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<Question[]>([]);
  const [check, checked] = useState<string[]>([""])
   
  let ans: string = '';

  let params = new URLSearchParams(useLocation().search);
  let grade_id = params.get("grade_id");
  let subject_id = params.get("subject_id");
  let user_id= params.get('user_id')

  async function getData() {
    const res = await fetch(
      "http://localhost:8080/api/v1/question/findQuestion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ subject: subject_id, grade: grade_id}),
      }
    );
    const question = await res.json();
    setData(question.item);
  }

  useEffect(() => {
    setSelected("");
    getData();
  }, []);
// function showRightWrong() {
//     if (selected === data[0].answer) {
//       ansRight.push({right:"正確"})
//     } else {
//       ansRight.push({right:"錯誤"})
//     }
//   }
  const [selected, setSelected] = useState<string>("");

  async function submitAnswer() {
    const res = await fetch(
      "http://localhost:8080/api/v1/question/submitAnswer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ _id: data[0]._id, answer: selected, user: user_id }),
      }
    );
    const question = await res.json();
    
    setShow(true);
    if (selected === data[0].answer) {
            checked(['正確'])
          } else {
            checked(['錯誤'])
          }
  }

  

  return (
    <IonPage>
      <div className="qImage"></div>
      <IonContent>
        {data.map((que) => (
          <IonCard className="QuestionCard" routerAnimation={undefined}>
            <IonLabel className="">{que.title}</IonLabel>
            <div className="answerChoice">
              <IonCardContent>
                <IonRadioGroup
                  value={selected}
                  onIonChange={(e) => setSelected(e.detail.value)}
                >
                  <IonItem routerAnimation={undefined}>
                    <IonLabel>{que.option[0].content}</IonLabel>
                    <IonRadio slot="start" value={que.option[0].content} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel>{que?.option[1]?.content}</IonLabel>
                    <IonRadio slot="start" value={que.option[1].content} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel>{que.option[2].content}</IonLabel>
                    <IonRadio slot="start" value={que.option[2].content} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel>{que.option[3].content}</IonLabel>
                    <IonRadio slot="start" value={que.option[3].content} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <button onClick={() => submitAnswer()} className="submit">
                      Submit
                    </button>
                  </IonItem>
                </IonRadioGroup>
              </IonCardContent>
            </div>
          </IonCard>
        ))}

        {show && (
          <IonCard className="AnswerCard" routerAnimation={undefined}>
            <IonLabel>
              答案:{data[0].answer} -- {check[0]}
            </IonLabel>
            <div className="nextQusetion">
              <button
                onClick={() => {
                  getData();
                  setShow(false);
                }}
                className="submit">
                下一題
              </button>
            </div>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Question;
