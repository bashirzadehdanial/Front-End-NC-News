
import {useEffect, useState} from 'react'
import axios from 'axios'

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
           topics.map(item=> <li className='listItem' key={item.slug}><a href="#" className="nav-link px-2 text-secondary">
           {item.slug}
         </a></li>)
        }  
          </ul>
    </nav>
  )
}

export default Navbar