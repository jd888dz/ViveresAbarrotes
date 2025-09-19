import React from 'react';
import { motion } from 'framer-motion';
import { Store, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-green-400" />
              <h3 className="text-xl font-bold">Víveres y Abarrotes S.A.</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tu tienda de confianza para productos frescos y de calidad. 
              Más de 10 años sirviendo a familias con los mejores precios 
              y servicio personalizado.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">info@viveresabarrotes.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Calle 123 #45-67<br />
                  Barrio Centro<br />
                  Bogotá, Colombia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-400" />
              Horarios de Atención
            </h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Lunes - Sábado:</span>
                <span>7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Domingos:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Festivos:</span>
                <span>8:00 AM - 4:00 PM</span>
              </div>
            </div>
            <p className="text-sm text-green-400 mt-3">
              ¡Entregas todos los días!
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {[
                { name: 'Sobre Nosotros', href: '#about' },
                { name: 'Catálogo', href: '#catalog' },
                { name: 'Ofertas', href: '#offers' },
                { name: 'Reseñas', href: '#reviews' },
                { name: 'Preguntas Frecuentes', href: '#faq' },
                { name: 'Contacto', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-green-400 transition-colors"
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <hr className="my-8 border-gray-700" />

        {/* Información legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Víveres y Abarrotes S.A. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              NIT: 900.123.456-7 | Registro Mercantil: 12345
            </p>
          </motion.div>
          
          <motion.div
            className="flex gap-4 text-xs text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:text-green-400 transition-colors">
              Términos y Condiciones
            </a>
            <span>|</span>
            <a href="#" className="hover:text-green-400 transition-colors">
              Política de Privacidad
            </a>
          </motion.div>
        </div>

        {/* Mapa embebido (opcional) */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-center">
            Encuéntranos
          </h4>
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              Aquí puedes embebder Google Maps<br />
              <span className="text-sm">
                Calle 123 #45-67, Barrio Centro, Bogotá
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;