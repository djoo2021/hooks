import React,{useState} from 'react'

function MovieList(props) {

    const [show,setshow]=useState(true);
    const listmovie=props.list.map(el=> {return<div className="card" style={{width:"18rem"}}>
     <div className="card-body">
      <h5 className="card-title">{el.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{el.postURL}</h6> </div>
  </div>
    
    });

    return (
        <div>
        {listmovie}
       {show?<h1>hello wajdi</h1>:null} 
       <button onClick={()=>setshow(true)}>show</button>
       <button onClick={()=>setshow(false)}>hide</button>
        </div>
    )
}

export default MovieList
