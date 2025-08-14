import React from "react";
import {
  Breadcrumb,
  BreadcrumbLinkMouseEvent,
} from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { filePdfIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

export interface BreadcrumbItem {
  id: string;
  text: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  onNavigate?: (item: BreadcrumbItem) => void;
  onPrint?: () => void;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({
  items,
  onNavigate,
  onPrint,
}) => {
  const handleSelect = (event: BreadcrumbLinkMouseEvent) => {
    const clickedId = event.id as string;
    const clickedItem = items.find((i) => i.id === clickedId);

    if (!clickedItem) return;

    if (clickedItem.href) {
      window.location.href = clickedItem.href;
    } else if (onNavigate) {
      onNavigate(clickedItem);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E6F0FF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={item.id}>
              <span
                style={{
                  fontWeight: isLast ? "normal" : "bold",
                  color: "#0D6EFD",
                  cursor: item.href ? "pointer" : "default",
                }}
                onClick={() =>
                  item.href
                    ? (window.location.href = item.href)
                    : onNavigate?.(item)
                }
              >
                {item.text}
              </span>
              {index < items.length - 1 && (
                <span style={{ margin: "0 6px" }}>/</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Button
        themeColor="error"
        onClick={onPrint}
        svgIcon={filePdfIcon}
      >
        Print Report
      </Button>
    </div>
  );
};

export default BreadcrumbNav;
