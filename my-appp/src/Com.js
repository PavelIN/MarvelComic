
import './Comic.css';
import React, { useEffect } from 'react';

import { useParams,useNavigate } from 'react-router-dom';
import getComics from "./Api"


function Com() {

    const [comics, setCcomics] = React.useState([]);
    const [limit, setLimit] = React.useState(100);
    const [offset, setOffset] = React.useState(0);
    const [aaa, seAA] = React.useState();
    const [loading, setLoading] = React.useState(false);
  
    let {id}= useParams();
    console.log(id)

    useEffect(() => {

        getComics(limit, offset)
          .then((getComics) => {
            setCcomics(getComics.data.results)
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            setLoading(true);
          });
      }, []);
    

      useEffect(() => {
        console.log(comics)
        seAA(comics.find(f => f.id == id));
       
      }, [loading]);
    


 let bb ="."

 const history = useNavigate();
  return (
    <div className="com">
        <button onClick={() => history(-1)}></button>
        <img src={aaa?.description ? `${aaa.images[0].path}${bb}${aaa.images[0].extension}`:"https://w7.pngwing.com/pngs/857/871/png-transparent-iron-man-iron-man-spider-man-captain-america-thor-marvel-comics-iron-man-thumbnail.png"}/>
     <span>{aaa?.description ? aaa.description :"описание отсутвует"}</span>
    </div>
  );
}

export default Com;
