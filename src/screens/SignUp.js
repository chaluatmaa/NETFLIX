import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignUp.css";

const SignUp = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const [user, setUser] = useState(null);
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authorisedUser) => {
				console.log(authorisedUser);
			})
			.catch((err) => alert(err.message));
	};

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authorisedUser) => {
				console.log(authorisedUser);
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className="signUp">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				<button onClick={signIn} type="submit">
					Sign In
				</button>
				<h4>
					<span className="signUp__gray">New to Netflix ? </span>
					<span className="signUp__link" onClick={register}>
						Sign up Now.
					</span>
				</h4>
			</form>
		</div>
	);
};

export default SignUp;
