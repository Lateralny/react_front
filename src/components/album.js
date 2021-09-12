import React from "react";
import { Link } from 'react-router-dom';

export default function Album(props){
    const {albums} = props;
    
    return (
        <div key={albums._id} className="card">
      <Link to={`/album/${albums._id}`}>
        <img className="medium" src={albums.image} alt={albums.name} />
      </Link>
      <div className="card-body">
      <h2>{albums.artist}</h2>
        <Link to={`/album/${albums._id}`}>
          <h2>{albums.album}</h2>
        </Link>
      </div>
    </div>
      );
}