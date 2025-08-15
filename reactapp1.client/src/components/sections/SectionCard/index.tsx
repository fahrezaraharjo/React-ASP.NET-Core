import React from "react";
import { Card, CardHeader, CardBody } from "@progress/kendo-react-layout";

type Props = {
    title?: string;
    children?: React.ReactNode;
    headerBg?: string; 
    className?: string; 
    height?: string | number; 
};

const SectionCard: React.FC<Props> = ({
    title = "Additional Notes",
    children,
    headerBg = "bg-blue-100",
    className = "",
    height = "550px", 
}) => {
    return (
        <Card
            className={`flex flex-col bg-white border border-blue-200 rounded-lg ${className}`}
            style={{ height }}
        >
            <CardHeader
                className={`${headerBg} text-gray-900 font-bold rounded-t-lg px-4 py-2 border-b border-blue-200 flex justify-center`}
            >
                {title}
            </CardHeader>

            <CardBody className="flex-1 overflow-auto p-4 text-sm text-gray-800">
                {children || (
                    <p>
                        Tidak ada catatan tambahan. Kamu bisa isi di sini data histori,
                        action items, atau lampiran lain.
                    </p>
                )}
            </CardBody>
        </Card>
    );
};

export default SectionCard;
