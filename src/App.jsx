import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { products, categories } from './data/products';
import styles from './App.module.css';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() =>
    activeCategory === 'all' ? products : products.filter(p => p.cat === activeCategory),
    [activeCategory]
  );

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <div className={styles.app}>
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      <main className={styles.main}>
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.sectionLabel}>
          <span>Коллекция 2025</span>
        </div>

        <div className={styles.grid}>
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© 2025 <em>Mercedes-AMG Petronas F1 Team</em> · Фейковый магазин</span>
        <span>Не аффилирован с официальной командой</span>
      </footer>

      {cartOpen && (
        <Cart items={cartItems} onRemove={removeFromCart} onClose={() => setCartOpen(false)} />
      )}
    </div>
  );
}
