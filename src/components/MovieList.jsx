import { useSelector } from "react-redux"
import { Movie } from "./Movie"

export const MovieList = () => {
    const { movies } = useSelector(store => store.movies)
    return (

        <>
            <div className="container my-5">
                <div className="row gap-2 justify-content-center">
                    {
                        movies.map(movie => <Movie key={movie.imdbID} {...movie} />)
                    }
                </div>
            </div>

        </>



    )
}
