import styles from './Navbar.module.css';

export default function Navbar({ cartCount, onCartClick }) {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#00D2BE" strokeWidth="1.5"/>
            <path d="M18 4 L18 18 L30 28" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 18 L6 28" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 18 L18 32" stroke="#00D2BE" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="18" cy="18" r="3" fill="#00D2BE"/>
          </svg>
          <span className={styles.logoText}>MERC AMG · STORE</span>
        </div>

        <ul className={styles.links}>
          {['Одежда', 'Головные уборы', 'Аксессуары', 'Модели'].map(l => (
            <li key={l}><a href="#">{l}</a></li>
          ))}
        </ul>

        <button className={styles.cartBtn} onClick={onCartClick} aria-label="Открыть корзину">
          <i className="ti ti-shopping-bag" aria-hidden="true" />
          <span>Корзина</span>
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </button>
      </nav>

      <div className={styles.band}>
        <span>Сезон 2025 · Официальный мерч</span>
        <span>Доставка по всему миру</span>
        <span>Бесплатно от $150</span>
      </div>
    </>
  );
}
