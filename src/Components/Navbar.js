
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [topics, setTopics] = useState([])
  useEffect(()=>{

       axios(`https://danialnews.herokuapp.com/api/topics`)
      .then(res=>setTopics(res.data.topics)) 
      .catch(error=>console.log(error))   
  
  }, [])


  return (
    <nav className='nav'>
      <ul className="nav d-flex justify-content-center  ">

        {
           topics.map(item=> <Link to={`topics/${item.slug}`} className='listItem' key={item.slug}>
           {item.slug}
        </Link>)
        }  
          </ul>
    </nav>
  )
}

export default Navbar