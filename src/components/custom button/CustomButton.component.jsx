import React from 'react'
import "./CustomButton.scss"

function CustomButton({children,inverted,...otherProps}) {
    return (
        <button className={`${inverted ? 'inverted': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
