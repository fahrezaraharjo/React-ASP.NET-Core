import React, { useState } from 'react';

interface VibrationData {
  id: number;
  component: string;
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
  hasBlueIndicator?: boolean;
}

const vibrationData: VibrationData[] = [
  // Motor NDE - positions 1, 2, 3
  {
    id: 1,
    component: 'Motor NDE',
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
    component: '',
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
    component: '',
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
  // Motor DE - positions 4, 5, 6
  {
    id: 4,
    component: 'Motor DE',
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
    component: '',
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
    component: '',
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
  // Pump DE - positions 7, 8, 9
  {
    id: 7,
    component: 'Pump DE',
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
    component: '',
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
  },
  {
    id: 9,
    component: '',
    position: 9,
    positionCode: 'PIA',
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
  // Pump NDE - positions 10, 11, 12
  {
    id: 10,
    component: 'Pump NDE',
    position: 10,
    positionCode: 'POH',
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
    id: 11,
    component: '',
    position: 11,
    positionCode: 'POV',
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
    id: 12,
    component: '',
    position: 12,
    positionCode: 'POA',
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
  // Bearing - positions 13, 14, 15
  {
    id: 13,
    component: 'Bearing',
    position: 13,
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
    id: 14,
    component: '',
    position: 14,
    positionCode: 'PIV',
    dec16: '0.084',
    feb17: '0.238',
    nov13: '0.00',
    apr21: '0.060',
    may19: '0.060',
    jun2: '0.195',
    iso: 'B',
    alarm: 'OK',
    change: '+22%',
    fromAvg: '0.160'
  },
  {
    id: 15,
    component: '',
    position: 15,
    positionCode: 'PIP',
    dec16: '0.662',
    feb17: '0.552',
    nov13: '0.00',
    apr21: '0.491',
    may19: '0.603',
    jun2: '0.38',
    iso: 'A',
    alarm: 'OK',
    change: '-37%',
    fromAvg: '0.601'
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

const ISOCell = ({ value, rowId }: { value: string, rowId: number }) => {
  const displayValue = rowId === 14 ? 'B' : 'A';
  const bgColor = rowId === 14 ? 'bg-green-400' : 'bg-green-500';
  
  return (
    <div className="flex items-center justify-center">
      <div className={`${bgColor} text-black px-3 py-1 text-xs font-bold rounded-sm`}>
        {displayValue}
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

const PositionCell = ({ position, positionCode, hasBlueIndicator, onChange, onAddPosition, componentName }: {
  position: number,
  positionCode: string,
  hasBlueIndicator?: boolean,
  onChange: (value: string) => void,
  onAddPosition?: (componentName: string) => void,
  componentName?: string
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
          className="px-2 py-1 text-xs bg-gray-100 border border-gray-300 rounded cursor-pointer hover:bg-gray-200 " style={{width: '100px'}}
        >
          {positionCode}
        </div>
      )}
      {hasBlueIndicator && (
        <button 
          onClick={() => onAddPosition && componentName && onAddPosition(componentName)}
          className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center ml-auto hover:bg-blue-600 transition-colors"
        >
          <span className="text-white text-xs font-bold">+</span>
        </button>
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

const VibrationDataTable: React.FC = () => {
  const [data, setData] = useState(vibrationData);

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

  const addNewPosition = (componentName: string) => {
    const componentRows = data.filter(row => 
      row.component === componentName || 
      (row.component === '' && getComponentForRow(row.id) === componentName)
    );
    
    const maxPosition = Math.max(...componentRows.map(row => row.position));
    const newPosition = maxPosition + 1;
    
    const newRow: VibrationData = {
      id: Math.max(...data.map(r => r.id)) + 1,
      component: '',
      position: newPosition,
      positionCode: getNextPositionCode(componentName, componentRows.length),
      dec16: '0.08',
      feb17: '0.08',
      nov13: '0.08',
      apr21: '0.08',
      may19: '0.08',
      jun2: '0.093',
      iso: 'A',
      alarm: 'OK',
      change: '-25%',
      fromAvg: '',
    };

    // Insert new row after the last row of this component
    const insertIndex = data.findLastIndex(row =>
      getComponentForRow(row.id) === componentName
    ) + 1;

    const newData = [...data];
    newData.splice(insertIndex, 0, newRow);
    
    setData(newData);
  };

  const getComponentForRow = (id: number) => {
    const row = data.find(r => r.id === id);
    if (!row) return 'Unknown';

    // Find the component name by looking at the current row or previous rows
    for (let i = data.indexOf(row); i >= 0; i--) {
      if (data[i].component) {
        return data[i].component;
      }
    }
    return 'Unknown';
  };

  const getComponentRowSpan = (componentName: string) => {
    return data.filter(row =>
      row.component === componentName ||
      (row.component === '' && getComponentForRow(row.id) === componentName)
    ).length;
  };

  const isFirstRowOfComponent = (index: number) => {
    if (index === 0) return true;
    const currentComponent = data[index].component || getComponentForRow(data[index].id);
    const prevComponent = data[index - 1]?.component || getComponentForRow(data[index - 1]?.id);
    return currentComponent !== prevComponent;
  };

  const getNextPositionCode = (componentName: string, currentCount: number) => {
    const prefixes = {
      'Motor NDE': 'MO',
      'Motor DE': 'MI', 
      'Pump DE': 'PI',
      'Pump NDE': 'PO',
      'Bearing': 'PI'
    };
    const suffixes = ['H', 'V', 'A'];
    const suffix = suffixes[currentCount % 3];
    return prefixes[componentName as keyof typeof prefixes] + suffix;
  };

  const isLastRowOfComponent = (index: number) => {
    if (index === data.length - 1) return true;
    const currentComponent = data[index].component || getComponentForRow(data[index].id);
    const nextComponent = data[index + 1]?.component || getComponentForRow(data[index + 1]?.id);
    return currentComponent !== nextComponent;
  };

  return (
    <div className="w-full bg-white rounded-lg ">
      {/* Header */}
      <div className="px-4 py-3 ">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-gray-800">
            OVERALL VIBRATION DATA:
          </h2>
          {/* Color Legend */}
          <div className="flex items-center" style={{gap: '10px'}}>
            <div className="flex items-center" style={{gap: '5px'}}>
              <div className="w-6 h-3 bg-green-500 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.1</span>
            </div>
            <div className="flex items-center" style={{gap: '5px'}}>
              <div className="w-6 h-3 bg-green-400 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.25</span>
            </div>
            <div className="flex items-center" style={{gap: '5px'}}>
              <div className="w-6 h-3 bg-yellow-400 border border-gray-400"></div>
              <span className="text-xs text-gray-700">≤ 0.63</span>
            </div>
            <div className="flex items-center" style={{gap: '5px'}}>
              <div className="w-6 h-3 bg-red-500 border border-gray-400"></div>
              <span className="text-xs text-gray-700">&gt; 0.63</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border border-blue-200">
          <thead className='bg-blue-100'>
            {/* First header row with main categories */}
            <tr className="bg-gray-50 border-b border-gray-300">
              <th className="px-3 py-2 text-center text-left font-semibold text-gray-700 border-r border-gray-300 w-20" rowSpan={2}>
                Component
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16" rowSpan={2}>
                Position
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300" colSpan={6}>
                Vibration Value
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16" rowSpan={2}>
                ISO
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16" rowSpan={2}>
                % Alarm
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-16" rowSpan={2}>
                % Change
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 w-16" rowSpan={2}>
                % From Avg
              </th>
            </tr>
            {/* Second header row with date columns */}
            <tr className="bg-gray-50 border-b border-gray-300">
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center">
                  <div>16-dec-24</div>
                </div>
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center">
                  <div>17-feb-25</div>
                </div>
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center">
                  <div>13-nov-25</div>
                </div>
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center">
                  <div>21-apr-25</div>
                </div>
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center">
                  <div>19-may-25</div>
                </div>
              </th>
              <th className="px-2 py-2 text-center font-semibold text-gray-700 border-r border-gray-300 w-20">
                <div className="text-center flex items-center justify-center gap-1">
                  <div>02-jun-25</div>
                  <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs">📝</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const isLastRow = isLastRowOfComponent(index);
              const isFirstRow = isFirstRowOfComponent(index);
              const componentName = row.component || getComponentForRow(row.id);
              const rowSpan = isFirstRow ? getComponentRowSpan(componentName) : 0;

              return (
              <tr key={row.id} className={`hover:bg-gray-50 ${index % 2 === 1 ? 'bg-gray-25' : ''} ${isLastRow ? 'border-b-2 border-gray-300' : 'border-b border-gray-100'}`}>
                {isFirstRow && (
                  <td
                    className="px-3 py-2 border-r border-gray-200 font-medium text-gray-800 text-center align-middle"
                    rowSpan={rowSpan}
                  >
                    {componentName}
                  </td>
                )}
                  <td className="px-2 py-2 border-r border-gray-200">
                    <PositionCell
                    position={row.position}
                    positionCode={row.positionCode}
                    hasBlueIndicator={isLastRow}
                    onChange={(newValue) => updatePositionCode(row.id, newValue)}
                    onAddPosition={addNewPosition}
                    componentName={componentName}
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
                    <ISOCell value={row.iso} rowId={row.id} />
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VibrationDataTable;
