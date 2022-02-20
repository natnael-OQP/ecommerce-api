import Shop_Data from "../../../json/ecommerce";
export default function handler(req, res) {
	const { category, name, brand } = req.query;

	if (category) {
		const filtered = Shop_Data.filter(
			(item) => item.title.toLowerCase() === category.toLowerCase()
		);
		res.status(200).json(filtered);
	} else if (name) {
		const data = Shop_Data.flatMap((item) => item.items);
		const filtered = data.filter((item) =>
			item.name.toLowerCase().includes(name.toLowerCase())
		);
		res.status(200).json(filtered);
	} else if (brand) {
		const data = Shop_Data.flatMap((item) => item.items);
		const filtered = data.filter((item) =>
			item.brand.toLowerCase().includes(brand.toLowerCase())
		);
		res.status(200).json(filtered);
	} else {
		res.status(200).json(Shop_Data);
	}
}
