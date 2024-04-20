import images from "../images.json";

const getCategories = () => {
	const out: string[] = ["All"];
	for (let i = 0; i < images.images.length; i++) {
		out.push(images.images[i].category);
	}
	return Array.from(new Set(out));
};

export default getCategories;
