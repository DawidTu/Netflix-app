import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return (
        <button className="btn" onClick={props.deleteMovie}>Vymazať film</button>
    )
}

export default MovieDeleteButton