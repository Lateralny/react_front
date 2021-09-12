import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AlbumTab(props){
    
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        axios.get('http://localhost:8080/api/products')
        .then((response) => {
            const allAlbums = response.data;
            setAlbums(allAlbums);
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
    
    const albumUrl = albums.find((x) => x._id === props.match.params.id);
    
    return(
        <div className="card">
            {console.log(albums)}
            
            {console.log(window.location.pathname)}
            <Link to={`/album/${albumUrl._id}`}>
                <img className="medium" src={albumUrl.image} alt={albumUrl.album} />
            </Link>
            <div className="album_info">
                <Link to={`/album/${albumUrl._id}`}>
                    <h1>{albumUrl.album}</h1>
                </Link>
                <h2>artist: {albumUrl.artist}</h2>
                <h4>format: {albumUrl.format}</h4>
                <h4>released: {albumUrl.released}</h4>
                <h4>genre: {albumUrl.genre}</h4>
                <h4>tracklist: {albumUrl.tracklist.map(item => {
                    return <li>{item}</li>;
                })}</h4>
                <h5></h5>
            </div>
            
        
        </div>
                        
    
    );
    

}
