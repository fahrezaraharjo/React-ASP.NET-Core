import React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";
import PhotoContainer from "../../ui/PhotoContainer";

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

// Kotak untuk menampilkan value current status
interface StatusValueBoxProps {
  value: string;
  bgColor?: string;
}

const StatusValueBox: React.FC<StatusValueBoxProps> = ({ value, bgColor = "#10b981" }) => (
  <div
    style={{
      backgroundColor: bgColor,
      padding: "4px 8px",
      borderRadius: "4px",
      fontWeight: "bold",
      textAlign: "center",
      minWidth: "60px",
    }}
  >
    {value}
  </div>
);

const MachineCard: React.FC = () => {
  return (
    <Card
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        flex: 1,
        height: "550px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardHeader
        style={{
          borderBottom: "1px solid #ddd",
          fontSize: "16px",
        }}
        className="px-4 py-2"
      >
        <span style={{ fontWeight: "bold", color: "#000" }}>MACHINE CLASS</span> : CLASS III BASED ON ISO 10816-1-1995
      </CardHeader>

      <CardBody style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Current Status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>CURRENT STATUS:</span>
          <StatusValueBox value="B" />
        </div>

        {/* Alarm */}
        <div style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "16px" }}>
          Alarm
        </div>

        {/* Status Boxes */}
        <div style={{ display: "flex", marginBottom: "16px" }}>
          <StatusBox label="A (NEWLY)" bgColor="#064e3b" />
          <StatusBox label="B (GOOD)" bgColor="#10b981" />
          <StatusBox label="C (ALERT)" bgColor="#facc15" />
          <StatusBox label="D (DANGER)" bgColor="#dc2626" />
        </div>

        {/* Machine Photo Label */}
        <div
          style={{
            backgroundColor: "#bfdbfe",
            padding: "6px 8px",
            fontWeight: "bold",
            borderRadius: "4px",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Machine Photo
        </div>

        {/* Photo Container */}
        <PhotoContainer src="https://via.placeholder.com/300" alt="Machine" />

      </CardBody>
    </Card>
  );
};

export default MachineCard;
