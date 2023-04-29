
import './App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useParams, Routes, Route } from 'react-router-dom';
import getComics from "./Api"
import Preloader from "./Preloader"
import Search from "./Search"
import Comic from "./Comic"
import Com from "./Com"



function App() {

  const [comics, setCcomics] = React.useState([]);
  const [limit, setLimit] = React.useState(20);
  const [offset, setOffset] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [filter, setFilter] = React.useState([]);

  console.log(filter)

  window.addEventListener('scroll', function () {
    
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    console.log(windowRelativeBottom)
    console.log(document.documentElement.clientHeight)
    if ( filter.length<=1 && windowRelativeBottom - document.documentElement.clientHeight<1) {
      setOffset(offset + 10)
      console.log(filter)
    }
  });
console.log(offset)

  const table = {};
  const res = comics.filter(({ id }) => (!table[id] && (table[id] = 1)));
  const filerComic = filter.length>=1 ? filter : res;

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
      <Search res={res} setFilter={setFilter}/>
      <div className='comic_container'>
          {filerComic.map((comic) => {
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
    </div>


  );

}

export default App;
