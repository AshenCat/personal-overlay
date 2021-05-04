import React from 'react'
import { CheckBoxOutlineBlank, Close, Minimize } from '@material-ui/icons';

function Titlebar() {
    return (
        <header className="header-titlebar">
          <h1 className="header-app-title">Personal Overlay</h1>
          <span className="titlebar-actions"><Minimize fontSize="small" /></span>
          <span className="titlebar-actions"><CheckBoxOutlineBlank fontSize="small" /></span>
          <span className="titlebar-actions"><Close fontSize="small" /></span>
        </header>
    )
}

export default Titlebar
