import Card from './Card'

function Gallery() {
  return (
    <main className="custom-container gallery-container">
      <div className="gallery-cards">
        {[1, 2, 3, 4, 5, 6].map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </div>
      <button type="button" className="btn-more">
        load more
      </button>
    </main>
  )
}

export default Gallery
