import React from 'react';
import CSVUploader from './components/CSVUploader';
import FilterPanel from './components/FilterPanel';
import ChartManager from './components/charts/ChartManager';
import DrillDownView from './components/DrillDownView';

const App = () => {
    return (
        <div className="app-container">
            <h1>CSV Incident Dashboard</h1>
            <CSVUploader />
            <FilterPanel />
            <ChartManager />
            <DrillDownView />
        </div>
    );
};

export default App;