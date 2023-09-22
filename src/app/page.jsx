import { Button } from "@nextui-org/button";
import Slider from "@/app/components/Slider";
import { getSlider } from "@/app/lib/sliders";

export default async function Home() {
  const { results } = await getSlider({ slider_id: "homeslider" });

  return (
    <main className="max-w-7xl mx-auto">
      <Slider images={results[0]?.images} />
      <Button>Esta es un boton de NextUI</Button>
    </main>
  );
}
