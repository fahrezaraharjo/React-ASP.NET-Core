import React, { useState } from 'react';
import BreadcrumbNav, { BreadcrumbItem } from '../../components/ui/BreadcrumbNav';
import Tabs from '../../components/ui/Tabs';
import MachineCard from '../../components/sections/MachineCard';
import ContractDetailsRow, { ContractDetailField } from '../../components/sections/ContractDetailsRow';
import HeaderRow from '../../components/sections/HeaderRow';

/* =======================
   Main Page Component
======================= */
export default function VibrationReportPage() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabList = [
        'General Summary',
        'Vibration Measurement',
        'Flow Rate & Operational',
        'Supporting Document',
    ];

    const breadcrumbItems: BreadcrumbItem[] = [
        { id: 'wo', text: 'WO (8300418953)', href: '/wo/8300418953' },
        { id: 'report', text: 'Vibration Analysis Report', href: '/report/vibration' },
        { id: 'detail', text: 'DB 5.2 (Water Injection Pump)' },
    ];

    const contractDetails: ContractDetailField[] = [
        { label: "Contract Number", value: "ROKAN-23-001" },
        { label: "Contractor Name", value: "PT. Elnusa" },
        { label: "SPK Number", value: "254231332" },
        { label: "Location", value: "GS-05" },
        { label: "Cost Center", value: "PT. Elnusa" },
        { label: "WO Status", value: "Open" },
        { label: "Estimate Start Date", value: "10/07/2025" },
        { label: "Estimate Due Date", value: "15/07/2025" },
        { label: "Remarks", value: "Catatan dalam proses inspeksi ini adalah..." },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumb */}
            <BreadcrumbNav
                items={breadcrumbItems}
                onNavigate={(item) => console.log('Breadcrumb clicked:', item)}
            />

            <div className="bg-white rounded-lg px-6">
                {/* Tabs */}
                <div className="mt-4">
                    <Tabs tabs={tabList} selectedIndex={selectedTab} onSelect={setSelectedTab} />
                    <div className="border-b border-gray-300 my-4"></div>

                    {/* Tab Content */}
                    <div className="bg-white rounded-lg ">
                        {selectedTab === 0 && (
                            <>
                                <HeaderRow />
                                <ContractDetailsRow details={contractDetails} />

                                {/* 3 Section: Left - Middle - Right */}
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                                    {/* Left */}
                                    <MachineCard />

                                    {/* Middle */}
                                    <div className="flex-1 bg-white shadow-md rounded-lg p-4 border border-gray-200">
                                        <h3 className="font-bold text-gray-900 mb-2">Middle Section</h3>
                                        <p className="text-gray-700 text-sm">
                                            Content for the middle section goes here. Maybe charts or status.
                                        </p>
                                    </div>

                                    {/* Right */}
                                    <div className="flex-1 bg-white shadow-md rounded-lg p-4 border border-gray-200">
                                        <h3 className="font-bold text-gray-900 mb-2">Right Section</h3>
                                        <p className="text-gray-700 text-sm">
                                            Content for the right section goes here. Could be actions or history.
                                        </p>
                                    </div>
                                </div>


                            </>
                        )}

                        {selectedTab === 1 && <div>Content Vibration Measurement</div>}
                        {selectedTab === 2 && <div>Content Flow Rate & Operational</div>}
                        {selectedTab === 3 && <div>Content Supporting Document</div>}
                    </div>
                </div>
            </div>

        </div>
    );
}
