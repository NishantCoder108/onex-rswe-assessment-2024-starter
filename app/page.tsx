import About from "@/components/pages/About/About";
import CarDetailsPage from "@/components/pages/CarDetailsPage/CarDetailsPage";
import Navbar from "@/components/pages/Navbar/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <CarDetailsPage />
            <About />
        </>
    );
}
