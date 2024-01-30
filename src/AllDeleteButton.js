import "./AllDeleteButton.css"

const AllDeleteButton = (props) => {
    return (
        <button className="main-delete-button" onClick={props.deleteMovies}>Vmyzať všetko</button>
    )
}

export default AllDeleteButton