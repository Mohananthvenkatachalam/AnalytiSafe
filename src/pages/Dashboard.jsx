import React from 'react'
import ReactApexChart from 'react-apexcharts'
import axios from 'axios'

function DistrictGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/districts.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{ chart: { type: 'bar' } }}
        series={[{ data }]}
      />
    </div>
  )
}

function AccidentLocation() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Accident_Location.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          chart: {
            height: 350,
          },
          xaxis: {
            categories: data.map((d) => d.x),
          },
          yaxis: {
            title: {
              text: 'Sales',
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
              distributed: true,
              barHeight: '100%',
              dataLabels: {
                position: 'top',
              },
            },
          },
          legend: {
            show: false,
          },
        }}
        series={[{ data }]}
      />
    </div>
  )
}

function SeverityGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Severity.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="polarArea"
        options={{
          chart: {
            type: 'polarArea',
          },
          stroke: {
            colors: ['#fff'],
          },
          fill: {
            opacity: 0.8,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
          labels: data.map((d) => d.x),
        }}
        series={data.map((d) => d.y)}
      />
    </div>
  )
}

function YearGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Year.json').then((res) => {
      setData(res.data.sort((a, b) => a.x - b.x))
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="line"
        series={[{ name: 'Year', data: data.map((d) => d.y) }]}
        options={{
          xaxis: {
            categories: data.map((d) => d.x),
          },
        }}
      />
    </div>
  )
}

function AccidentClassification() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/accident-classification.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          plotOptions: {
            bar: {
              distributed: true,
            },
          },
        }}
        series={[{ data }]}
      />
    </div>
  )
}

function AccidentSpot() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Accident_Spot.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{ chart: { type: 'bar' } }}
        series={[{ data }]}
      />
    </div>
  )
}

function Weather() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Weather.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          chart: {
            type: 'bar',
            horizontal: true,
          },
          yaxis: {
            reversed: false,
          },
        }}
        series={[{ data }]}
      />
    </div>
  )
}

function JunctionControl() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Junction_Control.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options = {{
          plotOptions: {
            bar: {distributed: true}
          }
        }}
        series={[{ data }]}
      />
    </div>
  )
}


function MainCauseGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Main_Cause.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          chart: {
            type: 'bar',
            horizontal: true,
          },
          yaxis: {
            reversed: false,
          },
        }}
        series={[{ data }]}
      />
    </div>
  )
}
function RoadConditionGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Road_Condition.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          chart: {
            type: 'bar',
            horizontal: true,
          },
          yaxis: {
            reversed: false,
          },
        }}
        series={[{ data }]}
      />
    </div>
  )
}

function RoadTypeGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Road_Type.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          plotOptions: {
            bar: {
              horizontal: true, 
              stroke: {
                curve: 'stepline',
              }
            }
          }
        }}
        series={[{ data }]}
      />
    </div>
  )
}

function SurfaceConditionGraph() {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    axios.get('/api/Surface_Condition.json').then((res) => {
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <ReactApexChart
        type="bar"
        options={{
          plotOptions: {
            bar: {
              horizontal: true, 
              stroke: {
                curve: 'stepline',
              }
            }
          }
        }}
        series={[{ data }]}
      />
    </div>
  )
}
function Dashboard() {
  return (
    <div className="flex flex-col py-5 px-16 h-screen overflow-y-auto w-full">
      <DistrictGraph />
      <YearGraph />
      <AccidentClassification />
      <SeverityGraph />
      <AccidentSpot />
      <Weather />
      <AccidentLocation />
      <JunctionControl/>
      <MainCauseGraph/>
      <RoadConditionGraph/>
      <RoadTypeGraph/>
    </div>
  )
}

export default Dashboard
