export const Article = () => {
  return (
    <div id="article" className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5" data-aos="fade" data-aos-delay="100">
            <img className="img-fluid" src="img/article.jpg" alt="" />
          </div>
          <div className="col-lg-6" data-aos="fade" data-aos-delay="500">
            <div className="section-title">
              <p className="fs-5 fw-medium fst-italic text-primary">
                La palta y sus propiedades
              </p>
              <h1 className="display-6">La palta y sus beneficios</h1>
            </div>
            <p className="mb-4">
              La palta, o aguacate, es una de las frutas más completas en
              nutrientes. Contiene vitaminas del grupo B (B5, B6 y folatos) que
              favorecen el metabolismo y la energía, vitamina C que actúa como
              antioxidante natural, vitamina E que protege las células del daño
              oxidativo y vitamina K esencial para la salud ósea. Además, es
              rica en potasio, incluso más que el plátano, lo que ayuda a
              regular la presión arterial. Sus grasas monoinsaturadas,
              principalmente ácido oleico, contribuyen a mantener niveles
              saludables de colesterol y a proteger el sistema cardiovascular.
            </p>
            <p className="mb-4">
              En el ámbito dermatológico, la palta es un aliado natural para la
              piel. Su combinación de vitamina E, luteína y ácidos grasos
              esenciales favorece la elasticidad, la hidratación profunda y la
              regeneración celular. Aplicada en cosméticos, ayuda a prevenir la
              resequedad, suaviza irritaciones y fortalece la barrera cutánea,
              reduciendo la aparición de arrugas y mejorando la luminosidad de
              la piel.
            </p>
            {/* <a href="" className="btn btn-primary rounded-pill py-3 px-5">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};
