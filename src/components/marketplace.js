import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AlbumTab(props){
    
  const [market, setMarket] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
      axios.get('http://localhost:8080/api/items')
      .then((response) => {
          const allMarket = response.data;
          setMarket(allMarket);
      })
      .catch((error)=>{
          console.error("error fetching", error);
          setError(error);
      })
      .finally(() => { 
          setLoading(false); 
        });
  }
  useEffect(() => {fetchData()}, []);

  if (loading) return <h1>Loading...</h1>; 
  if (error) return <h1>Error</h1>;
  
  
  console.log(market);
  return(
      <div className="card">
          
          <h4>album: {market.artist.map(item => {
                    return <li>{item}</li>;
                })}</h4>
      
      </div>
                      
  
  );
  

}
/*{console.log(market)}
          
          {console.log(window.location.pathname)}
          <Link to={`/items/${itemUrl._id}`}>
              <img className="medium" src={itemUrl.image} alt={itemUrl.album} />
          </Link>
          <div className="album_info">
              <Link to={`/items/${itemUrl._id}`}>
                  <h1>{itemUrl.album}</h1>
              </Link>
              <h2>artist: {itemUrl.artist}</h2>
              <h4>format: {itemUrl.format}</h4>
              <h4>genre: {itemUrl.genre}</h4>
              <h4>price: {itemUrl.price}</h4>
          </div> */