import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Descript({ coverImg, id, title, rating, year, genres, summary }) {
  return (
    <div>
      <h1>
        <Link to={"/movieapp"}>HOME</Link>
      </h1>
      <img src={coverImg} alt={title}></img>
      <p>{id}</p>
      <p>{title}</p>
      <p>{rating}</p>
      <p>{year}</p>
      <p>{summary}</p>
      <ul>
        {genres.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

Descript.propTypes = {
  id: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Descript;
