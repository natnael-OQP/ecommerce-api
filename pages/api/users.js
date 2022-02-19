// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Users } from "../../Users"
export default function handler(req, res) {
  res.status(200).json(Users)
}
