import React from "react";
import {CreateButton, Logo, Login} from './index'

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Login />
            <CreateButton />
        </div>
    )
}

export default Header