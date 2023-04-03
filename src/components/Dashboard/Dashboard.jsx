import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const studentMarks = [
        { id: 1, name: "John", physics: 80, chemistry: 75, math: 90 },
        { id: 2, name: "Sara", physics: 70, chemistry: 85, math: 80 },
        { id: 3, name: "Jack", physics: 90, chemistry: 85, math: 75 },
        { id: 4, name: "Emily", physics: 85, chemistry: 90, math: 70 },
        { id: 5, name: "Alex", physics: 75, chemistry: 80, math: 85 },
        { id: 6, name: "Emma", physics: 80, chemistry: 70, math: 90 },
        { id: 7, name: "Ryan", physics: 70, chemistry: 75, math: 85 },
        { id: 8, name: "Grace", physics: 90, chemistry: 80, math: 75 },
        { id: 9, name: "Oliver", physics: 85, chemistry: 70, math: 80 },
        { id: 10, name: "Lucy", physics: 75, chemistry: 90, math: 85 }
    ];


    return (
        <div className='mt-12 m-auto'>
            <LineChart
                width={1000}
                height={300}
                data={studentMarks}
            >
                <Line dataKey='physics'></Line>
                <Line stroke='green' dataKey='math'></Line>
                <Line stroke='red' dataKey='chemistry'></Line>

                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip />


            </LineChart>
        </div>
    );
};

export default Dashboard;