import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, Loader2, Github } from 'lucide-react';
import { api, api_key, api_verify_mail } from '../utils/utils';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const [information, setInformation] = useState({
    to: 'brunoharison18@gmail.com',
    subject: 'Information de visiteur',
    html: ''
  });


  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<null | {
    valid: boolean;
    details?: any;
    error?: string;
    loading?: any;
  }>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Vérification différée de l'email
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.email && formData.email.includes('@')) {
        verifyEmail(formData.email);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.email]);

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    setInformation(prev => ({
      ...prev,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 580px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 6px;">
          <!-- Header -->
          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 22px; font-weight: 600; margin-bottom: 6px; color: #2c5282;">
              Nouveau message de ${formData.name || 'un visiteur'}
            </h1>
            <div style="height: 2px; width: 50px; background-color: #2c5282;"></div>
          </div>
  
          <!-- Contact Section -->
          <div style="margin-bottom: 20px; padding: 16px; background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 4px;">
            <div style="display: flex; align-items: center; margin-bottom: 12px;">
              <div style="width:24px;height:24px;background: #ebf8ff;border-radius:50%;margin-right:10px;color: #3182ce;font:bold 14px/24px Arial;text-align:center;padding-left:1px">i</div>
              <p style="font-weight: 500; color: #2d3748; margin: 0; font-size: 15px;">Détails du contact</p>
            </div>
            
            <div style="display: grid; gap: 10px; padding-left: 34px;">
              ${formData.name ? `
                <div>
                  <span style="color: #718096; font-weight: 500; font-size: 13px; display: block;">Nom</span>
                  <span style="color: #1a202c; font-size: 14px;">${formData.name}</span>
                </div>
              ` : ''}
              
              ${formData.email ? `
                <div>
                  <span style="color: #718096; font-weight: 500; font-size: 13px; display: block;">Email</span>
                  <span style="color: #1a202c; font-size: 14px; word-break: break-all;">${formData.email}</span>
                </div>
              ` : ''}
              
              ${formData.subject ? `
                <div>
                  <span style="color: #718096; font-weight: 500; font-size: 13px; display: block;">Sujet</span>
                  <span style="color: #1a202c; font-size: 14px;">${formData.subject}</span>
                </div>
              ` : ''}
            </div>
          </div>
  
          <!-- Message Section -->
          <div style="margin-bottom: 20px; padding: 16px; background-color: #f7fafc; border: 1px solid #e2e8f0; border-radius: 4px;">
            <div style="display: flex; align-items: center; margin-bottom: 12px;">            
              <div style="width: 24px; height: 24px; background-color: #faf5ff; border-radius: 50%;margin-right:10px;color: #805ad5;font:bold 14px/24px Arial;text-align:center;padding-left:1px">M</div>
              <p style="font-weight: 500; color: #2d3748; margin: 0; font-size: 15px;">Message</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 12px; border: 1px solid #edf2f7; white-space: pre-line; color: #1a202c; font-size: 14px; line-height: 1.5;">
              ${formData.message || '<span style="color: #a0aec0;">Aucun message fourni</span>'}
            </div>
          </div>
  
          <!-- Footer -->
          <div style="text-align: center; font-size: 12px; color: #a0aec0; margin-top: 24px; padding-top: 16px; border-top: 1px solid #edf2f7;">
            <p>Message envoyé depuis le formulaire de contact</p>
            <p style="margin-top: 6px;">${formattedDate}</p>
          </div>
        </div>
      `
    }));
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Validation basique côté client
    if (name === 'email' && e.target.value.trim() == "") {
      setEmailStatus(null);
    }
    if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({ ...prev, email: 'Format d\'email invalide' }));
      setEmailStatus(null);
    } else if (name === 'email') {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  // Vérification Hunter.io
  const verifyEmail = async (email: string) => {
    setIsVerifying(true);
    try {
      const response = await api_verify_mail.get('/email-verifier', {
        params: {
          email,
          api_key: api_key
        }
      });

      setEmailStatus({
        valid: response.data.data.status === 'valid',
        details: response.data.data
      });
    } catch (error) {
      console.log(error);
      setEmailStatus({
        valid: false,
        error: "Échec de la vérification"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation finale
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Le nom est requis';
    if (!formData.email) {
      newErrors.email = 'L\'email est requis';
    } else if (emailStatus?.valid === false) {
      newErrors.email = 'Veuillez fournir un email valide';
    }
    if (!formData.subject) newErrors.subject = 'Le sujet est requis';
    if (!formData.message) newErrors.message = 'Le message est requis';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      await api.post('/send-email', information);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erreur:', error);
    }

    // Réinitialisation
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setEmailStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'brunoharison18@gmail.com',
      href: 'mailto:brunoharison18@gmail.com',
      color: 'bg-red-500',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+261 33 89 871 90',
      href: '',
      color: 'bg-green-500',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Antanety Nord, Antsirabe II',
      href: '#',
      color: 'bg-blue-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Setraniaina Bruno Razafimiharison',
      href: 'https://www.linkedin.com/in/setraniaina-bruno-razafimiharison-674730347/',
      color: 'bg-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'setraniainabruno',
      href: 'https://github.com/setraniainabruno',
      color: 'bg-gray-800',
      iconColor: 'text-black',
    },
  ];

  return (
    <section id="contact" className={`py-20 ${isDarkMode
      ? 'bg-gradient-to-br from-gray-900 to-gray-800'
      : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Me Contacter
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Discutons de vos projets et opportunités de collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                Informations de Contact
              </h3>
              <p className={`mb-8 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                N'hésitez pas à me contacter pour discuter de projets, d'opportunités professionnelles
                ou simplement pour échanger sur les technologies qui nous passionnent.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target='_blank'
                  className={`flex items-center p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                    }`}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>{info.label}</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-2">Prêt à collaborer ?</h4>
              <p className="text-blue-100">
                Je suis ouvert aux opportunités de stage, projets freelance,
                et collaborations sur des projets innovants.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Envoyez-moi un message
            </h3>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-green-800">Message envoyé avec succès !</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:border-transparent transition-all duration-200 ${isDarkMode
                      ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                      : 'border-gray-300 bg-white text-gray-900'
                      }`}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Email
                  </label>
                  <div className={`grid grid-cols-[1fr_auto] gap-2 items-center w-full px-4 py-3 border rounded-lg focus-within:ring-2 focus-within:outline-none focus-within:border-transparent transition-all duration-200 ${isDarkMode
                    ? `border-gray-600 bg-gray-700 ${errors.email
                      ? '!border-red-500'
                      : emailStatus?.valid === true
                        ? '!border-green-500'
                        : emailStatus?.valid === false
                          ? '!border-red-600'
                          : ''
                    }`
                    : `border-gray-300 bg-white ${errors.email
                      ? '!border-red-500'
                      : emailStatus?.valid === true
                        ? '!border-green-500'
                        : emailStatus?.valid === false
                          ? '!border-red-600'
                          : ''
                    }`
                    }`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full bg-transparent focus:outline-none ${isDarkMode ? 'text-white placeholder-gray-400' : 'text-gray-900'
                        }`}
                      placeholder="votre@email.com"
                    />
                    {emailStatus?.loading && (
                      <Loader2 className="w-5 h-5 animate-spin text-blue-500" />

                    )}
                    {emailStatus?.valid === true && (
                      <CheckCircle className="w-5 h-5  mt-0.5 text-green-500" />

                    )}

                    {emailStatus?.valid === false && !errors.email && (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-600" />

                    )}
                  </div>

                  {errors.email && (
                    <p className="mt-1 ml-2 text-[0.7rem] text-red-600">{errors.email}</p>
                  )}


                </div>

              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:border-transparent transition-all duration-200 ${isDarkMode
                    ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900'
                    }`}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:outline-none focus:border-transparent transition-all duration-200 resize-none ${isDarkMode
                    ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900'
                    }`}
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;