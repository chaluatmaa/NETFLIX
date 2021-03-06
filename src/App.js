import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counterSlice";
import Profile from "./screens/Profile";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authorisedUser) => {
			if (authorisedUser) {
				dispatch(
					login({
						uid: authorisedUser.uid,
						email: authorisedUser.email,
					})
				);
			} else {
				console.log("logged out");
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<Switch>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
