//Libraries
import React, { useState, useEffect } from 'react';

//Json Files
import tasks from "../../data/tasks"

//Styles Files
import styles from "../../Framework/CSS/Framework.modulus.css"

//Images
import taskImg from "../../Images/tasks.jfif"

//Components 
import Head from "../Main-Components/Head/Head"
import Task from "../Main-Components/Task/Task"

const Tasks = (props) => {
  const [task, setTask] = useState({})
  useEffect(() => {
    setTask(() => tasks)
  }, [tasks])
  return (
    <section className="tasks">
      <div className="container">
        <Head headImg={taskImg} headTitle="Tasks" />
        <div className="tasks-boxes grid stretch">
          {
            Object.keys(task).map((w) => {
              return (
                Object.keys(task[w]).map((c, i) => {
                  return (
                    <Task week={w} part={c} key={i} />
                  )
                })
              )
            })
          }
        </div>
      </div>
    </section>
  );
}
export default Tasks;
