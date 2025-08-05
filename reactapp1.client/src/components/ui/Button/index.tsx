import React from 'react'

type ButtonReactProps = {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    
}
const ButtonReact:React.FC<ButtonReactProps> = ({children, className, onClick}) => {
    return (
        <div className={`flex flex-row justify-center bg-green ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default ButtonReact