import { useEffect, useState } from "react";
import ImageItem from "../ImageItem/imageItem";
import images from "../images.json";
import Categories from "./categories";
import {
	MdLastPage,
	MdNavigateNext,
	MdFirstPage,
	MdNavigateBefore,
} from "react-icons/md";

const page_size = 6;

function Gallery() {
	const [category, setCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);
	const [popup, setPopup] = useState(false);
	const [image, setImage] = useState(Object);

	const start_index = (currentPage - 1) * page_size;
	const filtered_images = [];
	if (category === "All") {
		for (let i = 0; i < images.images.length; i++) {
			filtered_images.push(images.images[i]);
		}
	} else {
		for (let i = 0; i < images.images.length; i++) {
			if (images.images[i].category === category) {
				filtered_images.push(images.images[i]);
			}
		}
	}
	const final_images = filtered_images.slice(
		start_index,
		start_index + page_size
	);
	console.log(final_images.length);

	useEffect(() => {}, []);

	const changePage = (type: String) => {
		const max_pages = Math.ceil(filtered_images.length / page_size);
		if (type === "next") {
			if (currentPage >= max_pages) {
				setCurrentPage(max_pages);
			} else {
				setCurrentPage(currentPage + 1);
			}
		} else if (type === "previous") {
			if (currentPage !== 1) {
				setCurrentPage(currentPage - 1);
			}
		} else if (type === "first") {
			setCurrentPage(1);
		} else if (type === "last") {
			setCurrentPage(max_pages);
		}
	};

	const viewImage = () => {
		return (
			<div
				id="ModelContainer"
				onClick={() => {
					setPopup(false);
					setImage(Object);
				}}
				className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
			>
				<div className=" p-2 bg-white rounded-lg">
					<div className="flex flex-col p-4 justify-center items-center  h-[80vh]">
						<h2 className="flex font-semibold py-4 text-center text-xl">
							Category: {image.category}
						</h2>
						<img
							className="flex object-fill w-full h-full"
							src={image.image_link}
							alt={image.category}
						></img>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="flex flex-col justify-center p-4 items-center">
			<Categories setCategory={setCategory} setCurrentPage={setCurrentPage} />
			<div className="grid md:grid-cols-3 grid-cols-1 gap-8 ">
				{final_images.map((image) => (
					<div
						onClick={() => {
							setPopup(true);
							setImage(image);
						}}
					>
						<ImageItem id={String(image.id)} link={image.image_link} />
					</div>
				))}
			</div>
			<div className="flex flex-row justify-center space-x-6 m-6 p-2 items-center ">
				<MdFirstPage
					className="text-white rounded-full border-2 bg-pink-200 border-black dark:bg-white dark:border-white"
					size={28}
					color="black"
					onClick={() => {
						changePage("first");
					}}
				/>
				<MdNavigateBefore
					className="text-white rounded-full border-2 bg-pink-200 border-black dark:bg-white dark:border-white"
					size={28}
					color="black"
					onClick={() => {
						changePage("previous");
					}}
				/>
				<p className="dark:text-white border-2 text-black bg-pink-200 border-black dark:border-white p-2 rounded-lg text-2xl dark:bg-black">
					{currentPage}
				</p>
				<MdNavigateNext
					className="text-white rounded-full border-2 bg-pink-200 border-black dark:bg-white dark:border-white"
					size={28}
					color="black"
					onClick={() => {
						changePage("next");
					}}
				/>
				<MdLastPage
					className="text-white rounded-full border-2 bg-pink-200 border-black dark:bg-white dark:border-white"
					size={28}
					color="black"
					onClick={() => {
						changePage("last");
					}}
				/>
			</div>
			{popup ? viewImage() : <></>}
		</div>
	);
}

export default Gallery;
