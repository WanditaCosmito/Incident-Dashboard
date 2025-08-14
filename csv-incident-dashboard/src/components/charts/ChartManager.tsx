import React from 'react';
import { LineChart, BarChart, PieChart, Line, Bar, Pie, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartManager = ({ data }) => {
    return (
        <div>
            <h2>Incident Data Visualizations</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="incidentCount" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="building" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="incidentCount" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="incidentCount" nameKey="serviceTag" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ChartManager;