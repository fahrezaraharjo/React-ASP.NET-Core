import React, { useState } from 'react';

interface BentleyData {
  id: number;
  position: number;
  positionCode: string;
  dec16: string;
  feb17: string;
  nov13: string;
  apr21: string;
  may19: string;
  jun2: string;
  iso: string;
  alarm: string;
  change: string;
  fromAvg: string;
}

const bentleyData: BentleyData[] = [
  {
    id: 1,
    position: 1,
    positionCode: 'MOH',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 2,
    position: 2,
    positionCode: 'MOV',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 3,
    position: 3,
    positionCode: 'MOA',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 4,
    position: 4,
    positionCode: 'MIH',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 5,
    position: 5,
    positionCode: 'MIV',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 6,
    position: 6,
    positionCode: 'MIA',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '-18%'
  },
  {
    id: 7,
    position: 7,
    positionCode: 'PIH',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '0.08'
  },
  {
    id: 8,
    position: 8,
    positionCode: 'PIV',
    dec16: '0.08',
    feb17: '0.08',
    nov13: '0.08',
    apr21: '0.08',
    may19: '0.08',
    jun2: '0.093',
    iso: 'A',
    alarm: 'OK',
    change: '-25%',
    fromAvg: '0.08'
  }
];

const StatusCell = ({ value }: { value: string }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-xs font-medium text-gray-800">
        {value}
      </span>
    </div>
  );
};

const ISOCell = ({ value }: { value: string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-green-500 text-black px-3 py-1 text-xs font-bold rounded-sm">
        A
      </div>
    </div>
  );
};

const PercentageCell = ({ value }: { value: string }) => {
  const isPositive = value.startsWith('+');
  const isNegative = value.startsWith('-');

  let colorClass = 'text-gray-600';
  if (isPositive) colorClass = 'text-red-600';
  if (isNegative) colorClass = 'text-green-600';

  return (
    <span className={`text-xs font-medium ${colorClass}`}>
      {value}
    </span>
  );
};

const PositionCell = ({ position, positionCode, onChange }: {
  position: number,
  positionCode: string,
  onChange: (value: string) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(positionCode);

  const handleSave = () => {
    onChange(editValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(positionCode);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-2 relative">
      <div className="text-gray-800 font-medium text-sm">{position}.</div>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          className="px-2 py-1 text-xs border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
          autoFocus
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
        >
          {positionCode}
        </div>
      )}
      {position === 8 && (
        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center ml-auto">
          <span className="text-white text-xs font-bold">+</span>
        </div>
      )}
    </div>
  );
};

const EditableValueCell = ({ value, onChange }: { value: string, onChange: (value: string) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleSave = () => {
    onChange(editValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className="w-full px-1 py-1 text-xs text-center border border-blue-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        autoFocus
      />
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="cursor-pointer hover:bg-blue-50 px-1 py-1 rounded"
    >
      {value}
    </div>
  );
};

const BentleyNevadaTable: React.FC = () => {
  const [data, setData] = useState(bentleyData);

  const updateJun2Value = (id: number, newValue: string) => {
    setData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, jun2: newValue } : row
      )
    );
  };

  const updatePositionCode = (id: number, newValue: string) => {
    setData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, positionCode: newValue } : row
      )
    );
  };

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-300">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-gray-800">
              OVERALL BENTLEY NEVADA
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Bentley Forced Reading (m/s p-p)
            </p>
          </div>
          {/* Color Legend */}
          <div className="flex items-center" style={{ gap: '10px' }}>
            <div className="flex items-center" style={{ gap: '5px' }}>
              <div className="w-6 h-3 bg-green-500 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.1</span>
            </div>
            <div className="flex items-center" style={{ gap: '5px' }}>
              <div className="w-6 h-3 bg-green-400 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.25</span>
            </div>
            <div className="flex items-center" style={{ gap: '5px' }}>
              <div className="w-6 h-3 bg-yellow-400 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.63</span>
            </div>
            <div className="flex items-center" style={{ gap: '5px' }}>
              <div className="w-6 h-3 bg-red-500 border border-gray-400"></div>
              <span className="text-xs text-gray-700">&gt; 0.63</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-blue-200">
        <table className="w-full text-xs">
          <thead className='bg-blue-100'>
            {/* First header row */}
            <tr className="border-b border-gray-300">
              <th
                rowSpan={2}
                className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16 align-middle"
              >
                Position
              </th>
              <th
                colSpan={6}
                className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300"
              >
                Vibration Value
              </th>
              <th
                rowSpan={2}
                className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16 align-middle"
              >
                ISO
              </th>
              <th
                rowSpan={2}
                className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16 align-middle"
              >
                % Alarm
              </th>
              <th
                rowSpan={2}
                className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16 align-middle"
              >
                % Change
              </th>
              <th
                rowSpan={2}
                className="px-2 py-2 text-center font-semibold text-gray-700 w-16 align-middle"
              >
                % From Avg
              </th>
            </tr>

            {/* Second header row */}
            <tr className="border-b border-gray-300">
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                16-dec-24
              </th>
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                17-feb-25
              </th>
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                13-nov-25
              </th>
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                21-apr-25
              </th>
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                19-may-25
              </th>
              <th className="bg-blue-100 px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="flex items-center justify-center gap-1">
                  <span>02-jun-25</span>
                  <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">📝</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr key={row.id} className={`hover:bg-gray-50 ${index % 2 === 1 ? 'bg-gray-25' : ''} ${index === data.length - 1 ? 'border-b-2 border-gray-300' : 'border-b border-gray-100'}`}>
                <td className="px-2 py-2 border-r border-gray-200">
                  <PositionCell
                    position={row.position}
                    positionCode={row.positionCode}
                    onChange={(newValue) => updatePositionCode(row.id, newValue)}
                  />
                </td>
                <td className="px-2 py-2 text-center border-r border-gray-200">{row.dec16}</td>
                <td className="px-2 py-2 text-center border-r border-gray-200">{row.feb17}</td>
                <td className="px-2 py-2 text-center border-r border-gray-200">{row.nov13}</td>
                <td className="px-2 py-2 text-center border-r border-gray-200">{row.apr21}</td>
                <td className="px-2 py-2 text-center border-r border-gray-200">{row.may19}</td>
                <td className="px-2 py-2 text-center border-r border-gray-200">
                  <EditableValueCell
                    value={row.jun2}
                    onChange={(newValue) => updateJun2Value(row.id, newValue)}
                  />
                </td>
                <td className="px-2 py-2 text-center border-r border-gray-200">
                  <ISOCell value={row.iso} />
                </td>
                <td className="px-2 py-2 text-center border-r border-gray-200">
                  <StatusCell value={row.alarm} />
                </td>
                <td className="px-2 py-2 text-center border-r border-gray-200">
                  <PercentageCell value={row.change} />
                </td>
                <td className="px-2 py-2 text-center">
                  <PercentageCell value={row.fromAvg} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BentleyNevadaTable;
