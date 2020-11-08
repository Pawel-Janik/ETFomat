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
                .map((entry: api.Entry) => ({'date': entry.content.$t}));

            dataForColumn(entries, 3).forEach((entry: api.Entry, i: number) => 
                newChartData[i].value = parseFloat(entry.content.$t.replace(',', '.'))
            );

            setChartData(newChartData);
        }
        loadData();
    }, []);

    return chartData;
}