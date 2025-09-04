import React from 'react'


export default function NewsItem(props) {
 
    const {title,description,imageUrl,newsUrl} = props;

  return (
    <div className='my-3'>

      <div className="card" style={{width: "18rem;",maxHeight:"500px", minHeight:"500px"}}>
  <img 
  style={{maxHeight:"200px"}}
   src= {!imageUrl ?"https://cdn.motor1.com/images/mgl/6Z4xWX/s1/2026-toyota-bz-front-three-quarters.jpg":imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body" style={{position:"relative"}}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}.</p>
    <a href={newsUrl}  className="btn btn-sm btn-dark" style={{position:"absolute",bottom:"10%"}}>Read More...</a>
  </div>
</div>
    </div>
  )
}
