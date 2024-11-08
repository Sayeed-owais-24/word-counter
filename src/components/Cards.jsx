import React from 'react'

export default function Cards(props) {
  return (
    <div className="container my-3'" >
      <div className="card" style={{backgroundColor:props.mode==='light'?'white':'#292929' ,color:props.mode=== 'light'? 'black':'white',border:props.mode==='light'? '2px solid black':'2px solid white'}}>
  <img src='...' className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >Amazon</h5>
    <p className="card-text"  >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" style={{backgroundColor:props.mode==='light'?'blue':'white',color:props.mode=== 'light'? 'black':'black'}}>Go somewhere</a>
  </div>
</div>
    </div>
  )
}
