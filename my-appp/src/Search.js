
import './Search.css';
import React from 'react';

function Search({res,setFilter}) {

    const [input, setInput] = React.useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
      }

  const handlSabmit =(e)=>{
    e.preventDefault()
console.log(res)
const result = res.filter(re => re.title.toLowerCase().includes(input.toLowerCase()))
const ress = !input ? [] :result
setFilter(ress)
  }


  return (
    <div className="search">
        <form className='form' onSubmit={handlSabmit}>
            <input className='form__input' onChange={handleChange}></input>
            <button className='search__button'></button>
        </form>
        
    </div>

  );
}

export default Search;
