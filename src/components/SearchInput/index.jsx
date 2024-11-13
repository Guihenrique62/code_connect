import styles from './searchInput.module.css'

export const SearchInput = () => {

  return (
    <form className={styles.form}  action='/'>
      <input name='q' placeholder={"Digite o que você Procura..."} className={styles.input} />
      <button className={styles.button}>Buscar</button>
    </form>
    
  )
}
