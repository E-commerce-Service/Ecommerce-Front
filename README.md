# 🛒 E-commerce Microservices Frontend

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![PNPM](https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220)

This repository contains the client-side application for the E-commerce Microservices ecosystem. It is a Single Page Application (SPA) built with **Angular**, designed to provide a seamless shopping experience for customers and a comprehensive management dashboard for administrators.

## 🚀 Key Features

The application is divided into distinct feature modules to ensure scalability and maintainability.

### 👤 Customer Features
- **Authentication**: Secure Sign In and Sign Up flows with JWT token management.
- **Product Discovery**: 
  - Home page with featured items.
  - Advanced **Search** functionality.
  - **Category** browsing and filtering.
  - Detailed Product pages.
- **Shopping Experience**:
  - Full **Cart** management (Add, Remove, Update quantities).
  - streamlined **Checkout** process.
- **Social & Interaction**:
  - **Reviews & Ratings**: Users can leave star ratings and comments on products.
  - **Interactive Comments**: Like/Dislike and Reply support.
- **User Account**:
  - Profile management.
  - **Order History** view.

### 🛡️ Admin Dashboard
- **Product Management**: CRUD operations for the product catalog.
- **Category Management**: Organize product hierarchies.
- **Order Management**: View and manage customer orders and statuses.
- **Admin Layout**: dedicated sidebar and layout for administrative tasks.

## 🏗️ Architecture

This project follows a **Feature-Sliced** architectural pattern to keep business logic isolated and reusable.

```text
src/app/
├── core/           # Singleton services, Enums, Type definitions, Interceptors, and Guards
├── features/       # Business logic divided by domain (Admin, Auth, Cart, Checkout, etc.)
├── shared/         # Reusable UI components (Buttons, Modals, Cards) and Pipes
├── environment/    # Configuration for Microservices API endpoints
└── styles.sass     # Global styles and SASS variables
```

### Key Technical Implementations
- **State Management**: Service-based state management (e.g., `cart.service.ts`, `auth.service.ts`).
- **Security**: 
  - `AuthGuard` to protect routes.
  - `AuthInterceptor` to inject JWT tokens into HTTP requests automatically.
- **UX Components**: Custom Toasts, Modals, and Loading skeletons.

## 🛠️ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [PNPM](https://pnpm.io/) (Package Manager)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/E-commerce-Service/Ecommerce-Front.git
   cd Ecommerce-Front
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Environment Configuration:**
   Update `src/app/environment/environment.ts` to point to your backend API Gateway or microservices endpoints.

## ▶️ Running the Application

**Development server:**
```bash
pnpm start
```
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

**Build for production:**
```bash
pnpm run build
```
The build artifacts will be stored in the `dist/` directory.

## 🧪 Code Quality

**Linting:**
```bash
pnpm run lint
```
The project uses **ESLint** to ensure code consistency and best practices.

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
