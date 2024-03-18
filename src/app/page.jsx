import Slider from "@/app/components/Slider";
import HomeSection from "@/app/components/HomeSection";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import InformationSection from "@/app/components/InformationSection";

import { getSlider } from "@/app/lib/sliders";
import { getCategoryNavigation } from "@/app/lib/categories";

export default async function Home() {
  const sliders = await getSlider({ slider_id: "homeslider" });
  const categories = await getCategoryNavigation();

  return (
    <main className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto">
      <Slider images={!!sliders?.results && sliders?.results[0].images} />
      <HomeSection categories={!!categories?.results && categories.results} />
      <FeaturedProducts />
      <InformationSection />
    </main>
  );
}
