import  React  from 'react';
import { Link } from 'react-router-dom';
import "./VideoCard.css"
import { useParams } from 'react-router-dom';
export function VideoCard({videoItem}) {
  const {videoId} = useParams();
  return(
    <div className="photo-card-container text-on-picture">
        <div className="basic-card-container">
          <img
            className="card-photo"
            src={videoItem.src}
            alt="Crypto"
            loading="lazy"
          />
          <div className="card-heading">{videoItem.title}</div>
          <div className="card-body">
            {videoItem.description}
          </div>
          <div className="card-footer">
            <div className="text-butons">
              <button className="btn wo-outline">{videoItem.creator}</button>
              <Link to={`/video/${videoItem._id}`}><button className="btn wo-outline">Play Video</button></Link>
            </div>
            <div className="icons-buttons">
              <button className="btn icon">
                <i className="fa fa-heart"></i>
              </button>
              <button className="btn icon">
                <i className="fa fa-share"></i>
              </button>
              <button className="btn icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}