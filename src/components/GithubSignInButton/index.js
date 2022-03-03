import styles from './index.module.css'
import { GithubIcon } from '../Icons'

export default function GithubSignInButton({ title, onClick }) {
  return (
    <button onClick={onClick} className={styles.signInButton}>
      <GithubIcon fill="#fff" />
      <span>{title}</span>
    </button>
  )
}
