import React from "react";
import { Button } from "@progress/kendo-react-buttons";

interface TabsProps {
    tabs: string[];
    selectedIndex: number;
    onSelect: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedIndex, onSelect }) => {
    return (
        <div className="flex">
            {tabs.map((tab, index) => (
                <Button
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`px-6 py-2 rounded-md font-medium transition-all duration-200 shadow-md
                            ${selectedIndex === index
                            ? "bg-blue-600 text-white hover:bg-blue-500"
                            : "bg-blue-400 text-white hover:bg-blue-500"
                        } ${index !== tabs.length - 1 ? "mr-4" : ""}`}
                >
                    {tab}
                </Button>
            ))}
        </div>
    );
};

export default Tabs;
