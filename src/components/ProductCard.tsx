import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { generateProductMessage, generateWhatsAppUrl } from '../config/whatsapp';
import Toast from './ui/Toast';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [showToast, setShowToast] = useState(false);
  
  const handleBuyNow = () => {
    const message = generateProductMessage(product.name, product.sku, product.price);
    const whatsappUrl = generateWhatsAppUrl(message);
    
    setShowToast(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          
          {/* Etiquetas */}
          <div className="absolute top-2 left-2 flex gap-2">
            {product.isOffer && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Oferta
              </span>
            )}
            {product.isNew && (
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                Nuevo
              </span>
            )}
          </div>

          {/* Stock bajo */}
          {product.stock < 10 && (
            <div className="absolute top-2 right-2">
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                ¡Últimos!
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-500 mb-2">SKU: {product.sku}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500">({product.rating})</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-green-600">
              ${product.price.toLocaleString('es-CO')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toLocaleString('es-CO')}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={handleBuyNow}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Comprar por WhatsApp
            </button>
            
           
          </div>

          <p className="text-xs text-gray-500 mt-2 text-center">
            Stock disponible: {product.stock} unidades
          </p>
        </div>
      </motion.div>

      <Toast
        message="Abriendo WhatsApp..."
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="info"
      />
    </>
  );
};

export default ProductCard;