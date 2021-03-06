import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import GoHome from '../../components/goBack/GoHome'

export default function ApiVisualizatoin(props) {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(0)
    const [fromDate, setFromDate] = useState("")
    const [toDate, setToDate] = useState("")

    const onPageChange = e => {
        setPage(e.target.value)
    }
    const onPageSizeChange = e => {
        setPageSize(e.target.value)
    }
    const onFromDateChange = e => {
        setFromDate(e.target.value)
    }
    const onToDateChange = e => {
        setToDate(e.target.value)
    }

    const getData = async () => {
        return await fetch('https://api.stackexchange.com/2.2/tags?pagesize=15&order=desc&sort=popular&site=stackoverflow')
    }

    const onSubmitData = (e) => {
        e.preventDefault();
        if(page === 0 || pageSize === 0 ) {    
            alert("please fill the fields")
        }
       getNewData()
        .then((res) => res.json())
        .then((data) => setData(data.items))
        .catch((err) => console.log(err))
    }

    const getNewData = async () => {
        return await fetch(`https://api.stackexchange.com/2.2/tags?pages=${page}&pagesize=${pageSize}&fromdate=${fromDate}&todate=${toDate}&order=desc&sort=popular&site=stackoverflow`)
    }

    useEffect(() => {
        getData()
            .then((res) => res.json())
            .then((data) => {
                setData(data.items)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="chart-container">
            <h2>API Visualization</h2>
            <GoHome />
            <form onSubmit={onSubmitData}>
                <label>Page: </label> 
                <input type="Number" min="1" max="999" placeholder="1 to 999" value={page} onChange={onPageChange}/>
                <label>Page Size: </label> 
                <input type="Number" min="1" max="999" placeholder="1 to 999" value={pageSize} onChange={onPageSizeChange}/>
                <label>From Date: </label> 
                <input type="date" value={fromDate} onChange={onFromDateChange}/>
                <label>To Date: </label> 
                <input type="date" value={toDate} onChange={onToDateChange}/>
                <button onClick={onSubmitData}>Get Data</button>
            </form>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <div className="chart">
            {
                <BarChart
            width={900}
            height={300}
            data={data}
            fontSize={12}
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
            }}
            barSize={20}
            >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="count" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
       
            }
        </div>
        </div>
    )
}
