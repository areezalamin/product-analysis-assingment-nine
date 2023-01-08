import React from 'react'
import LineCharts from '../LineCharts/LineCharts'
import PieCharts from '../PieCharts/PieCharts'
import AreaCharts from '../AreaCharts/AreaCharts'
import BarCharts from '../BarCharts/BarCharts'

const Dashboard = () => {



  return (
    <div className='grid grid-cols-2 justify-items-between'>
        <div className='mr-8 mt-10'>
            <h1 className='text-2xl text-center'>This is LineChart</h1>
        <LineCharts></LineCharts>
        </div>
        <div className='ml-40 mt-10'>
            <h1 className='text-2xl text-center'>This is AreaChart</h1>
        <AreaCharts></AreaCharts>
        </div>
        <div className='ml-10 mt-10'>
        <h1 className='text-2xl text-center'>This is PieChart</h1>
        <PieCharts></PieCharts>
        </div>
        <div className='ml-40 mt-10'>
        <h1 className='text-2xl text-center'>This is BarChart</h1>
        <BarCharts></BarCharts>
        </div>
        
    </div>
  )
}

export default Dashboard