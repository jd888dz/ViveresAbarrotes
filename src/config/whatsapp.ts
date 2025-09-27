// Configuración de WhatsApp
// ⚠️ IMPORTANTE: Cambia este número por el número real de WhatsApp de tu tienda
export const WHATSAPP_NUMBER = '+573177795094'; // Reemplaza con tu número

// Función para generar mensaje de WhatsApp para un producto
export const generateProductMessage = (
  productName: string,
  sku: string,
  price: number,
  quantity: number = 1
): string => {
  const message = `¡Hola! 👋

Me interesa comprar:
📦 Producto: ${productName}
🔖 SKU: ${sku}
💰 Precio: $${price.toLocaleString('es-CO')} c/u
📊 Cantidad: ${quantity}
💸 Total: $${(price * quantity).toLocaleString('es-CO')}

📋 Información importante:
🚚 Se debe cancelar el valor del envío
⏱️ Envíos en 24-48h

¿Podrían confirmar disponibilidad y costo de envío?

Gracias 😊`;

  return encodeURIComponent(message);
};

// Función para generar mensaje de contacto
export const generateContactMessage = (
  name: string,
  phone: string,
  message: string,
  product?: string
): string => {
  const contactMessage = `¡Hola! 👋

Mi información de contacto:
👤 Nombre: ${name}
📱 Teléfono: ${phone}
${product ? `📦 Producto de interés: ${product}\n` : ''}
💬 Mensaje: ${message}

📋 Recordatorio:
🚚 Se debe cancelar el valor del envío
⏱️ Envíos en 24-48h

Gracias 😊`;

  return encodeURIComponent(contactMessage);
};

// Función para generar URL de WhatsApp
export const generateWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`;
};