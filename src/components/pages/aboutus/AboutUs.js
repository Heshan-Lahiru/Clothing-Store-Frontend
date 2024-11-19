import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../navigationbar/nav'
import Footer from '../../footer/Footer'

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Lahiru Heshan",
      position: "Owner",
      description: "Fashion industry veteran with 10+ years of experience. Passionate about bringing sustainable fashion to everyone.",
      image: "https://media.istockphoto.com/id/1088909778/photo/portrait-of-handsome-smiling-young-man-studio-shot.jpg?s=612x612&w=0&k=20&c=989h9CKzvxQ7-hXUnl7sNeIjJZYkiys7re7083JT4Es="
    },
    {
      name: "Nilanka Perera",
      position: "Manager",
      description: "Expert in retail management with a keen eye for fashion trends and customer service excellence.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKH4ezp2wULtl_BXpCI209OU8Rd5HaTR_Uw&s"
    },
    {
      name: "Mishal Yeshan",
      position: "Supervisor",
      description: "Dedicated team leader ensuring smooth operations and maintaining high quality standards.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhiM7ZKtKDnV6DiQ_axFODq7luNQsI4uaziQ&ss"
    }
  ];

 
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate__animated');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate__fadeIn');
          element.style.opacity = '1';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
  <>
  <Nav />
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div 
  className="animate__animated animate__fadeIn position-relative"
  style={{
    backgroundImage: "url('https://hashtagclothing.lk/cdn/shop/files/Untitled_design_16.png?v=1711187340&width=3840')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    minHeight: '500px'
  }}>
  <div 
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }}
  ></div>

  {/* Content */}
  <div className="container h-100 position-relative">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center text-white">
        <h1 className="display-2 fw-bold mb-4 animate__animated animate__fadeInDown">
          About Clothify
        </h1>
        <p className="lead fs-3 mb-4 animate__animated animate__fadeInUp animate__delay-1s">
          Your Ultimate Fashion Destination
        </p>
        <button className="btn btn-outline-light btn-lg px-5 py-3 animate__animated animate__fadeInUp animate__delay-2s">
          Explore Our Collection
        </button>
      </div>
    </div>
  </div>
</div>

      {/* Our Story Section */}
      <div className="container mb-5 animate__animated" style={{ opacity: 0 }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4 mb-4">Our Story</h2>
            <p className="lead">
              Founded in 2020, Clothify has emerged as a leading fashion destination,
              offering curated collections that blend style with sustainability.
              Our journey began with a simple vision: to make high-quality fashion
              accessible to everyone while maintaining our commitment to environmental
              responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mb-5">
        <h2 className="display-4 text-center mb-5 animate__animated" style={{ opacity: 0 }}>
          Meet Our Team
        </h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow animate__animated" style={{ opacity: 0 }}>
                <img 
                  src={member.image} 
                  className="card-img-top" 
                  alt={member.name}
                />
                <div className="card-body text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <h5 className="text-primary mb-3">{member.position}</h5>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <h2 className="display-4 text-center mb-5 animate__animated" style={{ opacity: 0 }}>
            Our Values
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 bg-transparent animate__animated" style={{ opacity: 0 }}>
                <div className="card-body text-center">
                  <i className="bi bi-star-fill text-primary display-4 mb-3"></i>
                  <h3>Quality</h3>
                  <p>We ensure the highest quality in every piece we offer.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-transparent animate__animated" style={{ opacity: 0 }}>
                <div className="card-body text-center">
                  <i className="bi bi-heart-fill text-primary display-4 mb-3"></i>
                  <h3>Style</h3>
                  <p>Keeping up with the latest trends while maintaining timeless elegance.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 bg-transparent animate__animated" style={{ opacity: 0 }}>
                <div className="card-body text-center">
                  <i className="bi bi-globe text-primary display-4 mb-3"></i>
                  <h3>Sustainability</h3>
                  <p>Committed to environmental responsibility in fashion.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5 animate__animated" style={{ opacity: 0 }}>
        <div className="text-center">
          <h2 className="display-4 mb-4">Visit Us</h2>
          <p className="lead">
            Come explore our collection at our flagship store
          </p>
          <button className="btn btn-primary btn-lg mt-3">Contact Us</button>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;