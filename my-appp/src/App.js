
import './App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams, Routes, Route } from 'react-router-dom';
import getComics from "./Api"
import Preloader from "./Preloader"
import Comic from "./Comic"
import Com from "./Com"



function App() {

  const [comics, setCcomics] = React.useState([]);
  const [limit, setLimit] = React.useState(20);
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(false);



  window.addEventListener('scroll', function () {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom === document.documentElement.clientHeight) {
      setOffset(offset + 10)
    }
  });


  const table = {};
  const res = comics.filter(({ id }) => (!table[id] && (table[id] = 1)));



  useEffect(() => {
    setLoading(true)
    getComics(limit, offset)
      .then((getComics) => {
        console.log(getComics)
        setCcomics([...comics, ...getComics.data.results])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      });
  }, [limit, offset]);




  return (
    <div className="App">
          {res.map((comic) => {
            let bb = "."
            let link
            if (!comic.images[0] === false) {
              link = `${comic.images[0].path}${bb}${comic.images[0].extension}`;
            } else {
              link = "https://w7.pngwing.com/pngs/857/871/png-transparent-iron-man-iron-man-spider-man-captain-america-thor-marvel-comics-iron-man-thumbnail.png"
            }
            return  <Link to={`comic/${comic.id}`}> <Comic title={comic.title} imgUrl={link} key={comic.id} /> </Link>
          })
          }
          {loading ? <Preloader /> : ''}
    </div>


  );

}

export default App;
