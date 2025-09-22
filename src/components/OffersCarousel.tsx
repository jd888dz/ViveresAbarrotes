import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Timer } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { generateProductMessage, generateWhatsAppUrl } from '../config/whatsapp';
import mercadosData from '../data/mercados.json';

interface Mercado {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  category: string;
  rating: number;
  stock: number;
  isOffer: boolean;
  shippingIncluded: boolean;
  condition: string;
  consumptionDeadline: string;
  description: string;
}

interface OfferCardProps {
  mercado: Mercado;
}

const OfferCard: React.FC<OfferCardProps> = ({ mercado }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(mercado.consumptionDeadline);

  const handleBuyNow = () => {
    const message = generateProductMessage(
      mercado.name,
      mercado.sku,
      mercado.price
    );
    const whatsappUrl = generateWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden min-w-[300px] max-w-[350px] mx-2"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <img
          src={mercado.image}
          alt={mercado.name}
          className="w-full h-48 object-cover"
        />
        {mercado.isOffer && (
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              OFERTA
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {mercado.name}
        </h3>
        
        <p className="text-gray-600 mb-4 text-sm">{mercado.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-bold text-green-600">
            ${mercado.price.toLocaleString('es-CO')}
          </span>
        </div>

        {!isExpired && (
          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">
                Consumir antes del {new Date(mercado.consumptionDeadline).toLocaleDateString('es-CO')}
              </span>
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              <div>
                <div className="bg-orange-600 text-white rounded px-2 py-1 text-lg font-bold">
                  {days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-orange-800 mt-1">Días</div>
              </div>
              <div>
                <div className="bg-orange-600 text-white rounded px-2 py-1 text-lg font-bold">
                  {hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-orange-800 mt-1">Hrs</div>
              </div>
              <div>
                <div className="bg-orange-600 text-white rounded px-2 py-1 text-lg font-bold">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-orange-800 mt-1">Min</div>
              </div>
              <div>
                <div className="bg-orange-600 text-white rounded px-2 py-1 text-lg font-bold">
                  {seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs text-orange-800 mt-1">Seg</div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleBuyNow}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
          disabled={isExpired}
        >
          {isExpired ? 'Oferta Expirada' : 'Comprar Ahora'}
        </button>
      </div>
    </motion.div>
  );
};

const OffersCarousel: React.FC = () => {
  const mercados = mercadosData as Mercado[];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-red-50 to-orange-50" id="offers">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-red-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Mercados en Oferta
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¡Aprovecha estos mercados completos con envío incluido!
          </p>
        </motion.div>

        {/* Carrusel horizontal */}
        <motion.div
          className="flex overflow-x-auto pb-6 gap-4 scrollbar-hide"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {mercados.map((mercado, index) => (
            <motion.div
              key={mercado.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ scrollSnapAlign: 'start' }}
            >
              <OfferCard mercado={mercado} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default OffersCarousel;
