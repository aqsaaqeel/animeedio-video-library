import "./VideoCard.css"
export function VideoCard({videoItem}) {
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
              <a href={videoItem.url}><button className="btn wo-outline">Play Video</button></a>
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