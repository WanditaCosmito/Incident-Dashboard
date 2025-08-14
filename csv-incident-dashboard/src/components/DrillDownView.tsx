import React from 'react';

interface DrillDownViewProps {
    buildingName: string;
    dcimTiles: Array<{ id: string; name: string; incidents: number }>;
    onClose: () => void;
}

const DrillDownView: React.FC<DrillDownViewProps> = ({ buildingName, dcimTiles, onClose }) => {
    return (
        <div className="drill-down-view">
            <h2>{buildingName} - DCIM Tiles</h2>
            <button onClick={onClose} className="close-button">Close</button>
            <ul>
                {dcimTiles.map(tile => (
                    <li key={tile.id}>
                        <strong>{tile.name}</strong>: {tile.incidents} incidents
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DrillDownView;