import styles from './index.module.css'
import HeaderSkeleton from '../HeaderSkeleton'
import Clock from '../../Clock'
import HeaderTitle from './HeaderTitle'
import { useSession } from 'next-auth/react'

const Header = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <header className={styles.header}>
          <HeaderTitle />
          <Clock />
        </header>
      ) : (
        <HeaderSkeleton />
      )}
    </>
  )
}

export default Header
