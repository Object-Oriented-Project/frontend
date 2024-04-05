'use client'
import React, {useState} from 'react';

function TableMap({ onTableClick }) {
    const [selectedTable, setSelectedTable] = useState(null);

    const handleTableClick = (tableId) => {
        setSelectedTable(tableId === selectedTable ? null : tableId);
        onTableClick(tableId);
    };

    return (
        <div className=" bg-orange-400 w-80 h-48 flex flex-row">
            <style>
                {`
                    .btn:focus {
                        background-color: green;
                        color: white;
                    }
                `}
            </style>
            {/* Pink section */}
            <div className="bg-pink-200 w-3/4 flex flex-col m-3">
                {/* Row 1 */}
                <div className="flex">
                    <button
                        onClick={() => handleTableClick('A1')}
                        className="btn bg-neutral-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
                        autoFocus={selectedTable === 'A1'}
                    >
                        A1
                    </button>
                    <button
                        onClick={() => handleTableClick('A3')}
                        className="btn bg-neutral-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
                        autoFocus={selectedTable === 'A3'}
                        >
                        A3
                    </button>
                </div>
                {/* Row 2 */}
                <div className="flex">
                    <button
                        onClick={() => handleTableClick('C1')}
                        className="btn btn-circle bg-neutral-500 hover:bg-green-500 text-white font-bold mr-5"
                        autoFocus={selectedTable === 'C1'}
                        >
                        C1
                    </button>
                    <button
                        onClick={() => handleTableClick('A2')}
                        className="btn bg-neutral-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 "
                        autoFocus={selectedTable === 'A2'}
                        >
                        A2
                    </button>
                </div>
                <div className="flex">
                    <button
                        onClick={() => handleTableClick('B2')}
                        className="btn bg-neutral-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 flex-auto mt-4"
                        autoFocus={selectedTable === 'B2'}
                        >
                        B2
                    </button>
                </div>
            </div>
            {/* Orange section */}
            <div className="bg-orange-400 w-1/4 flex flex-col justify-between">
                {/* B1 button */}
                <button
                    onClick={() => handleTableClick('B1')}
                    className="btn bg-neutral-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-4 self-stretch h-40"
                    autoFocus={selectedTable === 'B1'}
                    >
                    B1
                </button>
            </div>
        </div>
    );
}

export default TableMap;
