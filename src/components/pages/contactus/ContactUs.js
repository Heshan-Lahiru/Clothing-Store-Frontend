import React, { useState } from 'react';
import Nav from '../../navigationbar/nav'
import Footer from '../../footer/Footer'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Nav />
    
      <div 
  className="min-vh-100 py-5" 
  style={{ 
    backgroundImage: 'url("https://findit-resources.s3.amazonaws.com/forums/1713254360186.jpeg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>

      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead text-muted">We'd love to hear from you. Send us a message!</p>
        </div>

        {/* Contact Info Cards */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <i className="bi bi-telephone-fill fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Phone</h3>
                <p className="text-muted mb-0">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <i className="bi bi-envelope-fill fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Email</h3>
                <p className="text-muted mb-0">contact@example.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <i className="bi bi-geo-alt-fill fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Address</h3>
                <p className="text-muted mb-0">123 Business Ave, Suite 100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center py-5">
  <div className="col-lg-8">
    <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
      {/* Form Header with Gradient */}
      <div className="text-center p-5 bg-primary bg-gradient text-white mb-3">
        <h2 className="display-6 fw-bold mb-3">Get In Touch</h2>
        <p className="lead mb-0 opacity-75">We'd love to hear from you!</p>
      </div>

      <div className="card-body p-5">
        {/* Success Alert */}
        {showSuccess && (
          <div className="alert alert-success alert-dismissible fade show d-flex align-items-center" role="alert">
            <i className="bi bi-check-circle-fill me-2 fs-4"></i>
            <div>
              Thank you for your message! We'll get back to you soon.
              <button type="button" className="btn-close" onClick={() => setShowSuccess(false)}></button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row g-4">
            {/* Name Field */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
                <label htmlFor="name" className="text-muted">
                  <i className="bi bi-person me-2"></i>Your Name
                </label>
              </div>
            </div>

            {/* Email Field */}
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control border-0 border-bottom rounded-0"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
                <label htmlFor="email" className="text-muted">
                  <i className="bi bi-envelope me-2"></i>Your Email
                </label>
              </div>
            </div>

            {/* Subject Field */}
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 border-bottom rounded-0"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
                <label htmlFor="subject" className="text-muted">
                  <i className="bi bi-chat-left-dots me-2"></i>Subject
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control border-0 border-bottom rounded-0"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  style={{ height: '120px' }}
                  required
                ></textarea>
                <label htmlFor="message" className="text-muted">
                  <i className="bi bi-pencil-square me-2"></i>Your Message
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-12 text-center mt-5">
              <button 
                type="submit" 
                className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm hover-shadow-lg transition-all"
                style={{
                  background: 'linear-gradient(45deg, #007bff, #00bcd4)',
                  border: 'none'
                }}
              >
                <i className="bi bi-send-fill me-2"></i>
                Send Message
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Decorative Element */}
        <div className="text-center mt-5 pt-4 border-top">
          <div className="row justify-content-center">
            <div className="col-auto">
              <i className="bi bi-telephone-fill text-primary fs-4 mx-3"></i>
            </div>
            <div className="col-auto">
              <i className="bi bi-envelope-fill text-primary fs-4 mx-3"></i>
            </div>
            <div className="col-auto">
              <i className="bi bi-geo-alt-fill text-primary fs-4 mx-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Map */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="card border-0 shadow">
              <div className="card-body p-0">
              <iframe
                      title="Gampaha Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.741690906052!2d80.00908791513984!3d7.091694694882284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2efb6c49d1e4b%3A0x6d803bd7d42ef9c5!2sGampaha%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1697647154687!5m2!1sen!2slk"
                      className="w-100"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ContactUs;