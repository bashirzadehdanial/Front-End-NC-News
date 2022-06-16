import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    axios("https://danialnews.herokuapp.com/api/topics")
      .then((response) => {
        setTopics(response.data.topics);
        isLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>
        {topics.map((article, index) => (
          <Link to={`/topics/${article.slug}`}>
            <div className="article" key={index}>{article.slug}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Topics;
