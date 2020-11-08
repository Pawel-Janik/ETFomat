import { useEffect, useState } from "react"
import { API_URL } from "../config"
import { api, chart } from "../types"

export const useApi = () => {
    const [chartData, setChartData] = useState<chart.DataPoint[]>([]);

    useEffect(() => {
        const dataForColumn = (entries: api.Entry[], columnId: number) => entries
            .filter((entry: api.Entry) => entry.gs$cell.col === columnId && entry.gs$cell.row > 1)
            .sort((entryA: api.Entry, entryB: api.Entry) => entryA.gs$cell.col - entryB.gs$cell.col);
        
        const loadData = async () => {
            const response = await fetch(API_URL);
            const reposnseJson = await response.json();
            const entries = reposnseJson.feed.entry;
            for (let entry of entries) {
                entry.gs$cell.col = parseInt(entry.gs$cell.col);
                entry.gs$cell.row = parseInt(entry.gs$cell.row);
            }
            
            const newChartData: chart.DataPoint[] = dataForColumn(entries, 2)
                .map((entry: api.Entry) => ({
                    'date': entry.content.$t,
                    base: 1, 
                    derivative: 1,
                }));

            dataForColumn(entries, 3).forEach((entry: api.Entry, i: number) => 
                newChartData[i].derivative = parseFloat(entry.content.$t.replace(',', '.'))
            );

            dataForColumn(entries, 5).forEach((entry: api.Entry, i: number) =>
                newChartData[i].base = parseFloat(entry.content.$t.replace(',', '.'))
            );
            
            if (newChartData.length > 0) {
                const multiplier = newChartData[0].derivative / newChartData[0].base;
                for (const dataPoint of newChartData) {
                    dataPoint.base *= multiplier;
                }
            }

            setChartData(newChartData);
        }
        loadData();
    }, []);

    return chartData;
}