import React from 'react'
import List from '../Projects/List'
import NewProject from '../Projects/NewProject'

const Sidebar = () => {
  return (
    <aside>
      <NewProject />
      <div className="proyectos">
        <h2>Your Projects</h2>
        <List />
      </div>
    </aside>
  )
}

export default Sidebar
