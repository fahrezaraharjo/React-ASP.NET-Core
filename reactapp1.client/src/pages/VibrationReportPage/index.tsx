import React, { useState } from 'react';
import BreadcrumbNav, { BreadcrumbItem } from '../../components/ui/BreadcrumbNav';
import Tabs from '../../components/ui/Tabs';
import MachineCard from '../../components/sections/MachineCard';
import ContractDetailsRow, { ContractDetailField } from '../../components/sections/ContractDetailsRow';
import HeaderRow from '../../components/sections/HeaderRow';
import ReportSummary from '../../components/sections/ReportSummary';
import SectionCard from '../../components/sections/SectionCard';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import InspectionApproval from '../../components/sections/InspectionApproval';
import PhotoContainer from '../../components/ui/PhotoContainer';
import VibrationDataTable from '../../components/sections/VibrationTable';
import BentleyNevadaTable from '../../components/sections/BentleyNevadaTable';
import CurrentStatus from '../../components/ui/CurrentStatus';

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

    const operatingParams = [
        { col1: "Highest", col2: "OVL 0.195 In/sec (PIV) : 1.393 mils (PIX)" },
        { col1: "Suction Pressure (psi)", col2: "13" },
        { col1: "Discharge Pressure", col2: "734" },
        { col1: "Highest Bearing Temp (°C)", col2: "82" },
        { col1: "Highest RTD Winding (°C)", col2: "83" },
        { col1: "Voltage", col2: "3920 / 3914 / 3922 volt" },
        { col1: "Current", col2: "203 / 206 / 200 Ampere ; 98% FLA" },
        { col1: "Control Valve Open (%)", col2: "100 / 50" },
        { col1: "Flowrate (BPD)", col2: "96,161" },
        { col1: "Flowrate (GPM)", col2: "3,205,366.667" },
    ];

    const pumpData = [
        { field: "Manufacturer", value: "David Brown Pump" },
        { field: "Pump Design", value: "Centrifugal Pump" },
        { field: "Pump Mounting", value: "Center hung" },
        { field: "Pumped Fluid", value: "Water" },
        { field: "Rated Speed (RPM)", value: 3560 },
        { field: "Blade Number #1", value: 5 },
        { field: "Blade Number #2", value: 7 },
        { field: "Blade Number #3", value: 7 },
        { field: "Lubricating Mode", value: "Oil" },
        { field: "Bearing Type", value: '7310 BUL (thrust), Sleeve 3.25"' },
    ];

    const pumpMotorData = [
        { field: "Manufacturer", value: "Westinghouse" },
        { field: "Type", value: "Induction Electrical Motor" },
        { field: "Rated Speed (RPM)", value: 3600 },
        { field: "Number of Phase", value: "3 Phase" },
        { field: "Number of Pole", value: "2 Pole" },
        { field: "Power / BHP (HP)", value: 1305 },
        { field: "Voltage", value: 400 },
        { field: "Line Frequency (Hz)", value: 60 },
        { field: "Current", value: "Sleeve" },
        { field: "Lubricating Mode", value: "Oil" },
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
                                {/* TOP Section */}
                                <HeaderRow />
                                <ContractDetailsRow details={contractDetails} />

                                {/* 3 Section:  Middle */}
                                <div className="flex mt-4" style={{ gap: "10px" }}>
                                    {/* Left */}
                                    <div className="flex-1 min-w-[300px]">
                                        <MachineCard />
                                    </div>

                                    {/* Middle */}
                                    <div className="flex-1 min-w-[300px]">
                                        <ReportSummary />
                                    </div>

                                    {/* Right */}
                                    <div className="flex-1 min-w-[300px]">
                                        <SectionCard title="OPERATING PARAMETER">
                                            <Grid style={{ border: "none" }} data={operatingParams}>
                                                <Column field="col1" title=" " headerClassName="!font-bold" />
                                                <Column field="col2" title=" " headerClassName="!font-bold" />
                                            </Grid>
                                        </SectionCard>
                                    </div>
                                </div>
                                {/* BOTTOM Section */}
                                <div className="flex mt-4">
                                    <div className="flex-1 min-w-[300px]">
                                        <InspectionApproval />
                                    </div>
                                </div>
                            </>
                        )}

                        {selectedTab === 1 && (
                            <div className="mt-4 space-y-4">
                                {/* Top Section: Machine Config + Pump Data + Pump Motor */}
                                <CurrentStatus />
                                <div className="border-b border-gray-700 my-4"></div>
                                <div className="flex" style={{ gap: '10px' }}>
                                    {/* Drawing */}
                                    <SectionCard title="DRAWING (Machine Configuration)" className="flex-1 min-w-[300px]" height="400px">
                                        {/* Photo Container */}
                                        <PhotoContainer src="https://via.placeholder.com/300" alt="Machine" />
                                    </SectionCard>
                                    {/* Pump Data */}
                                    <SectionCard title="PUMP DATA" className="flex-1 min-w-[300px]" height="400px">
                                        <Grid
                                            data={pumpData}
                                            style={{ height: "100%" }}
                                        >
                                            <Column
                                                field="field"
                                                title=" "
                                                headerClassName="!h-2 !bg-transparent"
                                            />
                                            <Column
                                                field="value"
                                                title=" "
                                                headerClassName="!h-2 !bg-transparent"
                                            />                                        </Grid>
                                    </SectionCard>
                                    {/* Pump Motor */}
                                    <SectionCard title="PUMP MOTOR" className="flex-1 min-w-[300px]" height="400px">
                                        <Grid
                                            data={pumpMotorData}
                                            style={{ height: "100%" }}
                                            resizable
                                        >
                                            <Column
                                                field="field"
                                                title=" "
                                                headerClassName="!h-2 !bg-transparent"
                                            />
                                            <Column
                                                field="value"
                                                title=" "
                                                headerClassName="!h-2 !bg-transparent"
                                            />
                                        </Grid>
                                    </SectionCard>
                                </div>

                                {/* Overall Vibration Data */}
                                <div className="mt-4 space-y-4">
                                    <VibrationDataTable />
                                </div>
                                <div className="mt-4 space-y-4">
                                    <BentleyNevadaTable />
                                </div>
                            </div>
                        )}
                        {selectedTab === 2 && <div>Content Flow Rate & Operational</div>}
                        {selectedTab === 3 && <div>Content Supporting Document</div>}
                    </div>
                </div>
            </div>

        </div>
    );
}
