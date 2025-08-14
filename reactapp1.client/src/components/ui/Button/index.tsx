import React from 'react';
import { Button } from '@progress/kendo-react-buttons';

type IconPosition = 'start' | 'end' | 'center';

interface CustomKendoButtonProps {
    label: string;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    align?: 'left' | 'center' | 'right';
    onClick?: () => void;
    className?: string;
    backgroundColor?: string;
    textColor?: string;
    style?: React.CSSProperties;
}

const CustomKendoButton: React.FC<CustomKendoButtonProps> = ({
    label,
    icon,
    iconPosition = 'start',
    align = 'center',
    onClick,
    className,
    backgroundColor = '#28a745',
    textColor = '#fff',          
    style
}) => {
    const justifyContent =
        align === 'left' ? 'flex-start' :
            align === 'right' ? 'flex-end' : 'center';

    const baseStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent,
        alignItems: 'center',
        gap: 8,
        width: '100%',
        fontWeight: 600,
        padding: '10px 0',
        borderRadius: 8,
        backgroundColor,
        color: textColor,
        border: 'none',
        textTransform: 'none',
        ...style,
    };

    return (
        <Button
            onClick={onClick}
            className={className}
            style={baseStyle}
        >
            {iconPosition === 'start' && icon}
            {iconPosition === 'center' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {icon}
                    <span>{label}</span>
                </div>
            )}
            {iconPosition !== 'center' && <span>{label}</span>}
            {iconPosition === 'end' && icon}
        </Button>
    );
};

export default CustomKendoButton;
