/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react";
import UserTable from "../components/UserTable";
import axios from "axios";
import useSWR from "swr";

const Home = () => {
	const inputRef = useRef(null);
	const [input, setInput] = useState("");
	const fetcher = (url) => axios.get(url).then((res) => res.data);
	const { data } = useSWR(
		`http://localhost:3000/api/users/${input}`,
		fetcher
	);

	useEffect(() => {
		inputRef.current?.focus();
	});

	console.log(data);
	if (!data) return <div>loading...</div>;
	return (
		<div className="flex flex-col items-center  ">
			<div>
				<h4 className="text-base text-gray-600 py-1">
					E-commerce query example :
				</h4>
				<ul className="text-sky-500 underline">
					<li>
						<a target="_blank" href="/api/ecommerce">
							{" "}
							/api/ecommerce{" "}
						</a>
					</li>
					<li>
						<code>
							{" "}
							/api/ecommerce?category=recommended/watch/hats/sneakers/jackets/womens/mens
						</code>
					</li>
					<li>
						<code> /api/ecommerce?name=sony A7s</code>
					</li>
					<li>
						<code> /api/ecommerce?brand=apple</code>
					</li>
					<h4 className="text-base text-gray-600">
						Users query example :
					</h4>
				</ul>
				<ul className="text-sky-500 underline py-1">
					<li>
						<a target="_blank" href="/api/users">
							{" "}
							/api/users
						</a>
					</li>
					<li>
						<code>/api/users/Nataniel</code>
					</li>
				</ul>
			</div>
			<input
				ref={inputRef}
				value={input}
				onChange={(e) => setInput(e.target.value)}
				className="text-gray-600  border mb-10 text-base px-1 py-1 my-10 w-[250px] "
				type="text"
			/>
			<ul className="text-xl font-normal text-gray-500">
				<UserTable data={data} />
			</ul>
		</div>
	);
};

export default Home;
