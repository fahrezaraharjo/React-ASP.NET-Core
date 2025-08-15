import React from "react";

type DataItemProps = {
    label: string;
    value: string | number;
    className?: string; 
};

const DataItem: React.FC<DataItemProps> = ({ label, value, className = "" }) => {
    return (
        <p className={`text-sm text-gray-800 ${className}`}>
            <strong>{label}:</strong> {value}
        </p>
    );
};

export default DataItem;
