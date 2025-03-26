import Image from "next/image";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";

import Footer from './components/Footer'
import ClothingDesignSteps from "./components/ClothingDesignSteps";

export default function Home() {
    return (

        <>
            <div className="bg-white">
            <AboutUs />
            <ClothingDesignSteps/>
            <Footer />
            </div>
        </>

    );
}
