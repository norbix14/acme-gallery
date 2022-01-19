import Logo from './Logo'

function Footer() {
  return (
    <>
      <div className="pink-line"></div>
      <footer className="footer">
        <div className="footer-body custom-container">
          <div className="logo-container">
            <Logo className="footer-logo-container" />
          </div>
          <div className="footer-copyright">
            <h2>&copy; All right reserved 2020</h2>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
