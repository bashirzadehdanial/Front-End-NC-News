import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    axios("https://danial-news-app.herokuapp.com/api/topics")
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
      <div className="">
        {topics.map((topic, index) => (
          <Link to={`/topics/${topic.slug}`}>
            <div className="" key={index}>{topic.slug}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Topics;
