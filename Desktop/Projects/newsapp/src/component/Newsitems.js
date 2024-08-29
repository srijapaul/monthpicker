import React from 'react'

const Newsitems=(props)=>{
        let {title, description,imageUrl,newsUrl,author,date} = props;//destructuring
        return (
            <div>
                <div className="card" >
                    <img src={!imageUrl?"https://c.ndtvimg.com/2023-09/um6j1rso_new-parliament-building_625x300_19_September_23.jpg":imageUrl} alt="..."  />
                    <div className="card-body">s
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted"> By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default Newsitems
