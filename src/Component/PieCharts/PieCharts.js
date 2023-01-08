import React from 'react'
import { Pie, PieChart } from 'recharts';

const PieCharts = () => {
    const pieChart=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
  return (
    <PieChart width={600} height={400}>
        <Pie
            data={pieChart}
            dataKey="sell"
            cx={200}
            cy={200}
            outerRadius={100}
            fill="#8884d8"
        />
        <Pie
            data={pieChart}
            dataKey="investment"
            cx={200}
            cy={200}
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
        />
    </PieChart>
  );
  
}

export default PieCharts