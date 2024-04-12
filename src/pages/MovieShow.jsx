import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const MovieShow = () => {
  const location = useLocation();
  const { state } = location;
  const { movies } = useSelector(store => store.movies)

  return (
    <>
      <div className="container shadow my-5">
        <div className="row">
          <h3 className='card-title py-3 text-center text-info fw-bolder'>{movies.filter(movie => movie.Title.replace(/\s+/g, '-').toLowerCase() === state.from
          ).map(movie => movie.Title)}</h3>
          <div id="carouselExample" className="carousel slide shadow p-2 my-3">
            <div className="carousel-inner">
              {
                movies.filter(movie => movie.Title.replace(/\s+/g, '-').toLowerCase() === state.from
                ).map(movie => movie.Images.map((image, index) =>
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img src={image} className="d-block w-100" alt={movie.Title} style={{ maxHeight: 500 }} />
                  </div>))
              }
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className='card-text shadow-sm rounded-3 p-3'>
            {
              movies.filter(movie => movie.Title.replace(/\s+/g, '-').toLowerCase() === state.from
              ).map((movie, index) =>
                <div key={index}>
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action list-group-item-info" aria-current="true">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1"><span className='fw-bolder'>Director:</span> {movie.Director}</h5>
                        <small><span className='fw-bolder'>Year:</span> {movie.Year}</small>
                      </div>
                      <p className="mb-1"><span className='fw-bolder'>Actors:</span> {movie.Actors}</p>
                      <p><span className='fw-bolder'>Statement:</span> {movie.Plot}</p>
                    </div>
                  </div>
                </div>)
            }
          </div>
        </div>
      </div>
    </>
  )
}
