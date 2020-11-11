import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend } from 'recharts';
import { setTimeout } from 'timers';
import { chart } from '../types';
import {ChartDot} from './ChartDot';

export const EtfCard = (
    { chartData}: 
    { chartData: chart.DataPoint[]}
) => {
    const [hoveredIndex, setHoveredIndex] = useState<number>(chartData.length - 1);
    let unhoverTimeout: NodeJS.Timeout;
    const onDotHover = (index: number) =>{
        setHoveredIndex(index);
        if(unhoverTimeout){
            clearTimeout(unhoverTimeout)
        }
    } 
    const onDotUnhover = () => {
        unhoverTimeout = setTimeout(() => {
            setHoveredIndex(chartData.length - 1)
        }, 1000);
    }

    const indexForGauge = hoveredIndex > 0 ? hoveredIndex : chartData.length - 1;
    const gaugeValue = chartData.length === 0 ? 0.5 :  (
        chartData[indexForGauge].derivative / chartData[indexForGauge].base - 1
    ) * 10 + 0.5;
        
    return <div className="Etf-Card">
        <LineChart width={600} height={300} data={chartData} key={chartData.length}>
            <XAxis dataKey="date" tick={{ fontSize: 12 }}/>
            <YAxis domain={['minValue', 'maxValue']} tick={{ fontSize: 12 }} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="base" name="Base Asset (S&P 500)" stroke="#fd5a3f" 
                dot={<ChartDot onMouseOver={onDotHover} onMouseLeave={onDotUnhover}/>}
            />
            <Line type="monotone" dataKey="derivative" name="ETF (LON:VUAA)" stroke="#75b2ff" 
                dot={<ChartDot onMouseOver={onDotHover} onMouseLeave={onDotUnhover} />}
            />
            <Legend height={36} />
        </LineChart>
        <div className="gauge-wrapper">
            { chartData.length > 0 &&
                <GaugeChart
                    animDelay={0}
                    percent={gaugeValue}
                    className="gauge"
                    id="gauge-chart"
                    needleBaseColor="rgb(238, 238, 238)"
                    needleColor="rgb(238, 238, 238)"
                />
            }
        </div>
    </div>
}
