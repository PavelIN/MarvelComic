
import './Comic.css';
import React, { useEffect } from 'react';
import Com from "./Com"
import { useParams,Rote } from 'react-router-dom';

function Comic({title,imgUrl}) {




  return (
    <div className="comic">
        <span className='pop'>{title}</span>
        <img className='image' src={imgUrl}/>
    </div>

  );
}

export default Comic;
