import { useParams } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux'
import { getAllFilms } from '../reducers/filmsReducer'
import StyledContent from "../components/StyledContent";

export default function Film() {
  let params = useParams();
  const films = useSelector(getAllFilms);

  let film = films.filter(film => film.id === params.filmId)[0];

  return (
    <main>
        <Navbar />
        <div style={{display: "flex", flexDirection: "row", width: "100%", flexWrap: "wrap", margin: 10}}>
            <div style={{width: 300}}>
                <img src={film.image} width="100%" height="100%" style={{objectFit: "contain"}} />
            </div>
            <div style={{marginLeft:10, width: "60%"}}>
                <h2 style={{margin:0}}>{film.title}</h2>
                <StyledContent title="Alternate Title" content={`${film.original_title_romanised} (${film.original_title})`} />
                <StyledContent title="Director" content={film.director} />
                <StyledContent title="Producer" content={film.producer} />
                <StyledContent title="Release Date" content={film.release_date} />
                <StyledContent title="Description" content={film.description} />
            </div>
        </div>
    </main>
  );
}