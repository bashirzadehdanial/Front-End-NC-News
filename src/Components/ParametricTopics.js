import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ParametricTopic = () => {
  const [Topic, setTopic] = useState([]);
  const [loading, isLoading] = useState(true);

  const { parametricTopic } = useParams();

  useEffect(() => {
    axios("https://danialnews.herokuapp.com/api/articles")
      .then((response) => {
        let container = [];
        response.data.articles.filter((topic) => {
          return topic.topic === `${parametricTopic}`
            ? container.push(topic)
            : null;
        });
        setTopic(container);
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
      <ul>
        {Topic.map((topi) => (
          <li className="articleList" key={topi.article_id}>
            {topi.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ParametricTopic;
