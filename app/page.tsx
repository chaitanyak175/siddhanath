import Image from "next/image";
import Header from "./components/Header";
import Footer from './components/Footer'
import ClothingDesignSteps from "./components/ClothingDesignSteps";

export default function Home() {
    return (

        <>
            <Header />
            <div className="h-[300vh] bg-white">

            </div>
            <ClothingDesignSteps/>
            <Footer />
        </>


    );
}
