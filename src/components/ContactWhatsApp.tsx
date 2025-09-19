import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, User } from 'lucide-react';
import { ContactForm } from '../types';
import { generateContactMessage, generateWhatsAppUrl } from '../config/whatsapp';
import Toast from './ui/Toast';

const ContactWhatsApp: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    message: '',
    product: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = generateContactMessage(
      formData.name,
      formData.phone,
      formData.message,
      formData.product
    );
    
    const whatsappUrl = generateWhatsAppUrl(message);
    
    setShowToast(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      // Limpiar formulario después de enviar
      setFormData({ name: '', phone: '', message: '', product: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-blue-50" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                ¿Necesitas Ayuda?
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contáctanos directamente por WhatsApp. Te responderemos de inmediato para ayudarte con tu pedido
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Tu número de teléfono"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Producto de interés (opcional)
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="¿Hay algún producto específico que te interese?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Escribe tu consulta o pedido aquí..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageCircle className="h-6 w-6" />
                  Enviar por WhatsApp
                </motion.button>
              </form>

              {/* Información adicional */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Respuesta Rápida</h4>
                    <p className="text-sm text-gray-600">Contestamos en menos de 5 minutos</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Atención Personalizada</h4>
                    <p className="text-sm text-gray-600">Asesoría directa y personalizada</p>
                  </div>

                  <div className="flex flex-col items-center p-4 bg-orange-50 rounded-lg">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                      <User className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-1">Servicio Confiable</h4>
                    <p className="text-sm text-gray-600">Más de 10 años de experiencia</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Toast
        message="Abriendo WhatsApp..."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="info"
      />
    </>
  );
};

export default ContactWhatsApp;