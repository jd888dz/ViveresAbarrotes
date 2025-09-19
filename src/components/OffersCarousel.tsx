import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Timer } from 'lucide-react';
import { Offer, Product } from '../types';
import { useCountdown } from '../hooks/useCountdown';
import { generateProductMessage, generateWhatsAppUrl } from '../config/whatsapp';
import productsData from '../data/products.json';

interface OfferCardProps {
  offer: Offer;
}

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(offer.endDate);

  const handleBuyNow = () => {
    const message = generateProductMessage(
      offer.product.name, 
      offer.product.sku, 
      offer.product.price
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
          src={offer.product.image}
          alt={offer.product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{offer.discount}%
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {offer.product.name}
        </h3>
        
        <p className="text-gray-600 mb-4">{offer.description}</p>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-2xl font-bold text-green-600">
            ${offer.product.price.toLocaleString('es-CO')}
          </span>
          {offer.product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${offer.product.originalPrice.toLocaleString('es-CO')}
            </span>
          )}
        </div>

        {!isExpired && (
          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">
                ¡Oferta por tiempo limitado!
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
  const products = productsData as Product[];
  
  // Crear ofertas basadas en productos con descuento
  const offers: Offer[] = products
    .filter(product => product.isOffer && product.originalPrice)
    .map((product, index) => ({
      id: `offer-${product.id}`,
      product,
      discount: Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100),
      endDate: new Date(Date.now() + (3 + index) * 24 * 60 * 60 * 1000).toISOString(), // 3-6 días desde hoy
      description: `¡Aprovecha esta increíble oferta especial por tiempo limitado!`
    }));

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
              Ofertas de la Semana
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¡No te pierdas estas increíbles ofertas especiales! Precios únicos por tiempo limitado
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
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ scrollSnapAlign: 'start' }}
            >
              <OfferCard offer={offer} />
            </motion.div>
          ))}
        </motion.div>

        {/* Información adicional */}
        <motion.div
          className="text-center mt-8 bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-2">
            <strong>¡Recuerda!</strong> Pago contra entrega • Se debe cancelar el valor del envío • Envíos en 24-48h
          </p>
          <p className="text-sm text-gray-500">
            Las ofertas están sujetas a disponibilidad de stock
          </p>
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