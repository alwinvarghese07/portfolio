# React Portfolio — Routing & Layout Setup

This document continues from **Step 6: Setup Routing** onwards.

---

## 🧭 6. Setup Routing

Routing allows your portfolio to support multiple pages such as:

* Home
* Case Study pages
* About
* Contact

---

### Install Router (if not already installed)

```bash
npm install react-router-dom
```

---

### Create Home Page

Create the file:

```
src/pages/Home.tsx
```

Add:

```tsx
export default function Home() {
  return <div>Home</div>;
}
```

---

### Configure Routing in `App.tsx`

Replace the contents of `src/App.tsx`:

```tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

### What This Does

* `/` → loads Home page
* Enables future pages without restructuring project
* Prepares portfolio for case study routes

Example future routes:

```tsx
<Route path="/project/:slug" element={<ProjectDetail />} />
<Route path="/about" element={<About />} />
```

---

## 🧱 7. Create Base Layout

A layout ensures consistent styling across all pages.

Instead of repeating navigation, backgrounds, and spacing everywhere, everything passes through one wrapper.

---

### Create Layout File

Create:

```
src/layouts/MainLayout.tsx
```

Add:

```tsx
export default function MainLayout({ children }: any) {
  return (
    <div className="bg-black text-white min-h-screen">
      {children}
    </div>
  );
}
```

---

### Why Layouts Matter

Layouts control:

* Background color
* Global typography
* Navbar/Footer (later)
* Page spacing
* Theme consistency

Think of this as the **frame of your website**.

---

### Wrap Home Page with Layout

Update:

```
src/pages/Home.tsx
```

```tsx
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div>Hero Section Coming</div>
    </MainLayout>
  );
}
```

---

## ✅ Result

You now have:

* Routing enabled
* Page-based architecture
* Reusable layout system
* Scalable portfolio structure

