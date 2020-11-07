import React from 'react';
import GaugeChart from 'react-gauge-chart';
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts';

export const EtfCard = () => {
    const data = [
        {
            name: '2020-10-01', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: '2020-10-02', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: '2020-10-03', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: '2020-10-04', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: '2020-10-05', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: '2020-10-06', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    return (
        <div className="Etf-Card">
            <LineChart width={600} height={300} data={data}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
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
    )
}
