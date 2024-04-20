import { MouseEventHandler } from "react";

type Props = {
	link: string;
	id: string;
};

function ImageItem({ id, link }: Props): JSX.Element {
	return (
		<div className="border-2 border-black dark:border-white rounded-lg hover:scale-110 duration-100">
			<img
				className="h-52 w-96 object-fit"
				key={id}
				alt={`Image ${id}`}
				src={link}
				// onClick={() => renderFullScreenImage(link)}
			></img>
		</div>
	);
}

export default ImageItem;
