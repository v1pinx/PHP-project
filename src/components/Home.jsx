import Feedback from "./Feedback";
import ImageSlider from "./ImageSlider";
import LimitedTimeOffer from "./LimitedTimeOffer";
import TrendingCategories from "./TrendingCategories";
import TrendingProducts from "./TrendingProducts";
import TwoImageSection from "./TwoImageSection";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <ImageSlider />
            <div className="bg-black py-12">
                <TrendingCategories />
                <TwoImageSection />
                <TrendingProducts />
                <LimitedTimeOffer />
                <Feedback />
            </div>
            <Footer />
        </>
    )
}