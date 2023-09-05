import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Image from "../assets/images/smoke.jpg"; //Image Name is my own name  for the image any name can be kept
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({setAuthenticate}) => {
	const { useState } = React;
	const navigate = useNavigate();
	const [eye, seteye] = useState(true);
	const [inpass, setinpass] = useState("password");
	const [warning, setwarning] = useState(false);
	const [tick, settick] = useState(false);

	const [inputText, setInputText] = useState({
		email: "",
		password: "",
	});

	const [wemail, setwemail] = useState(false);
	const [wpassword, setwpassword] = useState(false);

	const Eye = () => {
		if (inpass == "password") {
			setinpass("text");
			seteye(false);
			setwarning(true);
		} else {
			setinpass("password");
			seteye(true);
			setwarning(false);
		}
	};

	const Tick = () => {
		settick(!tick);
		// if (tick) {
		// 	settick(false);
		// } else {
		// 	settick(true);
		// }
	};

	// const inputEvent = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;

	// 	setInputText((lastValue) => {
	// 		return {
	// 			...lastValue,
	// 			[name]: value,
	// 		};
	// 	});
	// };

	const inputEvent = (event) => {
		const { name, value } = event.target;
		setInputText((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const submitForm = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("https://fts-backend.onrender.com/admin/login", {
				email: inputText.email,
				password: inputText.password,
			});

			const { message, accesstoken } = response.data;
			toast.success(message);
			setAuthenticate(true);
			localStorage.setItem("authToken", accesstoken);
			setTimeout(() => {
				navigate("/table");
			}, 2000);
		} catch (error) {
			toast.error("Login failed. Please check your credentials.");
		}

		setwemail(false);
		setwpassword(false);
		if (inputText.email == "") {
			setwemail(true);
		} else if (inputText.password == "") setwpassword(true);
	};

	return (
		<>
			<ToastContainer />

			<div className="container logincontainer">
				<div className="card">
					<div className="form">
						<div className="left-side">
							<img src={Image} />
						</div>
						<div className="right-side">
							<div className="loginheading">
								<h3>Log in to ConcertIDs.</h3>
								<p>Welcome Back! Login with your data that you entered during registration.</p>
							</div>
							<div className="social">
								<span>
									<i className="fa fa-google"></i>Log in with Google
								</span>
								<span>
									<i className="fa fa-facebook-f"></i>Log in with Facebook
								</span>
							</div>
							<hr />
							<div className="or">
								<p>or</p>
							</div>
							<form onSubmit={submitForm}>
								<div className="input-text">
									<input
										type="text"
										className={`${wemail ? "text-warning" : ""}`}
										value={inputText.email}
										onChange={inputEvent}
										name="email"
									/>
									<label>Email</label>
									<i className="fa fa-envelope"></i>
								</div>
								<div className="input-text">
									<input
										type={inpass}
										className={` ${warning ? "warning" : ""} ${wpassword ? "text-warning" : ""}`}
										value={inputText.password}
										onChange={inputEvent}
										name="password"
									/>
									<label>Password</label>
									<i className="fa fa-lock"></i>
									<i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
								</div>

								<div className="rem_pass">
									<div className="remember">
										<span onClick={Tick} className={` ${tick ? "green" : ""}`}>
											<i className="fa fa-check"></i>
										</span>
										<p>Remember Me</p>
									</div>
									<a href="#">Forgot your password?</a>
								</div>
								<div className="button">
									<button type="submit">Login</button>
								</div>
							</form>
							<div className="register">
								<p>
									Didn't have an account?<a href="#"> Register</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
// ReactDOM.render(<LogIn/>,document.getElementById("root"));
