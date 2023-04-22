import React from "react";

function NewsItem({imageURL, newsTitle, newsDescription, newsURL, newsSource, badgeColor}) {

  return (
    <div className="card" style={{width: "18rem"}}>
    <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${badgeColor} z-1`}>
    {newsSource}
    <span className="visually-hidden">unread messages</span>
    </span>
  <img src={imageURL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><b>{newsTitle}</b></h5>
    <p className="card-text">{newsDescription}</p>
    <a href={newsURL} target="_blank" className="btn btn-sm btn-primary mt-3" rel="noreferrer">Read More...</a>
  </div>
</div>
  ) 
}

export default NewsItem;
