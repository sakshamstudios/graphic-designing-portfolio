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
    <section id="contact" className="py-20 px-6 bg-dark-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Let's Work Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you need a complete brand overhaul or just want to chat about design,
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                  <Mail className="text-neon-purple" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-gray-400">sakshamgoswami16@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                  <Phone className="text-neon-cyan" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-gray-400">+91 6232575896</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center">
                  <MapPin className="text-neon-pink" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-gray-400">Gwalior, India</div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="font-semibold text-white">Available for Projects</span>
              </div>
              <p className="text-sm text-gray-400">
                Currently accepting new projects for 2025. Let's discuss your timeline and requirements.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-purple/10 to-transparent rounded-full"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full p-4 bg-dark-700/50 border border-gray-600 rounded-xl text-white"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full p-4 bg-dark-700/50 border border-gray-600 rounded-xl text-white"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Subject"
                  className="w-full p-4 bg-dark-700/50 border border-gray-600 rounded-xl text-white"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full p-4 bg-dark-700/50 border border-gray-600 rounded-xl text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full p-4 rounded-xl font-semibold flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-neon-green text-white'
                    : 'bg-gradient-to-r from-neon-purple to-neon-cyan text-white'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={20} />
                    <span>Message Sent!</span>
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
