import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';
import { chart } from '../types';

export const EtfCard = (
    {chartData}: 
    {chartData: chart.DataPoint[]}
) => {
    return (
        <div className="Etf-Card">
            <LineChart width={600} height={300} data={chartData} key={chartData.length}>
                <XAxis dataKey="date" tick={{ fontSize: 12 }}/>
                <YAxis tick={{ fontSize: 12 }} />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
            <div className="gauge-wrapper">
                <GaugeChart
                    animDelay={0}
                    className="gauge"
                    id="gauge-chart"
                    needleBaseColor="rgb(238, 238, 238)"
                    needleColor="rgb(238, 238, 238)"
                />
            </div>
        </div>
    );
}
