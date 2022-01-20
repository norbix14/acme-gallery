import Bg from '../img/gallery/bg-viajes-mobile.jpg'
import Profile from '../img/gallery/profile-02.jpg'

function Card({ el }) {
  return (
    <div className="card gallery-card">
      <img src={Bg} className="card-img-top" alt={`viajes ${el}`} />
      <div className="card-body">
        <div className="info">
          <div className="author-img-container">
            <img className="author-img" src={Profile} alt={`author ${el}`} />
          </div>
          <div className="card-info-author">
            <p className="author-name">Sam Jerremy</p>
            <p className="author-tag">#dayAtTheBeach</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
