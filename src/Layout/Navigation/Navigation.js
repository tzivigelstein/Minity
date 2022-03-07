import React, { useState } from 'react'
import styles from './navigation.module.css'
import { Search, Times } from '../../Icons'
import useProjects from '../../../hooks/useProjects'
import Input from '../../UI/Input'

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
    <Input
      Icon={Search}
      inputProps={{
        placeholder: 'Search',
        value: searchTerm,
        type: 'text',
        onChange: handleSearch,
      }}
      actionButton={
        searchTerm.length !== 0 && (
          <button onClick={handleClean} className={styles.timesButton}>
            <Times width={21} height={21} className={styles.timesIcon} />
          </button>
        )
      }
    />
  )
}

export default Navigation
