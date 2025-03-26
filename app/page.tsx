import Image from "next/image";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";

export default function Home() {
    return (
        <div className="bg-white">
            <AboutUs />
        </div>
    );
}
