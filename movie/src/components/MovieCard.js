import React, {useEffect, useRef, useState} from 'react'
import MovieList from './MovieList'

function  MovieCard () {

    const [movie, setmovie] = useState([
         {id:1,title:"movie1",postURL:"www.movie1.com"},
         {id:2,title:"movie2",postURL:"www.movie2.com"},
         {id:1,title:"wajdi",postURL:"www.movie1.com"}
        ]);

    const [addmovie, setaddmovie] = useState([{title:"",postURL:""}]);
   
    const searchRef=React.useRef();
    useEffect(() => {
        searchRef.current.focus();
       
    }, [])

    const addMovie=(e)=>{
     e.preventDefault();
         setaddmovie([movie.push(addmovie)])
             setaddmovie({title:"",postURL:""})
    }
    const filtername=(e)=>{
     const search=e.target.value.toLocaleLowerCase();
         const nfilter=movie.filter(el=>el.title.toLocaleLowerCase().includes(search));
            setmovie(nfilter);
    }
        return (
    <div>
      <MovieList list={movie} />
          <form onSubmit={addMovie}>
             <label>name of movie</label>
                 <input type="text"  placholder="enter the name" value={addmovie.title} onChange={e=>setaddmovie({...addmovie,title:e.target.value})}/>
                     <label>url of movie:</label>
                          <input type="text"  placholder="enter the urL...." value={addmovie.postURL} onChange={e=>setaddmovie({...addmovie,postURL:e.target.value})}/>
                             <input type="submit"  value="addmovie"/>
                                <label>search </label>
                                 <input ref={searchRef} type="text" onChange={(e)=>filtername(e)}/>
                                      </form>
                                         <h1>{addmovie.title}</h1>
                                             <h1>{addmovie.postURL}</h1>
                                                 </div>
        )
    
}
export default MovieCard
