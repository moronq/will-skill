import ginger from '../../img/ginger.png'
import mainImage from '../../img/main-image.png'
import nootris from '../../img/nootris.png'
import virus from '../../img/virus.png'
import styles from './Content.module.scss'

const Content = () => {
  return (
    <>
      <section className={styles.mainPostBackground}>
        <div className={styles.mainPostContainer}>
          <h2 className={styles.mainPostTitle}>АКТИВИРУЙ ИММУНИТЕТ!</h2>
          <img
            className={styles.mainPostImage}
            src={mainImage}
            alt="mainPhoto"
          />
          <p className={styles.mainPostTitleDescription}>
            Всего пять секунд в день помогут укрепить иммунитет и повысить
            защитные силы организма
          </p>
          <p className={styles.mainPostSecondTitle}>NOOTRIS ПОМОГАЕТ</p>
          <p className={styles.mainPostSecondTitleDescription}>
            Вашему организму во время пандемии и сезонных простуд
          </p>
        </div>
      </section>
      <section className={styles.postBodyBackground}>
        <div className={styles.postBodyContainer}>
          <p className={styles.postBodyTitle}>
            ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
          </p>
          <div className={styles.postBodyPriceContainer}>
            <p className={styles.postBodyOldPrice}>750₽</p>
            <p className={styles.postBodyNewPrice}>690₽</p>
          </div>
          <ul className={styles.postBodyList}>
            <li className={styles.itemGinger}>
              <img src={ginger} alt="ginger" width={'193px'} />
              <p className={styles.itemGingerTitle}>
                Содержит <span>имбирь</span>
              </p>
            </li>
            <li className={styles.itemNootris}>
              <img
                className={styles.itemNootrisImage}
                src={nootris}
                alt="nootris"
                width={'480px'}
              />
              <p className={styles.itemNootrisTitle}>
                + Бесплатная доставка <span>Специальная цена</span>
              </p>
            </li>
            <li className={styles.itemVirus}>
              <img src={virus} alt="virus" width={'192px'} />
              <p className={styles.itemVirusTitle}>
                Нейтрализует <span>вирусы</span>
              </p>
            </li>
          </ul>
          <button className={styles.button}>Оформить заказ!</button>
        </div>
      </section>
    </>
  )
}

export default Content
