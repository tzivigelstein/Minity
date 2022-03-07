import { useSession } from 'next-auth/react'
import useClock from '../../../../hooks/useClock'
import styles from './index.module.css'

const HeaderTitle = () => {
  const { data: session } = useSession()
  const [time] = useClock()

  return (
    <h1 className={styles.headerTitle}>
      {time.humanTime}, {session ? session.user.name : 'Stranger'}.
    </h1>
  )
}

export default HeaderTitle
