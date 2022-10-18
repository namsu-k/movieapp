import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Descript from "../components/Descript";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };

  useEffect(
    () => {
      getMovie();
    }, // eslint-disable-next-line
    []
  );
  return (
    <div>
      {loading ? (
        <h1>Detail loading...</h1>
      ) : (
        <Descript
          key={details.id}
          id={details.id}
          coverImg={details.medium_cover_image}
          title={details.title}
          rating={details.rating}
          year={details.year}
          summary={details.description_full}
          genres={details.genres}
        ></Descript>
      )}
    </div>
  );
}

export default Detail;
