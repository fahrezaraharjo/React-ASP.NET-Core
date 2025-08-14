import React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";

interface StatusBoxProps {
  label: string;
  bgColor: string;
}

const StatusBox: React.FC<StatusBoxProps> = ({ label, bgColor }) => (
  <div
    style={{
      backgroundColor: bgColor,
      color: "white",
      fontWeight: "bold",
      padding: "8px",
      textAlign: "center",
      flex: 1,
    }}
  >
    {label}
  </div>
);

const MachineCard: React.FC = () => {
  return (
    <Card style={{ border: "1px solid #ccc", borderRadius: "8px", flex: 1 }}>
      {/* Title with border bottom */}
      <CardHeader
        style={{
          borderBottom: "2px solid #ddd",
          fontWeight: "bold",
          fontSize: "16px",
          padding: "8px 12px",
        }}
      >
        Left Section Title
      </CardHeader>

      <CardBody>
        {/* Label & Value */}
        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontWeight: "bold" }}>Label: </span>
          <span>Value</span>
        </div>

        {/* Alarm Text */}
        <div style={{ marginBottom: "12px", color: "#b91c1c", fontWeight: "bold" }}>
          Alarm: Danger Detected
        </div>

        {/* Status Boxes */}
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <StatusBox label="A (NEWLY)" bgColor="#064e3b" />
          <StatusBox label="B (GOOD)" bgColor="#10b981" />
          <StatusBox label="C (ALERT)" bgColor="#facc15" />
          <StatusBox label="D (DANGER)" bgColor="#dc2626" />
        </div>

        {/* Machine Photo Title */}
        <div
          style={{
            backgroundColor: "#bfdbfe",
            padding: "6px 8px",
            fontWeight: "bold",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        >
          Machine Photo
        </div>

        {/* Image Container */}
        <div
          style={{
            width: "100%",
            aspectRatio: "4/3",
            backgroundColor: "#f3f4f6",
            border: "1px dashed #ccc",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Machine"
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default MachineCard;
