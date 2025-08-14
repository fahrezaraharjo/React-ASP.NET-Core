import React from "react";
import CardItem from "../../ui/CardItem";

interface HeaderItem {
  label: string;
  value?: string;
  description?: string;
  logoSrc?: string;
  alt?: string;
  minWClass?: string;
}

const HeaderRow: React.FC = () => {
  const headerItems: HeaderItem[] = [
    {
      label: "WO Description",
      description: "Jasa Inspeksi Teknis dan Visual WK Rokan - Paket B",
      minWClass: "w-64",
    },
    {
      label: "From",
      logoSrc: "/pertamina-logo.png",
      alt: "Pertamina",
      minWClass: "w-36",
    },
    {
      label: "To",
      logoSrc: "/elnusa-logo.png",
      alt: "Elnusa",
      minWClass: "w-36",
    },
    {
      label: "Report No",
      value: "Last Update",
      minWClass: "w-32",
    },
  ];

  return (
    <div className="flex w-full items-stretch flex-wrap border border-gray-300 overflow-hidden">
      {headerItems.map((item, index) => (
        <div
          key={item.label}
          className={`flex-1 p-4 ${
            index < headerItems.length - 1
              ? "border-r border-gray-300"
              : ""
          } ${item.minWClass || ""}`}
        >
          <CardItem {...item} boldLabel boldValue={false} />
        </div>
      ))}
    </div>
  );
};

export default HeaderRow;
