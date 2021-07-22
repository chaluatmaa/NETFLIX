import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counterSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./Profile.css";

const Profile = () => {
	const user = useSelector(selectUser);

	return (
		<div className="profile">
			<Nav />
			<div className="profile__body">
				<h1>Edit profile</h1>
				<div className="profile__info">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
						alt=""
					/>
					<div className="profile__details">
						<h2>{user.email}</h2>
						<div className="profile__plans">
							<h3>Plans (Current Plan: Premium)</h3>
							<button
								className="profile__signOut"
								onClick={() => auth.signOut()}
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
