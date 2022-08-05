import Navbar from "../components/Navbar";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllFilms, getStatus } from '../reducers/filmsReducer'
import { useEffect } from "react";
import { fetchFilms } from '../actions/getFilms';
import { NavLink } from "react-router-dom";

export default function Home() {
  const films = useSelector(getAllFilms);
  const status = useSelector(getStatus);
  const dispatch = useDispatch()

  useEffect(() => {
    if(status === 'idle'){
      dispatch(fetchFilms())
    }

  },[status,dispatch])

  return (
    <>
      <Navbar />
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", flexFlow: "wrap"}}>
        {films.length > 0? films.map((film, index) => {
          return(
            <div style={{width: 200, padding:10}} key={index} className="film">
                <NavLink to={`/films/${film.id}`}>
                  <img src={film.image} width="100%" height="100%" style={{objectFit: "contain"}} />
                </NavLink>
            </div>
          )
        }): 'Loading....'}
      </div>
    </>
  )
}
