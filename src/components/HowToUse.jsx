export const HowToUse = () => {
  return (
    <div id="features" className="container-fluid how-to-use my-5">
      <div className="container">
        <div className="row g-5" data-aos="fade" data-aos-delay="100">
          <div className="section-how d-flex align-items-center justify-content-center">
            <h1 className="display-6">Modo de Aplicación</h1>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade" data-aos-delay="100">
            <h2>Aplicación en manos</h2>
            <p className="mb-4">
              Aplica una pequeña cantidad de{" "}
              <span className="text-white">aceite de palta HDB</span> sobre las
              manos limpias y secas. Masajea suavemente hasta que la piel lo
              absorba, prestando especial atención a las cutículas y zonas
              resecas. Para un tratamiento más profundo, utiliza una capa
              generosa antes de dormir y cubre las manos con guantes de algodón
              durante 20 a 30 minutos o toda la noche. La piel quedará suave,
              nutrida y visiblemente más tersa.
            </p>
            <img
              className="img-fluid bg-white w-100"
              data-aos="fade"
              data-aos-delay="200"
              src="img/how-to-use-1.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-6" data-aos="fade" data-aos-delay="300">
            <h2>Aplicación en cabello</h2>
            <p className="mb-4">
              Distribuye una pequeña cantidad de{" "}
              <span className="text-white">aceite de palta HDB</span> desde
              medios a puntas sobre el cabello seco o ligeramente húmedo. Deja
              actuar entre 30 minutos y 2 horas como tratamiento de nutrición
              profunda, luego lava el cabello con tu shampoo habitual para
              eliminar el exceso y dejar un acabado limpio y brillante. También
              puedes aplicar unas gotas en las puntas después del lavado para
              sellar la hidratación y aportar brillo natural.
            </p>
            <img
              className="img-fluid bg-white w-100"
              data-aos="fade"
              data-aos-delay="400"
              src="img/how-to-use-2.jpg"
              alt=""
            />
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};
