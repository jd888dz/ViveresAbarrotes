import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl, generateContactMessage } from '../config/whatsapp';

const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const message = generateContactMessage(
      '',
      '',
      '¡Hola! Me gustaría obtener más información sobre sus productos. ¿Podrían ayudarme?'
    );
    const whatsappUrl = generateWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-colors"
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.button>
  );
};

export default FloatingWhatsApp;