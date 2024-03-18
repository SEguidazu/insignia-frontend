import InfoModal from "./InfoModal";

export default function InformationSection() {
  return (
    <section
      id="info-section"
      className="w-full grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-1 grid-rows-2 gap-5 my-[7rem]"
    >
      <InfoModal
        title="¿Quiénes somos?"
        className="lg:min-h-[230px] min-h-[180px] text-main_hover text-4xl font-medium text-balance rounded-2xl border-1 border-main_stroke bg-white drop-shadow hover:text-white hover:bg-main_hover hover:drop-shadow-lg ease-out"
        modalContent={
          <>
            <p>
              Insignia es un proyecto familiar que nace en medio de la pandemia,
              buscando ampliar nuestra actividad de venta directa de acero
              quirúrgico. Con mucho esfuerzo y amor por lo que hacemos, fuimos
              llegando a distintos rincones del país con nuestros productos y
              cumpliendo de a poco nuestro sueño, facilitando a cientos de
              emprendedores sumar a sus trabajos y esfuerzos un ingreso más con
              la venta de paños con cadenas, aros, dijes, anillos, pulseras y
              relojes.
            </p>
            <p>
              Con el lanzamiento de nuestra plataforma de venta mayorista, te
              invitamos a que puedas acceder a productos de excelente calidad y
              variedad, con incorporación de modelos nuevos de forma constante,
              control de stock permanente y asesoramiento a través de nuestro
              chat, para que puedas sumar a tu propios proyectos, de forma
              sencilla y con envíos a todo el país.
            </p>
          </>
        }
      >
        ¿Quiénes somos?
      </InfoModal>
      <InfoModal
        title="Preguntas frecuentes"
        className="lg:min-h-[230px] min-h-[180px] text-main_hover text-4xl font-medium text-balance rounded-2xl border-1 border-main_stroke bg-white drop-shadow hover:text-white hover:bg-main_hover hover:drop-shadow-lg ease-out"
        modalContent={
          <>
            <p>
              Te damos la bienvenida a <b>Insignia Joyas</b> y te damos las
              gracias por tenernos en cuenta para tu negocio. A continuación te
              respondemos algunas de tus consultas para realizar compras por
              mayor. Si tenes otras consultas las podes hacer por medio de
              nuestro whatsapp y te estaremos respondiendo a la brevedad.
            </p>
            <p>
              <b>¿Cuánto es el mínimo de compra?</b> <br />
              El mínimo de compra es de $10,000.- final. No hay una cantidad
              mínima de artículos, por lo que podes comprar de a una unidad
              hasta llegar al mínimo de compra.
            </p>
            <p>
              <b>¿Qué método de envío tenemos?</b> <br />
              Trabajamos con envíos con <i>Credifin</i> y <i>Vía Cargo</i>,
              según la zona del país. También nos podes pedir por alguna empresa
              que ya conozcas y podemos enviar por ese medio.
            </p>
            <p>
              <b>¿Puedo cambiar algún producto que no haya vendido?</b> <br />
              No realizamos esos cambios, solo aceptamos devoluciones si el
              producto llego roto o con falla de fábrica hasta 24 hs de haber
              recibido el producto.
            </p>
            <p>
              <b>
                ¿Cuánto tardan en realizar el despacho de mi pedido una vez
                abonado?
              </b>
              <br />
              Una vez que terminaste tu compra y se realiza el pago, tardamos 48
              hs en realizar el envió los días hábiles de lunes a viernes de 8 a
              19hs. Las compras realizadas los días sábado o domingo pasan a ser
              preparadas a partir del día lunes en el plazo de las 48 hs. En
              cuanto recibimos tu compra nos ponemos en contacto para coordinar
              la preparación y despacho del mismo. Por el mismo medio se
              informara de cualquier demora que se pueda llegar a producir.
            </p>
            <p>
              <b>¿Los envíos son sin cargo?</b>
              <br />
              No, el envió lo abonas en la base de la empresa correspondientes.
              Al momento del envió se te envía la factura de la empresa por la
              que se realiza el despacho, nosotros no cobramos ningún extra.
              Tener en cuenta que los costos de envió son por distancia y peso
              de la caja que se despacha. Si contamos con envíos gratis a partir
              de la compra de $20,000.-
            </p>
          </>
        }
      >
        Preguntas frecuentes
      </InfoModal>
    </section>
  );
}
