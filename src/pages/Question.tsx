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
import { API_ORIGIN } from "../api";

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
  const [count, setCount] = useState(0)
  const [nextShow, setNextShow] = useState(false);
  const [num, setNum] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  
   

  let params = new URLSearchParams(useLocation().search);
  let grade_id = params.get("grade_id");
  let subject_id = params.get("subject_id");
  let user_id= localStorage.getItem('user_id')


  console.log('-----------',typeof user_id)

  async function getData() {
    const res = await fetch(
      API_ORIGIN+"/api/v1/question/findQuestion",
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
console.log(data)


  useEffect(() => {
    setSelected("");
    getData();
  }, []);
  const [selected, setSelected] = useState<string>("");

  // type catchUserId = {
  //   user: any
  // }
  // const catchUserId: catchUserId[]  = [{
  //   user: user_id
  // }]



  async function submitAnswer() {
    const res = await fetch(
      API_ORIGIN+"/api/v1/question/submitAnswer",
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
    console.log('sel---',selected)
    console.log('answe----',data[num].answer)
    if (selected === data[num].answer) {
            checked(['正確'])
          } else {
            checked(['錯誤'])
          }
    setCount(count + 1);
    
    console.log('.............',count)
    if (count >= 4) {
      setNextShow(true)
      setShow(false)
      setLoading(false)
    }
  }
//   async function handleSubmit() {
//     if (count >= 4) {
      
//     }
// }
  
  

  return (
    <IonPage>
      <div className="qImage"></div>
      <IonContent>
        {data.length > 0 &&
          (<IonCard className="QuestionCard" routerAnimation={undefined}>
            <IonLabel className="" key={num}>{data[num].title}</IonLabel>
            <div className="answerChoice">
              <IonCardContent>
                <IonRadioGroup
                  value={selected}
                  onIonChange={(e) => setSelected(e.detail.value)}
                >
                  <IonItem routerAnimation={undefined}>
                    <IonLabel >{data[num].option[0].content}</IonLabel>
                    <IonRadio slot="start" key={num} value={data[num].option[0].content!} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel >{data[num]?.option[1]?.content!}</IonLabel>
                    <IonRadio slot="start" key={num} value={data[num].option[1].content!} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel >{data[num].option[2].content!}</IonLabel>
                    <IonRadio slot="start" key={num} value={data[num].option[2].content!} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                    <IonLabel >{data[num].option[3].content!}</IonLabel>
                    <IonRadio slot="start" key={num} value={data[num].option[3].content!} />
                  </IonItem>
                  <IonItem routerAnimation={undefined}>
                   {loading && (<button onClick={() => submitAnswer()} className="submit">
                      Submit
                    </button>)}
                  </IonItem>
                </IonRadioGroup>
              </IonCardContent>
            </div>
          </IonCard>)}
        

        {show && (
          <IonCard className="AnswerCard" routerAnimation={undefined}>
            <IonLabel >
            正確答案:  {data[num].answer} -- {check[0]}
            </IonLabel>
            <div className="nextQusetion">
              <button 
                onClick={() => {
                  setNum(num + 1);
                  setShow(false);
                  
                }} 
                className="submit">
                下一題
              </button>
            </div>
          </IonCard>
        )}
        {nextShow &&(
          <IonCard className="EndCard" routerAnimation={undefined}>
            <IonLabel >
              正確答案:  {data[num].answer} -- {check[0]}
            </IonLabel>
          <div >
          <IonButton className="goBack" href={`/tab/1`}><h1>已完成</h1></IonButton>
          {/* <IonButton href={`/tab/1?user_id=${user_id}`}><h1>已完成</h1></IonButton> */}
          </div>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Question;
