import React from "react";
import { Users } from "../Users";

const Home = () => {
	return (
		<ul>
			{Users.map((user) => (
				<li key={user.id}>{user.first_name}</li>
			))}
		</ul>
	);
};

export default Home;
