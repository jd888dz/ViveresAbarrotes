import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Store } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalog');
    catalogSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contenido principal */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <Store className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Víveres y Abarrotes S.A.
              </h1>
            </div>

            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Tu despensa completa{' '}
              <span className="text-green-600">a un click</span>
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Productos frescos y de calidad directo a tu hogar. 
              <strong className="text-green-700"> Pago contra entrega</strong> y 
              <strong className="text-green-700"> envíos en 24-48h</strong>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={scrollToCatalog}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center gap-2 justify-center"
              >
                <ShoppingCart className="h-5 w-5" />
                Ver Catálogo
              </button>
              
              <button
                onClick={() => {
                  const offersSection = document.getElementById('offers');
                  offersSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Ofertas de la Semana
              </button>
            </motion.div>
          </motion.div>

          {/* Imagen destacada */}
          <motion.div
            className="flex-1 max-w-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            <div className="relative">
              <motion.img
                src="/ofertas/Hero.png"
                alt="Productos frescos de calidad"
                className="rounded-lg shadow-2xl w-full h-auto"
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Badge flotante */}
              <motion.div
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ¡Ofertas!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;