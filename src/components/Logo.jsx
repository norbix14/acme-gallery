import IconAcme from './icons/IconAcme'
import IconGallery from './icons/IconGallery'
import IconLine from './icons/IconLine'

function Logo({ className }) {
  return (
    <div className={`logo ${className ?? ''}`}>
      <IconAcme />
      <IconGallery />
      <IconLine className="icon-white-line" />
      <IconLine className="icon-pink-line" />
    </div>
  )
}

export default Logo
