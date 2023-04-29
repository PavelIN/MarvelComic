
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/json',
	},

};




const  getComics  = async(limit,offset)=> {
 let response =  await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=1&format=comic&limit=${limit}&offset=${offset}&apikey=e7bcb4186ef682a4413af09e4ca83fe0&hash=3543accfaf8fcc2c8605f1b22ab703d3`, options)
   if (response.status === 200) {
    let json = await response.json(); 
    return json;
  }
}




export default getComics;