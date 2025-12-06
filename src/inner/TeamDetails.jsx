import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderOne from "../components/header/HeaderOne";
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function TeamDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 1000 && window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 1000 && window.innerWidth <= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Fetch team data from JSON file
    fetch("/data/team.json")
      .then((response) => response.json())
      .then((data) => {
        const foundMember = data.team.find((m) => m.id === parseInt(id));
        if (foundMember) {
          setMember(foundMember);
        } else {
          setError("Team member not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching team member:", error);
        setError("Error loading team member");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    const breadcrumbs = [
      { label: "Home", link: "/" },
      { label: "Team", link: "/team" },
      { label: "Loading..." },
    ];
    return (
      <div className="">
        <HeaderOne />
        <Breadcrumb title="Loading..." breadcrumbs={breadcrumbs} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <p>Loading team member details...</p>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    );
  }

  if (error || !member) {
    const breadcrumbs = [
      { label: "Home", link: "/" },
      { label: "Team", link: "/team" },
      { label: "Member Not Found" },
    ];
    return (
      <div className="">
        <HeaderOne />
        <Breadcrumb title="Member Not Found" breadcrumbs={breadcrumbs} />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center py-5">
              <h2>Team Member Not Found</h2>
              <p>The team member you're looking for doesn't exist.</p>
              <Link to="/" className="rts-btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
        <FooterOne />
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Team", link: "/team" },
    { label: member.title },
  ];

  return (
    <div className="">
      <HeaderOne />

      <Breadcrumb title={member.title} breadcrumbs={breadcrumbs} />

      {/* rts-team details area Start*/}
      <div className="rts-team-details rts-section-gap">
        <div className="container" style={{
          paddingLeft: '15px',
          paddingRight: '15px'
        }}>
          <div className="row g-5">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="details-thumb" style={{
                display: 'flex',
                justifyContent: isMediumScreen ? 'center' : 'flex-start'
              }}>
                <img
                  src={member.img}
                  alt={member.title}
                  style={{
                    borderRadius: '20px',
                    width: isMediumScreen ? '70%' : '100%',
                    height: 'auto',
                    maxWidth: isMediumScreen ? '400px' : 'none'
                  }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 pl--35 pl_sm--15">
              <div className="details-right-inner">
                <div className="title-area" style={{display: 'grid', gap: '10px 0'}}>
                  <span className="pre-title">{member.designation}</span>
                  <h3 className="title">{member.title}</h3>
                </div>
                <p className="disc">
                  {member.description}
                </p>
                <div className="team-details-support-wrapper">
                  <i className="far fa-envelope" />
                  <div className="support-innner">
                    <span>Email Address</span>
                    <Link to={`mailto:${member.email}`}>
                      <h5 className="title">{member.email}</h5>
                    </Link>
                  </div>
                </div>
                <div className="team-details-support-wrapper">
                  <i className="fal fa-phone-volume" />
                  <div className="support-innner">
                    <span>Phone Number</span>
                    <Link to={`tel:${member.phone}`}>
                      <h5 className="title">{member.phone}</h5>
                    </Link>
                  </div>
                </div>
                <div className="team-details-support-wrapper">
                  <i className="far fa-map-marker-alt" style={{flexShrink: '0'}} />
                  <div className="support-innner">
                    <span>Office Location</span>
                    <Link to={"#"}>
                      <h5 className="title">{member.address}</h5>
                    </Link>
                  </div>
                </div>
                <Link to={`mailto:${member.email}`} className="rts-btn btn-primary">
                  {" "}
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* rts-team details area ENd */}

      {/* rts skills area start */}
      <div className="rts-team-skill-area rts-section-gapBottom">
        <div className="container" style={{
          paddingLeft: '15px',
          paddingRight: '15px'
        }}>
          <div className="row g-5">
            <div className="col-lg-6">
              {/* single skill area */}
              <div className="single-about-skill-inner">
                <h5 className="title">Professional Skills</h5>
                <p className="disc">
                  {member.bio}
                </p>
                <div className="rts-progress-one-wrapper">
                  {member.skills.map((skill, index) => (
                    <div key={index} className="single-progress">
                      <div className="progress-top">
                        <p className="progress-title">{skill.title}</p>
                        <span className="persectage">{skill.value}%</span>
                      </div>
                      <div className={`meter ${index === 0 ? 'cadetblue' : index === 1 ? '' : 'orange'}`}>
                        <span data-progress={skill.value} style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* single skill area end*/}
            </div>
            <div className="col-lg-6">
              {/* single skill area */}
              <div className="single-about-skill-inner pl--30 pl_md--0 pl_sm--0">
                <h5 className="title">Key Features & Expertise</h5>
                <p className="disc">
                  Our team member brings specialized expertise and proven experience in various areas of financial services and business management.
                </p>
                <div className="features-list">
                  {member.features.map((feature, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '15px',
                      padding: '10px 0'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        backgroundColor: '#0052CC',
                        borderRadius: '50%',
                        marginTop: '8px',
                        marginRight: '15px',
                        flexShrink: 0
                      }}></div>
                      <div>
                        <h6 style={{
                          fontSize: '16px',
                          fontWeight: '600',
                          color: '#0f172a',
                          marginBottom: '5px',
                          lineHeight: '1.4'
                        }}>{feature}</h6>
                        <p style={{
                          fontSize: '14px',
                          color: '#64748b',
                          margin: '0',
                          lineHeight: '1.5'
                        }}>
                          Specialized Expertise <span style={{color: '#0052CC'}}>(Ezylife Financial Services)</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* single skill area end*/}
            </div>
          </div>
        </div>
      </div>

      <FooterOne />
    </div>
  );
}

export default TeamDetails;
