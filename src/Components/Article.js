import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
    const [article, setArticle] = useState({});
    const [loading, isLoading] = useState(true);
    const {id}= useParams()
  

  useEffect(() => {
    axios
      .get(`https://danial-news-app.herokuapp.com/api/articles/${id}`)
      .then((response) => {
        setArticle(response.data);
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
    <div className="article-box">
   
        <div className="article-item">title: {article.title}</div>
        <div className="article-item">Topic: {article.topic}</div>
        <div className="article-item">Description: {article.body}</div>
        <div className="article-item">Author: {article.author}</div>
        <div className="article-item">Votes: {article.votes}</div>
       
    </div>
    </>
  )
}

export default Article