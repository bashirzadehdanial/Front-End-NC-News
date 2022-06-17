import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios(`https://danialnews.herokuapp.com/api/topics`)
      .then((res) => setTopics(res.data.topics))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="nav">
      <div className="nav d-flex justify-content-center  ">
        {topics.map((item,index) => (
          <Link to={`/articles?topic=${item.slug}`} className="listItem">
            {item.slug}
            </Link>
        ))}
      </div>
    </div>
    
  );
};

export default Navbar;
