import IconLogo from '../img/icons/icon_acme.svg'
import IconGallery from '../img/icons/icon_gallery.svg'
import IconPinkLine from '../img/icons/icon_pink_line.svg'
import IconWhiteLine from '../img/icons/icon_white_line.svg'

function Logo({ className }) {
  return (
    <div className={`logo ${className}`}>
      <img className="img-logo" src={IconLogo} alt="acme logo" />
      <img className="img-gallery" src={IconGallery} alt="gallery logo" />
      <img className="img-white-line" src={IconWhiteLine} alt="white line" />
      <img className="img-pink-line" src={IconPinkLine} alt="pink line" />
    </div>
  )
}

export default Logo
