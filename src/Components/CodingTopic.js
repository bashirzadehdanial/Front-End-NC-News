import axios from "axios";
import React, { useEffect, useState } from "react";


const CodingTopic = () => {
  const [codingTopic, setCodingTopic] = useState([]);
  const [loading, isLoading] = useState(true);

  
  useEffect(() => {
    axios
      ("https://danialnews.herokuapp.com/api/articles")
      .then((response) => { 
        let container=[];
        (response.data.articles).filter((topic)=>{
         return topic.topic==="coding"?container.push(topic):null
        })
        setCodingTopic(container)
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  if (loading) {
    return <p >Loading...</p>;
  }
  return (
   
   <> 
     <ul>
    {
      codingTopic.map(topic=> <li className="articleList" key={topic.article_id}>{topic.title}</li>)}
    </ul>
      
  </>
 
      )
}


export default CodingTopic ;