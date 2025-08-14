import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange }) => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedBuilding, setSelectedBuilding] = useState('');
    const [selectedServiceTag, setSelectedServiceTag] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');

    const handleDateChange = (dates) => {
        setDateRange(dates);
        onFilterChange({ dateRange: dates, building: selectedBuilding, serviceTag: selectedServiceTag, status: selectedStatus });
    };

    const handleBuildingChange = (event) => {
        const building = event.target.value;
        setSelectedBuilding(building);
        onFilterChange({ dateRange, building, serviceTag: selectedServiceTag, status: selectedStatus });
    };

    const handleServiceTagChange = (event) => {
        const serviceTag = event.target.value;
        setSelectedServiceTag(serviceTag);
        onFilterChange({ dateRange, building: selectedBuilding, serviceTag, status: selectedStatus });
    };

    const handleStatusChange = (event) => {
        const status = event.target.value;
        setSelectedStatus(status);
        onFilterChange({ dateRange, building: selectedBuilding, serviceTag: selectedServiceTag, status });
    };

    return (
        <div className="filter-panel">
            <h3>Filter Options</h3>
            <div>
                <label>Date Range:</label>
                <input type="date" onChange={(e) => handleDateChange([e.target.value, dateRange[1]])} />
                <input type="date" onChange={(e) => handleDateChange([dateRange[0], e.target.value])} />
            </div>
            <div>
                <label>Building:</label>
                <select value={selectedBuilding} onChange={handleBuildingChange}>
                    <option value="">All</option>
                    {/* Add building options here */}
                </select>
            </div>
            <div>
                <label>Service Tag:</label>
                <select value={selectedServiceTag} onChange={handleServiceTagChange}>
                    <option value="">All</option>
                    {/* Add service tag options here */}
                </select>
            </div>
            <div>
                <label>Status:</label>
                <select value={selectedStatus} onChange={handleStatusChange}>
                    <option value="">All</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
        </div>
    );
};

export default FilterPanel;