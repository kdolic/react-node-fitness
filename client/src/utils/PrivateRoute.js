import { Route, Redirect } from "react-router";
import React from "react";
export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem("token") ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);