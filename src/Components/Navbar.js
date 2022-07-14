import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios(`https://danial-news-app.herokuapp.com/api/topics`)
      .then((res) => setTopics(res.data.topics))
      .catch((error) => console.log(error));
  }, []);

  return (
    
      <div className="navbar-list">
        {topics.map((item) => (
          <div className="list-item"><Link className="list-item-item"  to={`/articles?topic=${item.slug}`} >
            {item.slug}
            </Link></div>
        ))}
      </div>
  
    
  );
};

export default Navbar;
