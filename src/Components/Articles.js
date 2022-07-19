import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,  useLocation} from "react-router-dom";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get('topic');
  const [topicQuery, settopicQuery] = useState()


  let url;

  useEffect(()=>{
    settopicQuery(topic)
  })
  
  useEffect(() => {
    if(topic){
      url = `https://danial-news-app.herokuapp.com/api/articles?topic=${topic}`
    }else{
      url=`https://danial-news-app.herokuapp.com/api/articles`
    }

    axios
      (url)
      .then((response) => {
        setArticles(response.data.articles);
        isLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  },[topicQuery]);

  if (loading) {
    return <p >Loading...</p>;
  }
  return (
    <>
    <div className="list-title"> {(articles[0].topic)}</div>
    <div className="articles">
      {
       
       articles.map((article, index)=>
       <Link className="articles-item" to={`/articles/${article.article_id}`}>
            
            <div className="articles-item2" key={index}><span className="text-warning2">Article: </span > {article.title}</div>
       </Link>)
      }
      </div>
      </>
      )
    }
export default Articles
