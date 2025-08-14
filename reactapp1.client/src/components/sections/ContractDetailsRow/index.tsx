import React from "react";
import CardItem from "../../ui/CardItem";

export interface ContractDetailField {
  label: string;
  value: string;
}

interface ContractDetailsRowProps {
  details: ContractDetailField[];
}

const ContractDetailsRow: React.FC<ContractDetailsRowProps> = ({ details }) => {
  const columnGroups: ContractDetailField[][] = [];
  let tempGroup: ContractDetailField[] = [];

  details.forEach((field, index) => {
    tempGroup.push(field);
    if ((index < 8 && tempGroup.length === 2) || index === details.length - 1) {
      columnGroups.push(tempGroup);
      tempGroup = [];
    }
  });

  return (
    <div className="bg-gray-200 flex w-full justify-between flex-wrap border border-gray-300 p-4">
      {columnGroups.map((group, colIdx) => (
        <div key={colIdx} className="flex flex-col gap-2 w-64 flex-none">
          {group.map((field, idx) => (
            <CardItem
              key={`${colIdx}-${idx}`}
              label={field.label}
              value={field.value}
              inline
              boldValue
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContractDetailsRow;
