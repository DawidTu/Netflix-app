import "./ReloadMovies.css"

const ReloadMovies = (props) => {
    return (
        <button className="reload-button" onClick={props.reloadMovies}>Obnoviť stránku</button>
    )
}

export default ReloadMovies