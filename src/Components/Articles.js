import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,  useLocation} from "react-router-dom";


const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);
  const search = useLocation().search;
  const topic = new URLSearchParams(search).get('topic');
  let url;
  useEffect(() => {
    if(topic){
      url = `https://danialnews.herokuapp.com/api/articles?topic=${topic}`
    }else{
      url=`https://danialnews.herokuapp.com/api/articles`
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
  },[]);

  if (loading) {
    return <p >Loading...</p>;
  }
  return (
    <>
    <div classtopic="articles">
      {
       articles.map(article=>
       <Link classtopic="article" to={`/articles/${article.article_id}`}>
            <div  classtopic="articleList">Topic: {article.topic}</div><br/>
            <div classtopic="articleList">Article: {article.title}</div>

       </Link>)
      }
      </div>
      </>
      )
    }
export default Articles
