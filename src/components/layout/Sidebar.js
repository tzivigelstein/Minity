import React from "react";
import List from '../projects/List';
import NewProject from '../projects/NewProject';

const Sidebar = () => {
    return (
        <aside>
            <h1 className="mern-title">MERN<span>Tasks</span></h1>
            <NewProject />
            <div className='proyectos'>
                <h2>Your Projects</h2>
                <List />
            </div>
        </aside>
    );
};

export default Sidebar;
