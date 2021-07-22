import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import Rows from "../Rows";
import requests from "../Requests";

const HomeScreen = () => {
	return (
		<div className="homeScreen">
			{/* {Nav} */}
			<Nav />
			{/* {Banner} */}
			<Banner />
			{/* {Rows} */}
			<Rows
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetFlixOriginals}
				isLargeRow
			/>
			<Rows title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
			<Rows title="TOP RATED" fetchUrl={requests.fetchTopRated} />
			<Rows title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
			<Rows title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
			<Rows title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
			<Rows title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
			<Rows title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
};

export default HomeScreen;
