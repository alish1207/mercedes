import styles from './Cart.module.css';

export default function Cart({ items, onRemove, onClose }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const isEmpty = items.length === 0;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Ваш заказ</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
            <i className="ti ti-x" aria-hidden="true" />
          </button>
        </div>

        <div className={styles.items}>
          {isEmpty ? (
            <p className={styles.empty}>Корзина пуста</p>
          ) : (
            items.map(item => (
              <div key={item.id} className={styles.row}>
                <div className={styles.rowInfo}>
                  <p className={styles.rowName}>{item.name}</p>
                  <p className={styles.rowQty}>× {item.qty}</p>
                </div>
                <div className={styles.rowRight}>
                  <span className={styles.rowPrice}>${item.price * item.qty}</span>
                  <button
                    className={styles.removeBtn}
                    onClick={() => onRemove(item.id)}
                    aria-label={`Удалить ${item.name}`}
                  >
                    <i className="ti ti-trash" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {!isEmpty && (
          <div className={styles.footer}>
            <div className={styles.totalRow}>
              <span className={styles.totalLabel}>Итого</span>
              <span className={styles.totalVal}>${total}</span>
            </div>
            <button className={styles.checkoutBtn}>
              <i className="ti ti-credit-card" aria-hidden="true" />
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
