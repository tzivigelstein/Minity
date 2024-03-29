import styles from './index.module.css'
import Link from 'next/link'
import { Logout } from '../../Icons'
import { useSession, signOut } from 'next-auth/react'

const Navbar = ({ title = '', componentLeft }) => {
  const { data: session } = useSession()

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContainer}>
        {componentLeft && (
          <div className={styles.leftComponentContainer}>
            <Link href="/projects">{componentLeft}</Link>
          </div>
        )}
        <Link href="/projects">
          <h1 className={styles.title}>{title}</h1>
        </Link>
      </div>
      {session && (
        <picture title="Logout" onClick={signOut} className={styles.pictureContainer}>
          <img className={styles.picture} src={session.user.image} alt={`${session.user.name} image`} />
          <Logout className={styles.logoutIcon} width={18} height={18} />
        </picture>
      )}
    </nav>
  )
}

export default Navbar
