import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
	return (
		<Link to={props.to} style={{
			color: 'inherit',
			textDecoration: 'none'
		}}>
			{props.children}
		</Link>
	);
}

export default NavLink;
