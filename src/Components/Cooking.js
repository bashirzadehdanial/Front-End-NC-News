import axios from "axios";
import React, { useEffect, useState } from "react";


const CookingTopic = () => {
  const [cookingTopic, setCookingTopic] = useState([]);
  const [loading, isLoading] = useState(true);

  
  useEffect(() => {
    axios
      ("https://danialnews.herokuapp.com/api/articles")
      .then((response) => { 
        let container=[];
        (response.data.articles).filter((topic)=>{
         return topic.topic==="cooking"?container.push(topic):null
        })
        setCookingTopic(container)
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
      cookingTopic.map(topic=> <li className="articleList" key={topic.article_id}>{topic.title}</li>)}
    </ul>
      
  </>
 
      )
}


export default CookingTopic ;