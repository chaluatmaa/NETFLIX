import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Rows.css";

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);
	const baseUrl = "https://image.tmdb.org/t/p/original/";
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	return (
		<div className="rows">
			<h1 className="row__title">{title}</h1>
			<div className="row__posters">
				{movies.map((movie) => (
					<img
						className={`row__poster ${isLargeRow && "row__posterLarge"}`}
						key={movie.id}
						src={`${baseUrl}${
							isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
};

export default Rows;
