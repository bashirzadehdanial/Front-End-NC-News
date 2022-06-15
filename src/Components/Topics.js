import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    axios("https://danialnews.herokuapp.com/api/topics")
      .then((response) => {
      
        console.log(response.data.topics)
        setTopics(response.data.topics);
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
     <div>
      {
      topics.map(article=>
       <Link  to={'/topics'}>
          
            <div className="article" >{article.description}</div>

       </Link>)
      }
      </div>
    </>
      )
    }
export default Topics