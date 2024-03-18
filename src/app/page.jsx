import Slider from "@/app/components/Slider";
import HomeSection from "@/app/components/HomeSection";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import InformationSection from "@/app/components/InformationSection";

import { getSlider } from "@/app/lib/sliders";

export default async function Home() {
  const { results } = await getSlider({ slider_id: "homeslider" });

  return (
    <main className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto">
      <Slider images={!!results && results[0]?.images} />
      <HomeSection />
      <FeaturedProducts />
      <InformationSection />
    </main>
  );
}
