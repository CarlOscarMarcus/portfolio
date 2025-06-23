import React from "react";
import Header from "./Header";
import Hero from "./Hero.jsx";
import TechSlider from "./animations/TechSlider.js";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
	<div className="app">
		<Header />
		<Hero />
		<TechSlider />
		<main>
			<Outlet />
		</main>
		<Footer />
	</div>
);

export default Layout;
