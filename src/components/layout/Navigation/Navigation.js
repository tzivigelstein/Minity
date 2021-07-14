import React, { useState } from 'react'
import styles from './navigation.module.css'
import { Search, Times } from '../../Icons'
import useProjects from '../../../hooks/useProjects'

const Navigation = () => {
  const { projects, setFilteredProjects } = useProjects()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = e => {
    const { value } = e.target
    e.preventDefault()
    setSearchTerm(value)
    setFilteredProjects(projects.filter(({ name }) => name.toLowerCase().match(value.trim().toLowerCase())))
  }

  const handleClean = () => {
    setFilteredProjects([])
    setSearchTerm('')
  }

  return (
    <div className={styles.inputWrapper}>
      <Search width={21} height={21} className={styles.searchIcon} />
      <div className={styles.inputContainer}>
        <input
          onChange={handleSearch}
          className={styles.input}
          type="text"
          placeholder="Search projects"
          value={searchTerm}
        />
        {searchTerm.length !== 0 && (
          <button onClick={handleClean} className={styles.timesButton}>
            <Times width={21} height={21} className={styles.timesIcon} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Navigation
