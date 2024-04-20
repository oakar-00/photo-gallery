import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/header";
import ImageItem from "./ImageItem/imageItem";
import Gallery from "./Gallery/gallery";
import Footer from "./Footer/footer";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-pink-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black">
			<Header />
			<Gallery />
			<Footer />
		</div>
	);
}

export default App;
