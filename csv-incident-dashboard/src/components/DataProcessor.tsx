import React from 'react';

interface Incident {
    id: string;
    serviceTag: string;
    building: string;
    description: string;
    resolution: string;
    date: string;
    status: string;
}

interface DataProcessorProps {
    data: string[][];
}

const DataProcessor: React.FC<DataProcessorProps> = ({ data }) => {
    const incidents: Incident[] = [];

    const processData = () => {
        // Assuming the first row contains headers
        const headers = data[0];
        for (let i = 1; i < data.length; i++) {
            const row = data[i];
            const incident: Incident = {
                id: row[headers.indexOf('Incident ID/Number')],
                serviceTag: row[headers.indexOf('Service Tag')],
                building: row[headers.indexOf('Building/Location')],
                description: row[headers.indexOf('Description')],
                resolution: row[headers.indexOf('Resolution')],
                date: row[headers.indexOf('Date/Timestamp')],
                status: row[headers.indexOf('Status')],
            };
            incidents.push(incident);
        }
    };

    React.useEffect(() => {
        processData();
    }, [data]);

    return (
        <div>
            {/* Render processed incidents or any relevant information */}
            <h2>Processed Incidents</h2>
            <ul>
                {incidents.map((incident) => (
                    <li key={incident.id}>
                        {incident.date}: {incident.description} (Status: {incident.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataProcessor;