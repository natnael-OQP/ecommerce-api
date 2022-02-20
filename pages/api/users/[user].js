import { Users } from "../../../json/Users";
export default function handler(req, res) {
	const { user } = req.query;
	const filtered = Users.filter((item) =>
		item.first_name.toLowerCase().includes(user.toLowerCase())
	);
	res.status(200).json(filtered.slice(0, 10));
}
