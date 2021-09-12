import React from "react";
import { Link } from 'react-router-dom';

export default function Item(props){
    const {market} = props;
    
    return (
        <div key={market._id} className="card">
      <Link to={`/item/${market._id}`}>
        <img className="medium" src={market.image} alt={market.name} />
      </Link>
      <div className="card-body">
      <h2>{market.artist}</h2>
        <Link to={`/item/${market._id}`}>
          <h2>{market.album}</h2>
        </Link>
      </div>
    </div>
      );
}