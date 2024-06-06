import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("@/app/components/SignUpForm"), {
  ssr: false,
});

export default async function Registro() {
  return (
    <div className="w-full mt-12 mb-20 flex justify-between items-center">
      <div className="max-w-lg w-full">
        <h1 className="text-black text-3xl font-bold mb-4">
          Completá tus datos
        </h1>
        <p className="text-secondary_link pb-8 mb-9 border-b-1 border-main_stroke">
          Todos los campos son obligatorios
        </p>
        <SignUpForm />
      </div>
    </div>
  );
}
