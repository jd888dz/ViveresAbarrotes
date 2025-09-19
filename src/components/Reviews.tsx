import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { Review } from '../types';
import Modal from './ui/Modal';
import reviewsData from '../data/reviews.json';

const Reviews: React.FC = () => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const reviews = reviewsData as Review[];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // En una aplicación real, aquí enviarías la reseña a una API
    alert('¡Gracias por tu reseña! Tu opinión es muy valiosa para nosotros.');
    setShowReviewModal(false);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'sm') => {
    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${sizeClasses[size]} ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <>
      <section className="py-16 lg:py-20 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa
            </p>
          </motion.div>

          {/* Estadísticas de reseñas */}
          <motion.div
            className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {renderStars(averageRating, 'lg')}
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">
              {averageRating.toFixed(1)} / 5.0
            </h3>
            <p className="text-gray-600">
              Basado en {reviews.length} reseñas de clientes verificados
            </p>
            
            <button
              onClick={() => setShowReviewModal(true)}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
            >
              <MessageSquare className="h-5 w-5" />
              Dejar una Reseña
            </button>
          </motion.div>

          {/* Grid de reseñas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      {renderStars(review.rating)}
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  "{review.comment}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para nueva reseña */}
      <Modal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        title="Dejar una Reseña"
      >
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tu nombre
            </label>
            <input
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Calificación
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating })}
                  className="p-1"
                >
                  <Star
                    className={`h-8 w-8 ${
                      rating <= newReview.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    } hover:text-yellow-400 transition-colors`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tu comentario
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              placeholder="Comparte tu experiencia con nosotros..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          >
            Enviar Reseña
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Reviews;