import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send('service_saksham', 'template_7jr5j38', formData, 't1vCGvRbLhcdOuz3O')
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      })
      .catch((err) => {
        console.error('Email error:', err);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-dark-900 overflow-hidden">
      {/* Background Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-white/5 to-black/20 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10" data-aos="fade-right">
            <div className="text-gray-300 leading-relaxed text-lg">
              I'm always excited to work on new projects and collaborate with amazing people.
              Whether you need a complete brand overhaul or just want to chat about design,
              I'd love to hear from you.
            </div>

            {[{
              icon: <Mail className="text-primary" size={22} />,
              label: "Email",
              value: "sakshamgoswami16@gmail.com"
            }, {
              icon: <Phone className="text-primary" size={22} />,
              label: "Phone",
              value: "+91 6232575896"
            }, {
              icon: <MapPin className="text-primary" size={22} />,
              label: "Location",
              value: "Gwalior, India"
            }].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center space-x-5">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center shadow-md glow-effect">
                  {icon}
                </div>
                <div>
                  <div className="font-semibold text-white">{label}</div>
                  <div className="text-gray-400">{value}</div>
                </div>
              </div>
            ))}

            <div className="glass-effect border border-primary/30 p-6 rounded-2xl shadow-inner">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Currently available for projects</span>
              </div>
              <p className="text-sm text-gray-400">
                Let’s discuss your goals, timeline and style — I deliver pixel-perfect design that communicates and converts.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-10 rounded-3xl shadow-xl border border-white/10" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['name', 'email'].map((field) => (
                  <input
                    key={field}
                    type={field === 'email' ? 'email' : 'text'}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={field === 'name' ? 'Your Name' : 'Your Email'}
                    className="w-full p-4 bg-dark-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                ))}
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Subject"
                className="w-full p-4 bg-dark-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary transition-all duration-300"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full p-4 bg-dark-800/60 border border-gray-600 rounded-xl text-white placeholder-gray-400 resize-none focus:ring-2 focus:ring-primary transition-all duration-300"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-primary to-red-500 hover:to-red-400 text-white shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
