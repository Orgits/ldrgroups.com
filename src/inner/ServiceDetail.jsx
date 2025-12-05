import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import ContactForm from "../components/contactform/ContactForm";
import BlogThree from "../components/blog/BlogThree";
import FooterFour from "../components/footer/FooterFour";

function ServiceDetail() {
  const { serviceName } = useParams();
  const [service, setService] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch services data from JSON file
    fetch("/data/services.json")
      .then((response) => response.json())
      .then((data) => {
        const foundService = data.services.find((s) => s.slug === serviceName);
        if (foundService) {
          setService(foundService);
          setAllServices(data.services);
        } else {
          setError("Service not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
        setError("Error loading service");
        setLoading(false);
      });
  }, [serviceName]);

  if (loading) {
    const breadcrumbs = [
      { label: "Home", link: "/" },
      { label: "Services", link: "/our-service" },
      { label: "Loading..." },
    ];
    return (
      <div>
        <HeaderOne />
        <Breadcrumb title="Loading..." breadcrumbs={breadcrumbs} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <p>Loading service details...</p>
            </div>
          </div>
        </div>
        <ContactForm />
        <BlogThree />
        <FooterFour />
      </div>
    );
  }

  if (error || !service) {
    const breadcrumbs = [
      { label: "Home", link: "/" },
      { label: "Services", link: "/our-service" },
      { label: "Service Not Found" },
    ];
    return (
      <div>
        <HeaderOne />
        <Breadcrumb title="Service Not Found" breadcrumbs={breadcrumbs} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <h2>Service Not Found</h2>
              <p>The service you're looking for doesn't exist.</p>
              <Link to="/our-service" className="rts-btn btn-primary">
                Back to Services
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
        <BlogThree />
        <FooterFour />
      </div>
    );
  }

  // Get top 6 services for sidebar (excluding current service)
  const topServices = allServices
    .filter((s) => s.id !== service.id)
    .slice(0, 10);

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Services", link: "/our-service" },
    { label: service.title },
  ];

  return (
    <div>
      <HeaderOne />
      <Breadcrumb title={service.title} breadcrumbs={breadcrumbs} />

      <div
        style={{
          backgroundColor: "#fafbfc",
          minHeight: "100vh",
          paddingTop: "50px",
          paddingBottom: "60px",
        }}
      >
        {/* Main Container */}
        <div
          style={{ maxWidth: "1560px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{ display: "flex", gap: "50px", alignItems: "flex-start" }}
          >
            {/* Main Content - Left Column */}
            <div style={{ flex: "1", minWidth: "0" }}>
              {/* Hero Section with Image */}
              <div
                style={{
                  marginBottom: "50px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                  backgroundColor: "white",
                }}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = "#e0e0e0";
                    e.currentTarget.style.height = "300px";
                  }}
                />
              </div>

              {/* Title Section */}
              <div style={{ marginBottom: "45px" }}>
                <h1
                  style={{
                    fontSize: "44px",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "16px",
                    lineHeight: "1.25",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {service.title}
                </h1>
                <div
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#0052CC",
                    borderRadius: "1.5px",
                    marginBottom: "24px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "17px",
                    color: "#475569",
                    lineHeight: "1.7",
                    maxWidth: "100%",
                    fontWeight: "500",
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Main Content */}
              {(service.mainContent || service.content) && (
                <div style={{ marginBottom: "50px" }}>
                  <div
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.8",
                      color: "#475569",
                    }}
                  >
                    {(service.mainContent || service.content)?.split("\n").map(
                      (paragraph, index) =>
                        paragraph.trim() && (
                          <p
                            key={index}
                            style={{
                              marginBottom: "20px",
                              fontWeight: "400",
                              letterSpacing: "0.3px",
                            }}
                          >
                            {paragraph}
                          </p>
                        )
                    )}
                  </div>
                </div>
              )}

              {service.servicesInclude &&
                service.servicesInclude.length > 0 && (
                  <div style={{ marginBottom: "50px" }}>
                    <div style={{ marginBottom: "32px" }}>
                      <h2
                        style={{
                          fontSize: "28px",
                          fontWeight: "700",
                          color: "#0f172a",
                          marginBottom: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span style={{ fontSize: "22px", color: "#0052CC" }}>
                          ✓
                        </span>
                        What Our Services Include
                      </h2>
                      <div
                        style={{
                          width: "60px",
                          height: "3px",
                          backgroundColor: "#0052CC",
                          borderRadius: "1.5px",
                        }}
                      ></div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      {service.servicesInclude.map((item, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            gap: "16px",
                            padding: "20px 24px",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            border: "1px solid #e2e8f0",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#0052CC";
                            e.currentTarget.style.boxShadow =
                              "0 8px 24px rgba(0, 82, 204, 0.12)";
                            e.currentTarget.style.backgroundColor = "#f8faff";
                            e.currentTarget.style.transform = "translateX(4px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#e2e8f0";
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.backgroundColor = "white";
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
                        >
                          <div
                            style={{
                              flexShrink: 0,
                              fontSize: "18px",
                              color: "#0052CC",
                              fontWeight: "600",
                              marginTop: "3px",
                              lineHeight: "1",
                            }}
                          >
                            →
                          </div>
                          <p
                            style={{
                              margin: "0",
                              fontSize: "15px",
                              color: "#334155",
                              lineHeight: "1.6",
                              fontWeight: "500",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {service.whyChooseUs && service.whyChooseUs.length > 0 && (
                <div style={{ marginBottom: "50px" }}>
                  <div style={{ marginBottom: "32px" }}>
                    <h2
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "#0f172a",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "22px" }}>⭐</span>
                      Why Choose Us
                    </h2>
                    <div
                      style={{
                        width: "60px",
                        height: "3px",
                        backgroundColor: "#fbbf24",
                        borderRadius: "1.5px",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {service.whyChooseUs.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          gap: "16px",
                          padding: "20px 24px",
                          backgroundColor: "white",
                          borderRadius: "10px",
                          border: "1px solid #fef3c7",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "#fbbf24";
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(251, 191, 36, 0.12)";
                          e.currentTarget.style.backgroundColor = "#fffbf0";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "#fef3c7";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.backgroundColor = "white";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <div
                          style={{
                            flexShrink: 0,
                            fontSize: "18px",
                            color: "#fbbf24",
                            fontWeight: "600",
                            marginTop: "3px",
                            lineHeight: "1",
                          }}
                        >
                          ✓
                        </div>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "15px",
                            color: "#334155",
                            lineHeight: "1.6",
                            fontWeight: "500",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              style={{
                width: "400px",
                flexShrink: 0,
                position: "sticky",
                top: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              {/* Top Services Widget */}
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  border: "1px solid #e2e8f0",
                  padding: "32px 24px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                }}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#0f172a",
                    marginBottom: "24px",
                    paddingBottom: "16px",
                    borderBottom: "2px solid #0052CC",
                  }}
                >
                  ⭐ Top Services
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {topServices.map((s) => (
                    <a
                      key={s.id}
                      href={`/services/${s.slug}`}
                      style={{
                        display: "block",
                        padding: "14px 16px",
                        backgroundColor: "#f8fafc",
                        borderRadius: "8px",
                        textDecoration: "none",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#e8f0ff";
                        e.currentTarget.style.borderColor = "#0052CC";
                        e.currentTarget.style.transform = "translateX(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#f8fafc";
                        e.currentTarget.style.borderColor = "#e2e8f0";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: "#0052CC",
                          marginBottom: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span>→</span>
                        {s.title}
                      </div>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#64748b",
                          margin: "0",
                          lineHeight: "1.4",
                        }}
                      >
                        {s.description.substring(0, 55)}...
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section - Exactly like OurService.jsx */}
      <ContactForm />

      {/* Blog Section - Exactly like OurService.jsx */}
      <BlogThree />

      {/* Footer - Exactly like OurService.jsx */}
      <FooterFour />
    </div>
  );
}

export default ServiceDetail;
