import React from "react";
import SectionCard from "../SectionCard";

type Props = {
    findings?: string[];
    analysisText?: string;
    recommendationText?: string;
};

const defaultFindings = [
    "Nilai vibrasi motor dan pompa dalam kondisi normal",
    "Nilai vibrasi bently normal",
    "Nilai flowrate normal",
    "Spektrum casing motor dominan di 1x, 2x, dan 3xrpm",
    "Spektrum casing pompa PIV dominan di 7xrpm",
    "Plot orbit motor DE menyerupai angka 8",
];

const ReportSummary: React.FC<Props> = ({
    findings = defaultFindings,
    analysisText = "Secara umum vibrasi motor dan pompa dalam kondisi normal.",
    recommendationText = "Lanjutkan proses monitoring berikutnya.",
}) => {
    return (
        <SectionCard title="REPORT SUMMARY">
            {findings && findings.length > 0 && (
                <div className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-2">Findings</h3>
                    <div className="bg-gray-100 border border-gray-200 rounded-lg max-h-40 overflow-y-auto p-3">
                        <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-800">
                            {findings.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}

            {analysisText && (
                <div className="mb-4">
                    <h3 className="font-bold text-gray-900 mb-2">Analysis</h3>
                    <div className="bg-gray-100 border border-gray-200 rounded-lg max-h-40 overflow-y-auto p-3 text-sm text-gray-800">
                        {analysisText}
                    </div>
                </div>
            )}

            {recommendationText && (
                <div>
                    <h3 className="font-bold text-gray-900 mb-2">Recommendation</h3>
                    <div className="bg-gray-100 border border-gray-200 rounded-lg max-h-40 overflow-y-auto p-3 text-sm text-gray-800">
                        {recommendationText}
                    </div>
                </div>
            )}
        </SectionCard>
    );
};

export default ReportSummary;
