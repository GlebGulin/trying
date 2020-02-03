import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
const Nav = () => {
    return(
        <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.selected}>My profile</NavLink></div>
        <div className={s.item}>
          <NavLink to="/messages" activeClassName={s.selected}>My messages</NavLink></div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.selected}>My music</NavLink></div>
      </nav>
    );
}
export default Nav;