import { AiFillGithub, AiFillLinkedin, AiFillHome } from "react-icons/ai";

function Footer() {
	return (
		<div className="bg-gradient-to-br from-gray-50 to-pink-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black text-center dark:text-white text-md p-4 border-b-2">
			Developed by: oakar-00
			<div className="flex flex-row justify-center p-4 space-x-8">
				<a href="https://github.com/oakar-00">
					<AiFillGithub size={52} />
				</a>
				<a href="https://oakar-00.github.io/website-deploy/">
					<AiFillHome size={52} />
				</a>
				<a href="https://www.linkedin.com/in/oakarmin/">
					<AiFillLinkedin size={52} />
				</a>
			</div>
		</div>
	);
}

export default Footer;
