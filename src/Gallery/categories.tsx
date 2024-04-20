import images from "../images.json";
import getCategories from "../Utils/utils";

type Props = {
	setCategory: Function;
};

const Categories = ({ setCategory }: Props) => {
	const categories = getCategories();

	return (
		<div className="grid md:grid-cols-5 grid-cols-3 gap-2 pb-6 text-center">
			{categories.map((item: string, index: number) => (
				<div
					className="text-black border-black border-2 rounded p-2 px-4 bg-pink-200 hover:bg-white hover:text-black dark:text-white dark:bg-black dark:from-gray-800 dark:to-black dark:border-white dark:hover:bg-white hover:scale-110 duration-100 text-center"
					key={index}
					onClick={() => setCategory(item)}
				>
					{item}
				</div>
			))}
		</div>
	);
};

export default Categories;
