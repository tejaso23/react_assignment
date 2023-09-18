import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import BeerCard from './BeerCard';

const rooturl = `https://api.punkapi.com/v2`;
const Home = () => {
   
    useEffect(()=>{
        const fetch = async ()=>{
            try {
                const {data} = await axios.get(`${rooturl}/beers?page=1&per_page=80`);
             console.log(data);
                setbeers(data);
            } catch (error) {
                console.log("Enrro in api");
            }
        }


        fetch();
    },[]);
    
    const [beers, setbeers] = useState([]);
  return (
   <div className='Home'>{
beers.map((i)=>(<BeerCard
key = {i.id}
id = {i.id}
img = {i.image_url}
name = {i.name}
firstbreewe = {i.first_brewed
}
volume = {i.volume.value
}
unit={i.volume.unit}




></BeerCard>))}</div>
  )
}

export default Home
