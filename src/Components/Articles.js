import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    axios
      ("https://danialnews.herokuapp.com/api/articles")
      .then((response) => {
      
        console.log(response.data.articles)
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
    <div className="articles">
      {
       articles.map(article=>
       <Link className="article" to={`/articles/${article.article_id}`}>
            <div className="articleList">Topic: {article.topic}</div><br/>
            <div className="articleList">Article: {article.title}</div>

       </Link>)
      }
      </div>
      </>
      )
    }
export default Articles
