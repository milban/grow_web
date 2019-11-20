import React, { useState, useEffect } from 'react'
import ReactApexChart from 'react-apexcharts'
import styled from 'styled-components'
import { useUserInfo } from '../userInfoContext'
import { grow } from '../api'

const radarOptionsInit = {
  labels: ['벤치 프레스', '오버헤드 프레스', '스쿼트', '데드리프트', '로우'],
  title: {
    text: 'Radar Chart',
    align: 'center'
  }
}
const radarSeriesInit = [
  {
    name: 'Series 1',
    data: [100, 80, 150, 200, 100]
  }
]

function generateData(count, yrange) {
  var i = 0
  var series = []
  while (i < count) {
    var x = 'w' + (i + 1).toString()
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x: x,
      y: y, // y축에 루틴 id를 넣어서 색상과 id 모두 표현, 클릭시 val attribute로 id 얻음
      info: { test: 'hi' }
    })
    i++
  }
  return series
}

const heatMapOptionsInit = {
  dataLabels: {
    enabled: false
  },
  colors: ['#008FFB'],

  title: {
    text: 'HeatMap Chart (Single color)'
  }
}

const heatMapSeriesInit = [
  {
    name: '월요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '화요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '수요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '목요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '금요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '토요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: '일요일',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  }
]

const candleStickOptionsInit = {
  title: {
    text: 'CandleStick Chart',
    align: 'left'
  },
  xaxis: {
    type: 'datetime'
  },
  yaxis: {
    tooltip: {
      enabled: true
    }
  }
}

const candleStickSeriesInit = [
  {
    data: [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      }
    ]
  }
]

const columnChartOptionsInit = {
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top' // top, center, bottom
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function(val) {
      return val + 'kg'
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ['#304758']
    }
  },
  xaxis: {
    categories: [
      '20회',
      '19회',
      '18회',
      '17회',
      '16회',
      '15회',
      '14회',
      '13회',
      '12회',
      '11회',
      '10회',
      '9회',
      '8회',
      '7회',
      '6회',
      '5회',
      '4회',
      '3회',
      '2회',
      '1회'
    ],
    position: 'top',
    labels: {
      offsetY: -18
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      fill: {
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colorTo: '#BED1E6',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5
        }
      }
    },
    tooltip: {
      enabled: true,
      offsetY: -35
    }
  },
  fill: {
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false,
      formatter: function(val) {
        return val + 'kg'
      }
    }
  },
  title: {
    text: '1RM 기준 무게별 회수',
    floating: true,
    offsetY: 320,
    align: 'center',
    style: {
      color: '#444'
    }
  }
}

const calWeightBasedRM = oneRMWeight => {
  const weights = []
  weights.push(oneRMWeight)
  for (let rm = 2; rm <= 20; rm++) {
    const weight = oneRMWeight * (1.0278 - 0.0278 * rm)
    weights.push(Math.floor(weight))
  }
  return weights.reverse()
}

const columnsChartSeriesInit = [
  {
    name: 'Inflation',
    data: calWeightBasedRM(100)
  }
]

const Row = styled.div`
  padding: 2rem 0;
  margin: 0 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const RowChild = styled.div`
  padding: 0 10px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

const CardWrapper = styled.div`
  width: 300px;
  height: ${window.innerWidth >= 1500 ? '350px' : '700px'};
  overflow-y: scroll;
`

const Card = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const User = () => {
  const [radarOptions, setRadarOptions] = useState({})
  const [radarSeries, setRadarSeries] = useState([])
  const [userTotalExercise, setUserTotalExercise] = useState([])
  const [heatMapOptions, setHeatMapOptions] = useState(heatMapOptionsInit)
  const [heatMapSeries, setHeatMapSeries] = useState(heatMapSeriesInit)
  const [candleStickOptions, setCandleStickOptions] = useState(candleStickOptionsInit)
  const [candleStickSeries, setCandleStickSeries] = useState(candleStickSeriesInit)
  const [columnChartOptions, setCloumnChartOptions] = useState(columnChartOptionsInit)
  const [columnChartSeries, setColumnChartSeries] = useState([])

  const [exerciseIds, setExerciseIds] = useState([])

  // 유저가 수행한 모든 운동 가져오기
  useEffect(() => {
    const setExIds = async () => {
      const result = await grow.getOneRMExercies(localStorage.getItem('jwt'))
      console.log(result.data)
      setExerciseIds(result.data.map(data => data.exerciseId))
    }
    setExIds()
  }, [])

  // Radar Chart
  useEffect(() => {
    const setFB = async () => {
      const fbResult = await grow.getFiveBest(localStorage.getItem('jwt'))
      const labels = []
      const data = []
      const promises = fbResult.data.map(exercise =>
        grow.getOneRM(localStorage.getItem('jwt'), exercise.exerciseId).catch(error => console.log(error))
      )
      Promise.all(promises).then(results => {
        results.forEach(result => {
          if (result) {
            const { exerciseName, weight } = result.data
            labels.push(exerciseName)
            data.push(weight)
          }
        })
        setRadarOptions({ labels, title: { text: '주요 운동 최대 무게', align: 'center' } })
        setRadarSeries([{ name: 'Series 1', data }])
      })
    }
    setFB()
  }, [])

  useEffect(() => {
    const getOneRM = () => {
      const promises = exerciseIds.map(exerciseId => grow.getOneRM(localStorage.getItem('jwt'), exerciseId))
      const tmpUserTotalExercise = []
      Promise.all(promises).then(results => {
        results.forEach(result => {
          const { exerciseDate, exerciseId, exerciseName, weight } = result.data
          tmpUserTotalExercise.push({ exerciseDate, exerciseId, exerciseName, weight })
          console.log('tmpUserTotalExercise', tmpUserTotalExercise)
        })
        setUserTotalExercise(tmpUserTotalExercise)
      })
    }
    if (exerciseIds.length !== 0) {
      getOneRM()
    }
  }, [exerciseIds])

  useEffect(() => {
    const getAllORM = async () => {
      const result = await grow.getAllOneRM(localStorage.getItem('jwt'))
      console.log(result)
    }
    getAllORM()
  }, [])

  const onClickHeatMap = e => {
    console.log(e.target.getAttribute('val'))
  }

  const exerciseClickHandle = e => {
    console.log(e.target.id)
    const selectedExercise = userTotalExercise.filter(exercise => exercise.exerciseId === Number(e.target.id))[0]
    setColumnChartSeries([
      {
        name: 'Inflation',
        data: calWeightBasedRM(selectedExercise.weight)
      }
    ])
  }

  return (
    <>
      <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ReactApexChart options={radarOptions} series={radarSeries} type="radar" width="400" height="400" />
        <ReactApexChart options={heatMapOptions} series={heatMapSeries} type="heatmap" width={1000} height="350" onClick={onClickHeatMap} />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          <ReactApexChart options={candleStickOptions} series={candleStickSeries} type="candlestick" width="600" height="350" />
          <ReactApexChart options={columnChartOptions} series={columnChartSeries} type="bar" width="600" height="350" />
        </div>
        <CardWrapper>
          {userTotalExercise.length !== 0 ? (
            userTotalExercise.map((exercise, idx) => (
              <Card id={exercise.exerciseId} key={exercise.exerciseId} onClick={exerciseClickHandle}>
                <div>{exercise.exerciseName}</div>
                <div>{`최대 무게: ${exercise.weight} kg`}</div>
              </Card>
            ))
          ) : (
            <div>아무 운동도 하지 않으셨네요.</div>
          )}
        </CardWrapper>
      </Row>
    </>
  )
}

export default User
