import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>('1');

  const faqs: FAQItem[] = [
    {
      id: '2',
      question: '¿Cuál es el tiempo de entrega?',
      answer: 'Nuestros envíos se realizan en un plazo de 24 a 48 horas hábiles, dependiendo de tu ubicación y la disponibilidad de los productos. Para pedidos urgentes, consulta por WhatsApp sobre nuestro servicio express.'
    },
    {
      id: '3',
      question: '¿Cuánto cuesta el envío?',
      answer: 'El costo del envío varía según tu ubicación. Te informaremos el valor exacto cuando confirmes tu pedido por WhatsApp. Este costo se paga junto con los productos al momento de la entrega.'
    },
    {
      id: '4',
      question: '¿Qué productos manejan?',
      answer: 'Manejamos una amplia variedad de víveres frescos, abarrotes, productos de despensa, lácteos, frutas, verduras, carnes, y productos de limpieza. Si no encuentras algo específico en nuestro catálogo, pregúntanos por WhatsApp.'
    },
    {
      id: '5',
      question: '¿Cómo garantizan la frescura de los productos?',
      answer: 'Todos nuestros productos frescos se mantienen en condiciones óptimas de refrigeración y se seleccionan cuidadosamente antes del envío. Ofrecemos garantía de frescura: si algún producto no cumple con tus expectativas, lo reponemos sin costo.'
    },
    {
      id: '6',
      question: '¿Puedo cancelar o modificar mi pedido?',
      answer: 'Puedes cancelar o modificar tu pedido contactándonos por WhatsApp antes de que sea despachado. Una vez que el producto está en camino, ya no es posible hacer cambios.'
    },
    {
      id: '7',
      question: '¿Atienden todo el día?',
      answer: 'Nuestro horario de atención es de lunes a sábado de 7:00 AM a 8:00 PM, y domingos de 8:00 AM a 6:00 PM. Fuera de estos horarios puedes escribirnos y te responderemos en el siguiente horario de atención.'
    },
    {
      id: '8',
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos efectivo, tarjetas de débito y crédito al momento de la entrega. El pago se realiza directamente con nuestro repartidor cuando recibas tu pedido.'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicio
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItem === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItem === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-gray-100">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-gray-600 mb-4">
              Nuestro equipo está listo para ayudarte con cualquier duda específica
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;