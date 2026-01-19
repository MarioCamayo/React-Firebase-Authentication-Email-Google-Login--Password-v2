# 🔐 React + Firebase Authentication

Proyecto de aprendizaje desarrollado con **React (Vite)** y **Firebase Authentication**, enfocado en implementar un sistema de autenticación moderno y seguro con **login por Google** y **email/contraseña**, además de un **dashboard protegido** y despliegue en producción con **Vercel**.

---

## 🚀 Demo en producción

🔗 **Aplicación:**
[https://react-firebase-authentication-psi.vercel.app](https://react-firebase-authentication-psi.vercel.app)

📂 **Repositorio:**
[https://github.com/MarioCamayo/React-Firebase-Authentication-Email-Google-Login--Password-v2](https://github.com/MarioCamayo/React-Firebase-Authentication-Email-Google-Login--Password-v2)

---

## 🧩 Funcionalidades principales

* ✅ Autenticación con **Google**
* ✅ Login con **email y contraseña**
* ✅ Registro de usuarios
* ✅ Manejo de sesión (Auth Context)
* ✅ Protección de rutas privadas
* ✅ Dashboard accesible solo para usuarios autenticados
* ✅ Cierre de sesión (logout)
* ✅ Deploy en **Vercel**

---

## 🛠️ Tecnologías utilizadas

* ⚛️ **React** (Vite)
* 🔥 **Firebase Authentication**
* 📦 **Context API**
* 🎨 **CSS**
* ☁️ **Vercel** (deploy)

---

## 📁 Estructura del proyecto

```bash
src/
│
├── components/
│   ├── Login/
│   │   ├── Login.jsx
│   │   └── login.css
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── dashboard/
│   │   ├── Dashboard.jsx
│   │   └── dashboard.css
│   │
│   └── firebase/
│       └── firebase.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔑 Configuración de Firebase

1. Crear un proyecto en **Firebase Console**
2. Habilitar **Authentication**

   * Google
   * Email/Password
3. Crear un archivo `firebase.js` con tus credenciales:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  appId: "TU_APP_ID",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

⚠️ **Nota:** No subas tus credenciales reales a producción sin variables de entorno.

---

## ▶️ Instalación y uso local

```bash
# Clonar el repositorio
git clone https://github.com/MarioCamayo/React-Firebase-Authentication-Email-Google-Login--Password-v2

# Entrar al proyecto
cd React-Firebase-Authentication-Email-Google-Login--Password-v2

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

---

## 📌 Aprendizajes clave

* Uso real de **Firebase Authentication**
* Manejo de sesión con **Context API**
* Protección de rutas privadas
* Flujo completo: desarrollo → deploy
* Buenas prácticas en proyectos React

---

## 👨‍💻 Autor

**Mario Camayo**
Desarrollador Web
Apasionado por React y el desarrollo FullStack 🚀

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.
