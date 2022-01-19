import Logo from './Logo'

function Header() {
  return (
    <nav className="nav-header custom-container">
      <div className="logo-container">
        <Logo className="header-logo-container" />
      </div>
      <div className="actions">
        <div className="login">
          <button className="btn-login">login</button>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Header
