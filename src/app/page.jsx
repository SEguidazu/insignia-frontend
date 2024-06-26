import Slider from "@/app/components/Slider";
import HomeSection from "@/app/components/HomeSection";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import InformationSection from "@/app/components/InformationSection";

import { getSlider } from "@/app/lib/sliders";
import { getCategoryNavigation } from "@/app/lib/categories";
import { getFeaturedProducts } from "@/app/lib/products";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function Home() {
  const sliders = await getSlider({ slider_id: "homeslider" });
  const categories = await getCategoryNavigation();
  const products = await getFeaturedProducts();

  return (
    <main className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto px-2">
      <Slider images={!!sliders?.results && sliders?.results[0].images} />
      <HomeSection categories={!!categories?.results && categories.results} />
      <FeaturedProducts products={!!products?.results && products.results} />
      <InformationSection />
    </main>
  );
}
