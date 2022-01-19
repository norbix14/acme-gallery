function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <section className="search-bar">
      <div className="custom-container form-container">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="description">
            <h3>Search by #</h3>
          </div>
          <div className="input-data">
            <input type="text" placeholder="Search" />
            <span className="lupe">&#128269;</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SearchBar
