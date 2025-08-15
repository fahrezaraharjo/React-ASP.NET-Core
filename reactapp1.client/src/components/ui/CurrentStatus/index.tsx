import React from "react";

interface StatusData {
  label: string;
  value: string | number;
  isBold?: boolean;
  bgColor?: string;
  textColor?: string;
}

const CurrentStatus: React.FC = () => {
  const data: StatusData[] = [
    { label: "CURRENT STATUS:", value: "Highest OVL", isBold: true, textColor: "text-blue-700" },
    { label: "PIV", value: "" },
    { label: "% Alarm", value: "", textColor: "text-blue-700" },
    { label: "OK", value: "" },
    { label: "% Change", value: "22%" },
    { label: "% From Avg", value: "-7%" },
    { label: "ISO", value: "", textColor: "text-blue-700" },
    { label: "B (0.195)", value: "", bgColor: "bg-green-400", textColor: "font-bold" }
  ];

  return (
    <div className="w-full border-b border-gray-200">
      <div className="flex w-full py-2">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`flex-1 min-w-0 flex items-center justify-center px-3 py-1 text-sm rounded
              ${item.bgColor ? item.bgColor : "bg-gray-100"}
              ${item.textColor || ""}
              ${item.isBold ? "font-bold" : ""}`}
          >
            {item.label && !item.value && <span className="truncate">{item.label}</span>}
            {item.value && item.label && (
              <div className="flex items-center gap-1 truncate">
                <span>{item.label}</span>
                <span className="font-semibold">{item.value}</span>
              </div>
            )}
            {item.value && !item.label && <span className="truncate">{item.value}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentStatus;
