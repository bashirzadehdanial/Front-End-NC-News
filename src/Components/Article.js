import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Article = () => {
    const [article, setArticle] = useState({});
    const [loading, isLoading] = useState(true);
    const {id}= useParams()
  

  useEffect(() => {
    axios
      .get(`https://danialnews.herokuapp.com/api/articles/${id}`)
      .then((response) => {
      
        console.log(response.data)
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
    <div className='articleList'>
   
        <div>title: {article.title}</div>
        <div>Topic: {article.topic}</div>
        <div >Description: {article.body}</div>
        <div>Author: {article.author}</div>
        <div>Votes: {article.votes}</div>
        <div>{article.created_at}</div>
    </div>
    </>
  )
}

export default Article