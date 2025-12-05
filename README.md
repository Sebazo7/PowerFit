# 🏋️‍♂️ PowerFit – Fitness Store Web App

PowerFit es una aplicación web moderna enfocada en la venta de productos deportivos y fitness. Desarrollada con React + Vite, ofrece una interfaz rápida, modular y escalable, con componentes reutilizables, manejo global de estado y un diseño orientado a la experiencia del usuario.

# 📌 Características principales

✔️ Catálogo de productos

✔️ Detalles individuales por producto

✔️ Carrito de compras con estado global

✔️ Componentes reutilizables y organizados

✔️ Hooks personalizados

✔️ Manejo de rutas con React Router

✔️ Integración con servicios (API)

✔️ Utilidades para formato de precios y constantes

✔️ Arquitectura escalable y limpia

# 📁 Estructura del Proyecto
PowerFit/

│

├── public/

│   ├── icons/

│   └── images/

│

├── src/

│   ├── assets/

│   │   ├── icons/

│   │   └── images/

│   │

│   ├── components/

│   │   ├── common/          → Botones, inputs, badges

│   │   ├── layout/          → Navbar, Footer, Sidebar

│   │   ├── products/        → Cards, listas, filtros

│   │   └── ui/              → Interfaz reutilizable

│   │

│   ├── context/

│   │   └── CartContext.jsx

│   │

│   ├── hooks/

│   │   └── useCart.js

│   │

│   ├── pages/

│   │   ├── Home/

│   │   ├── Products/

│   │   ├── ProductDetail/

│   │   └── Cart/

│   │

│   ├── services/

│   │   └── api.js

│   │

│   ├── utils/

│   │   ├── formatCurrency.js

│   │   └── constants.js

│   │

│   ├── App.jsx

│   ├── main.jsx

│   └── routes.jsx

│

├── eslint.config.js

├── package.json

├── vite.config.js

└── README.md

# 🚀 Instalación y ejecución
1️⃣ Clonar el repositorio
    
    git clone https://github.com/Sebazo7/PowerFit.git


2️⃣ Instalar dependencias
    
    npm install

3️⃣ Ejecutar en modo desarrollo
    
    npm run dev

4️⃣ Construir para producción

    npm run build


# 🧩 Tecnologías utilizadas
| Tecnología           | Uso                               |
| -------------------- | --------------------------------- |
| **React**            | UI y componentes                  |
| **Vite**             | Bundler rápido                    |
| **React Router**     | Navegación entre páginas          |
| **ESLint**           | Estilo y calidad de código        |
| **JavaScript / JSX** | Lógica y vistas                   |
| **Context API**      | Manejo global de estado (carrito) |

# 🛠️ Scripts disponibles
| Script            | Descripción                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Ejecuta el servidor de desarrollo |
| `npm run build`   | Genera la build de producción     |
| `npm run preview` | Previsualiza la build             |
| `npm run lint`    | Ejecuta ESLint                    |


# 📦 API / Servicios

El archivo:

    src/services/api.js

Centraliza las llamadas HTTP para obtener datos de productos u otros recursos necesarios.

# 🧪 Tests (si aplican)

El proyecto puede incluir pruebas unitarias con:

Vitest

React Testing Library

Los archivos suelen ubicarse en:

    /tests/
