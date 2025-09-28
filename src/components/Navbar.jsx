import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    //escuchas el evento scroll
    window.addEventListener("scroll", handleScroll);

    //quitas el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid bg-white sticky-top">
      <div className="container">
        <nav
          className={`navbar navbar-expand-lg bg-white navbar-light py-2 py-lg-0 navbar-custom ${
            show ? "show" : ""
          }`}
        >
          <HashLink smooth to="#home" className="navbar-brand">
            <img className="img-fluid" src="img/logo.png" alt="Logo" />
          </HashLink>
          <button
            type="button"
            className="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <HashLink className="nav-item nav-link active" smooth to="#home">
                Home
              </HashLink>
              <HashLink className="nav-item nav-link" smooth to="#about">
                About
              </HashLink>
              <HashLink className="nav-item nav-link" smooth to="#products">
                Products
              </HashLink>
              <HashLink className="nav-item nav-link" smooth to="#store">
                Store
              </HashLink>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light rounded-0 m-0">
                  <HashLink className="dropdown-item" smooth to="#features">
                    Features
                  </HashLink>
                  <HashLink className="dropdown-item" smooth to="#article">
                    Blog Article
                  </HashLink>
                  <HashLink className="dropdown-item" smooth to="#testimonial">
                    Testimonial
                  </HashLink>
                  {/* <a href="404.html" className="dropdown-item">
                    404 Page
                  </a> */}
                </div>
              </div>
              <HashLink className="nav-item nav-link" smooth to="#contact">
                Contact
              </HashLink>
            </div>
            {/* <div className="border-start ps-4 d-none d-lg-block">
              <button type="button" className="btn btn-sm p-0">
                <i className="fa fa-search"></i>
              </button>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};
