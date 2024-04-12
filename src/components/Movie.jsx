import { NavLink } from "react-router-dom"

export const Movie = (movie) => {
    return (
        <>
            <div className="card shadow" style={{ width: '18rem' }}>
                <NavLink to={{
                    pathname: `/${movie.Title.replace(/\s+/g, '-').toLowerCase()}`
                }}
                    state={{ from: `${movie.Title.replace(/\s+/g, '-').toLowerCase()}` }}
                >
                    <img src={movie.Poster} className="card-img-top img-thumbnail" alt={movie.Title} style={{ maxHeight: 300 }} />
                </NavLink>
                <div className="card-body">
                    <h3 className="card-title">{movie.Title}</h3>
                    <p className="card-text">{movie.Plot}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Year: {movie.Year}</li>
                    <li className="list-group-item">Genre: {movie.Genre}</li>
                    <li className="list-group-item">Released: {movie.Released}</li>
                </ul>
            </div >
        </>
    )
}
