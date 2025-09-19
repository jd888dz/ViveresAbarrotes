# Víveres y Abarrotes S.A. - Landing Page Comercial

Una landing page moderna y completamente funcional para tienda de víveres y abarrotes con integración directa a WhatsApp para facilitar las compras.

## 🌟 Características Principales

### ✨ Funcionalidades
- **Compras por WhatsApp**: Integración directa con WhatsApp para realizar pedidos
- **Catálogo completo**: Grid responsive con filtros por categoría y búsqueda
- **Ofertas especiales**: Carrusel con contador regresivo para ofertas limitadas
- **Carrito opcional**: Sistema de carrito con localStorage para múltiples productos
- **Reseñas de clientes**: Sistema de valoraciones y comentarios
- **Formulario de contacto**: Redirige directamente a WhatsApp
- **FAQ interactivo**: Preguntas frecuentes con animaciones
- **Diseño responsive**: Optimizado para móviles, tablets y desktop

### 🎨 Diseño y UX
- **Animaciones suaves**: Implementadas con Framer Motion
- **Microinteracciones**: Hover states y feedback visual
- **Accesibilidad**: Roles ARIA y navegación por teclado
- **SEO optimizado**: Meta tags y estructura semántica
- **Mobile-first**: Diseño responsive con breakpoints optimizados

### 🛠️ Tecnologías Utilizadas
- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconos
- **Vite** como bundler

## 🚀 Instalación y Configuración

### 1. Instalación de dependencias
```bash
npm install
```

### 2. Configuración de WhatsApp
**⚠️ IMPORTANTE**: Antes de usar la aplicación, debes configurar tu número de WhatsApp.

Edita el archivo `src/config/whatsapp.ts`:

```typescript
// Cambia este número por el número real de WhatsApp de tu tienda
export const WHATSAPP_NUMBER = '+573001234567'; // Reemplaza con tu número
```

**Formato del número**:
- Incluye el código de país (ej: +57 para Colombia)
- No incluyas espacios ni guiones
- Ejemplo: `+573001234567`

### 3. Personalización del contenido
- **Productos**: Edita `src/data/products.json` para agregar tus productos
- **Reseñas**: Modifica `src/data/reviews.json` con reseñas reales
- **Información de contacto**: Actualiza los datos en `src/components/Footer.tsx`

### 4. Ejecutar en desarrollo
```bash
npm run dev
```

### 5. Build para producción
```bash
npm run build
```

## 📱 Integración con WhatsApp

### Configuración del número
El archivo `src/config/whatsapp.ts` contiene toda la lógica de WhatsApp:

```typescript
// Número principal (CAMBIAR OBLIGATORIAMENTE)
export const WHATSAPP_NUMBER = '+573001234567';

// Funciones para generar mensajes automáticos
export const generateProductMessage = (productName, sku, price, quantity) => {
  // Genera mensaje para productos específicos
};

export const generateContactMessage = (name, phone, message, product) => {
  // Genera mensaje para formulario de contacto
};
```

### Mensajes automáticos incluyen:
- Información del producto (nombre, SKU, precio)
- Cantidad solicitada
- Recordatorio de pago contra entrega
- Información sobre costo de envío
- Saludo personalizado

## 📂 Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI reutilizables
│   │   ├── Toast.tsx    # Notificaciones
│   │   └── Modal.tsx    # Ventanas modales
│   ├── Hero.tsx         # Sección principal
│   ├── About.tsx        # Información de la empresa
│   ├── ProductCard.tsx  # Tarjeta de producto
│   ├── ProductCatalog.tsx # Catálogo completo
│   ├── OffersCarousel.tsx # Carrusel de ofertas
│   ├── Reviews.tsx      # Reseñas de clientes
│   ├── ContactWhatsApp.tsx # Formulario de contacto
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Footer.tsx       # Pie de página
│   └── FloatingWhatsApp.tsx # Botón flotante de WhatsApp
├── data/                # Datos de ejemplo
│   ├── products.json    # Catálogo de productos
│   └── reviews.json     # Reseñas de clientes
├── hooks/               # Hooks personalizados
│   ├── useCart.ts       # Gestión del carrito
│   └── useCountdown.ts  # Contador regresivo
├── types/               # Definiciones TypeScript
│   └── index.ts         # Tipos principales
├── config/              # Configuraciones
│   └── whatsapp.ts      # Configuración de WhatsApp
└── App.tsx              # Componente principal
```

## 🛍️ Funcionalidad del Carrito

La aplicación incluye un carrito de compras opcional que:
- Guarda productos en `localStorage`
- Permite modificar cantidades
- Genera un mensaje único de WhatsApp con todos los productos
- Incluye totales y información de entrega

Para activar el carrito, los componentes ya incluyen la prop `onAddToCart`.

## 🎯 Personalización

### Cambiar colores principales
Edita `tailwind.config.js` para personalizar la paleta de colores:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#059669', // Verde principal
        secondary: '#0891b2', // Azul secundario
        accent: '#ea580c', // Naranja de acento
      }
    }
  }
}
```

### Agregar nuevos productos
Edita `src/data/products.json`:

```json
{
  "id": "nuevo-producto",
  "name": "Nombre del Producto",
  "sku": "SKU-001",
  "price": 5000,
  "originalPrice": 6000,
  "image": "URL_de_la_imagen",
  "category": "Categoría",
  "rating": 4.5,
  "stock": 25,
  "isOffer": true,
  "isNew": false,
  "tags": ["etiqueta1", "etiqueta2"]
}
```

### Modificar información de contacto
En `src/components/Footer.tsx` actualiza:
- Teléfono de contacto
- Email
- Dirección física
- Horarios de atención
- Redes sociales

## 📋 Lista de Verificación para Producción

Antes de publicar tu landing page:

- [ ] ✅ Cambiar `WHATSAPP_NUMBER` en `src/config/whatsapp.ts`
- [ ] ✅ Actualizar productos en `src/data/products.json`
- [ ] ✅ Reemplazar reseñas de ejemplo en `src/data/reviews.json`
- [ ] ✅ Configurar información de contacto en `Footer.tsx`
- [ ] ✅ Actualizar meta tags en `index.html`
- [ ] ✅ Cambiar título y descripción de la página
- [ ] ✅ Verificar todas las imágenes están funcionando
- [ ] ✅ Probar la integración con WhatsApp
- [ ] ✅ Verificar responsive design en diferentes dispositivos

## 🚀 Despliegue

### Despliegue automático con Bolt
Si estás usando este proyecto en Bolt.new, simplemente haz clic en "Deploy" para publicar automáticamente.

### Despliegue manual
```bash
# Build del proyecto
npm run build

# El directorio 'dist' contiene los archivos listos para producción
```

Puedes subir el contenido de `dist/` a cualquier hosting estático como:
- Netlify
- Vercel  
- GitHub Pages
- Firebase Hosting

## 📞 Soporte

Para dudas sobre la implementación:

1. Revisa este README
2. Verifica la configuración de WhatsApp
3. Consulta los comentarios en el código
4. Asegúrate de que todas las dependencias estén instaladas

## 📄 Licencia

Este proyecto está disponible para uso comercial. Personalízalo según las necesidades de tu negocio.

---

**¡Tu tienda online está lista! 🛒**

Recuerda personalizar el contenido y configurar tu número de WhatsApp antes de publicar.