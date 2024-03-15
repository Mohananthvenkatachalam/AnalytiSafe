import React from 'react'
import Chart from '../components/Chart'
import CircularProgress from '../components/charts/CircularProgress'
import { FaCar } from 'react-icons/fa'
import { FaTruck } from 'react-icons/fa6'
import { FaBusAlt } from 'react-icons/fa'
import { FaBicycle } from 'react-icons/fa'
import { FaTractor } from 'react-icons/fa'
import { RxComponentNone } from 'react-icons/rx'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ProgressData = [
  {
    name: 'Fatal Casualties',
    value: 7135,
    precentage: 1.7,
  },
  {
    name: 'Serious Casualites',
    value: 59312,
    precentage: 14.2,
  },
  {
    name: 'Slight Casualites',
    value: 351436,
    precentage: 84.1,
  },
  {
    name: 'Casualites by Car',
    value: 333485,
    precentage: 79.8,
  },
]
const VehicleData = () => {
  return (
    <div>
      <div className="flex flex-row mb-5">
        <FaCar className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">333485</h2>
      </div>
      <div className="flex flex-row mb-5">
        <FaTruck className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">33472</h2>
      </div>
      <div className="flex flex-row mb-5">
        <FaBusAlt className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">12798</h2>
      </div>
      <div className="flex flex-row mb-5">
        <FaBicycle className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">33672</h2>
      </div>
      <div className="flex flex-row mb-5">
        <FaTractor className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">1032</h2>
      </div>
      <div className="flex flex-row mb-5">
        <RxComponentNone className="text-3xl" />
        <h2 className="text-2xl ml-9 font-semibold text-gray-500">3424</h2>
      </div>
    </div>
  )
}
const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 250,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Single carriageway',
          'Dual carriageway',
          'Roundabout',
          'One way street',
          'Slip road',
          'blank',
        ],
      },
    },
  })

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={200}
          width={300}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  )
}
function Dashboard() {
  return (
    <div className="flex flex-col py-5 px-16 h-screen overflow-y-auto w-full">
      {/* Top content */}
      <div className="flex flex-row rounded-md border w-[100%] p-8 mt-7">
        <h2 className="text-start w-full font-bold text-2xl">
          ROAD ACCIDENT DASHBOARD
        </h2>
        <div className="flex flex-row justify-content-end w-full">
          <p className="text-gray-500 text-2xl ml-[200px] font-medium mr-3">
            Total Casualities
          </p>
          <p className="text-red-800 text-start font-bold text-2xl">357945</p>
        </div>
      </div>
      {/* progress bar */}
      <div className="flex space-x-8 py-6">
        {ProgressData.map((data) => (
          <div
            key={data.name} // Adding a unique key is good practice when using map in React
            className="flex flex-row rounded-md border w-[25%] px-8 py-4 justify-center"
          >
            <div>
              <h2 className="font-semibold mt-2">{data.name}</h2>
              <p className="text-gray-500 font-semibold mt-2 text-[18px]">
                {data.value}
              </p>
            </div>
            <div>
              <div className="w-[100px]">
                <CircularProgress percentage={data.precentage} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* main Grid */}
      <div className="grid grid-cols-5 gap-2">
        <div className="flex flex-col items-center rounded-md border px-8 pt-4 pb-2 mr-3">
          <p className="font-semibold mt-[-5px] mb-6 text-[20px]">
            Casulatives by Vehicle Types
          </p>
          <VehicleData />
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-4 gay-4">
            <div className="flex flex-col rounded-md border w-full p-2 justify-center col-span-2">
              <ApexChart />
            </div>
            <div className="flex flex-col rounded-md border w-full p-2 justify-center col-span-2">
              <ApexChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
