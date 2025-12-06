import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceTen() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services data from JSON file
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p>Loading services...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* our service area start */}
      <div className="rts-service-area rts-section-gapTop pb--200 service-two-bg bg_image">
        <div className="container">
          <div className="row g-5 service padding-controler" style={{gap: '40px 0'}}>
            {services.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-md-6 col-sm-12 col-12 pb--140 pb_md--100"
              >
                <div className="service-two-inner">
                  <Link to={`/our-service/${service.slug}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                      onError={(e) => {
                        e.target.src =
                          "/assets/images/service/default-service.png";
                      }}
                    />
                  </Link>
                  <div className="body-content">
                    <h5 className="title">{service.title}</h5>
                    <p className="dsic">{service.description}</p>
                    <Link
                      className="rts-read-more-two color-primary"
                      to={`/our-service/${service.slug}`}
                    >
                      Read More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* our service area end */}
    </div>
  );
}

export default ServiceTen;
