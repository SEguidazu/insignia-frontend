import Slider from "@/app/components/Slider";
import { getSlider } from "@/app/lib/sliders";

export const revalidate = 3600; // revalidate the data at most every hour

export default async function StoreLayout({ children }) {
  const response = await getSlider({ slider_id: "categoryslider" });

  return (
    <main className="max-w-7xl mx-auto">
      {!!response?.results && (
        <Slider
          images={response.results[0]?.images}
          size={response.results[0].size}
        />
      )}

      {children}
    </main>
  );
}
