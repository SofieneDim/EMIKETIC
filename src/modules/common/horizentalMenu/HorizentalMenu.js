// Imports
import React, { useState } from 'react'
import HorizentalMenuItem from './HMenuItem'
import './scss/HorizentalMenu.scss'

const HorizentalMenu = () => {
    const [selected, newSelect] = useState("competitive");
    const menuItemsTitles = ["competitive", "casual", "deathmatch", "war games", "wingman",]
    const menuItems = menuItemsTitles.map((title, index) =>
        <HorizentalMenuItem
            key={index}
            title={title}
            active={selected === title}
            clickHandler={() => newSelect(title)}
        />
    )
    return (
        <div className="row" id="horizental-menu">
            {menuItems}
            <div style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(121, 120, 120, 0.858)",
                marginTop: "45px"
            }}></div>
        </div>
    )
}


export default HorizentalMenu
