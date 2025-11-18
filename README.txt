# ZHR React Shop - React + TypeScript

This is a modern e-commerce application built with **React** and **TypeScript**.  
It includes product listing, product details, cart system, checkout form, and API integration.  
The app demonstrates clean architecture, React Query usage, context-based state management, and form validation with React Hook Form + Yup.

---

## Features

- Fetching products from API using **React Query**
- View product list & product details
- Fully functional shopping cart
- Add / remove items in cart
- Checkout form with validation
- Dynamic routing with React Router
- Type-safe development using TypeScript
- API layer separated using axiosClient

---

## Full Tools & Libraries Used

### **React + TypeScript**
- Main framework for building UI
- TypeScript enables safe types for components, props, state, context, and forms

### **React Router DOM**
Used for handling navigation and page structure  
Tools & hooks:
- `BrowserRouter` — wraps the whole app  
- `Routes` + `Route` — define pages  
- `useNavigate` — navigate programmatically  
- `useParams` — get route params like `/products/:id`

### **Context API + useReducer**
Used for global cart management  
Hooks:
- `useContext`
- `useReducer` — ideal for cart logic (add/remove/increase/decrease)

### **React Query (@tanstack/react-query)**
For API fetching + caching  
Concepts:
- `useQuery` — fetch products with automatic loading/error handling  
- `QueryClient` + `QueryClientProvider` — required setup

### **React Hook Form + Yup**
For the Checkout form  
Packages:
- `react-hook-form`
- `yup`  
- `@hookform/resolvers/yup`

Hooks:
- `useForm()` → register, handleSubmit, (formState: errors, isSubmitting, isSubmitSuccessful ), reset

### **6Styling**
- Custom **CSS**
- Some **Bootstrap classes**

### **TypeScript Types / Interfaces**
- `type Product` → id, title, price, image  
- `type CartItem` → product + quantity  
- `type User` → name, email, address  

### **Core React Hooks**
- `useState`
- `useReducer`
- Custom hooks like `useProducts()`

---

## Tech Stack (Summary)

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **React Query**
- **React Hook Form + Yup**
- **Context API**
- **axios**
- **CSS**

---

## Installation

npm install
npm run dev
````

---

## Folder Structure

```
src/
├── components/       # Reusable components (Navbar)
├── pages/            # Home, Products, ProductDetails, Checkout, About, NotFound, CartPage
├── hooks/            # Custom hooks (useProducts)
├── context/          # CartContext + CartReducer
├── types/            # Cart, ProductType
├── api/              # axiosClient
└── App.tsx
```

---

## What I Learned

* Structuring a scalable React + TS application
* Using React Query for data fetching and caching
* Managing global state with Context + Reducer
* Creating reusable custom hooks
* Type-safe development with TypeScript
* Building validated forms using React Hook Form & Yup
* Handling routing & dynamic pages with React Router
* Improving component architecture and reusability

---

## Future Improvements

* Add authentication (login / register)
* Payment gateway integration
* Product search & filters
* Admin panel for product management
* Dark mode
* Better UI with TailwindCSS or MUI

---

## License

This project is open-source — feel free to use and customize it.