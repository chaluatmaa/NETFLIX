import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "./features/counterSlice";
import "./Nav.css";

const Nav = () => {
	const [show, handleShow] = useState(false);
	const history = useHistory();
	const user = useSelector(selectUser);

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	const profile = () => {
		if (user) history.push("/profile");
	};

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
					className="nav__logo"
					src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
					alt=""
					onClick={() => history.push("/")}
				/>
				<img
					className="nav__avatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt=""
					onClick={profile}
				/>
			</div>
		</div>
	);
};

export default Nav;
