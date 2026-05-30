import { useState } from 'react';
import ProductIcon from './ProductIcon';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAdd }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap} style={{ background: product.color }}>
        <ProductIcon icon={product.icon} accent={product.accent} size={90} />

        {product.tag === 'new' && <span className={styles.tagNew}>Новинка</span>}
        {product.tag === 'sale' && <span className={styles.tagSale}>Скидка</span>}

        <button
          className={`${styles.addBtn} ${added ? styles.addBtnActive : ''}`}
          onClick={handleAdd}
          aria-label="Добавить в корзину"
        >
          <i className={`ti ${added ? 'ti-check' : 'ti-plus'}`} aria-hidden="true" />
        </button>
      </div>

      <div className={styles.body}>
        <p className={styles.team}>{product.team}</p>
        <p className={styles.name}>{product.name}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>${product.price}</span>
          {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}
