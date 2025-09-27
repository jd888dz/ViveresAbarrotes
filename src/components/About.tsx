import React from "react";
import { motion } from "framer-motion";
import { Shield, Truck, Clock, Star } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Calidad Garantizada",
      description:
        "Productos frescos y de primera calidad seleccionados cuidadosamente",
    },
    {
      icon: Truck,
      title: "Envíos Rápidos",
      description:
        "Entregas en 24-48 horas con el mejor cuidado de tus productos",
    },
    {
      icon: Clock,
      title: "Atención Personalizada",
      description: "Soporte dedicado y asesoría para resolver todas tus dudas",
    },
    {
      icon: Star,
      title: "Mejores Precios",
      description:
        "Precios competitivos y ofertas especiales para nuestros clientes",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            ¿Por qué elegir Víveres y Abarrotes S.A.?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa familiar dedicada a brindar productos de primera
            calidad para tu hogar. Con más de 10 años de experiencia, nos
            especializamos en víveres frescos, abarrotes y productos básicos
            para la despensa familiar. Nuestro compromiso es ofrecerte la mejor
            experiencia de compra con
            <strong className="text-green-600"> productos frescos</strong>,
            <strong className="text-green-600"> precios justos</strong> y
            <strong className="text-green-600"> servicio personalizado</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <value.icon className="h-8 w-8 text-green-600" />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Información adicional destacada */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-2xl font-bold text-green-600 mb-2">24-48h</h4>
              <p className="text-gray-700">Tiempo de entrega</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-2">100%</h4>
              <p className="text-gray-700">Atención Personalizada</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-orange-600 mb-2">+500</h4>
              <p className="text-gray-700">Clientes satisfechos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
