import { Users } from "../../../json/Users";
export default function handler(req, res) {
	res.status(200).json(Users);
}
