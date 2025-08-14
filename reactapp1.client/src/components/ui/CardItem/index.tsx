import React from "react";

export interface CardItemProps {
  label: string;
  value?: React.ReactNode;
  logoSrc?: string;
  alt?: string;
  description?: string;
  className?: string;
  inline?: boolean;
  boldLabel?: boolean;
  boldValue?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  label,
  value,
  logoSrc,
  alt,
  description,
  className = "",
  inline,
  boldLabel,
  boldValue,
}) => {
  const labelClass = boldLabel
    ? "font-bold text-gray-900"
    : "font-normal text-gray-900";

  const valueClass = boldValue
    ? "font-bold text-gray-900"
    : "font-normal text-gray-900";

  const isRemarks = label.trim().toLowerCase() === "remarks";

  // Khusus Remarks → label di atas, value full width, multiline friendly
  if (isRemarks) {
    return (
      <div className={`flex flex-col text-sm ${className}`}>
        <span className={labelClass}>{label} :</span>
        <span className={`${valueClass} mt-1 whitespace-pre-line break-words`}>
          {value}
        </span>
      </div>
    );
  }

  if (inline) {
    return (
      <div className={`flex items-center text-sm ${className}`}>
        <span className={`${labelClass} w-1/2`}>{label}</span>
        <span className="px-2">:</span>
        <span className={`${valueClass} w-1/2`}>{value}</span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <span className={labelClass}>{label}</span>
      {logoSrc ? (
        <img src={logoSrc} alt={alt} className="h-8 mt-1" />
      ) : value ? (
        <span className={valueClass}>{value}</span>
      ) : null}
      {description && <p className="text-gray-700 mt-1">{description}</p>}
    </div>
  );
};

export default CardItem;
