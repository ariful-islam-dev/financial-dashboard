import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery, useGetProductsQuery } from '@/state/api'
import BoxHeader from './BoxHeader';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useTheme } from '@mui/material';
import { useMemo } from 'react';
type Props = {}

const Row2 = () => {
    const {palette}=useTheme();
    const {data:operationalData}=useGetKpisQuery();
    const {data:productData}=useGetProductsQuery();
    console.log('data', data)

    const operationalExpenses = useMemo(()=>{
        return (
            operationalData && operationalData[0].monthlyData.map(({ month, revenue, expenses }) => {
                return {
                    name: month.substring(0, 3),
                    revenue: revenue,
                    expenses: expenses
                }
            })
        )
    })
    return (
        <>
             <DashboardBox gridArea="b">
                <BoxHeader title="Operational vs Non-Operational Expenses"
                sideText="+4%"
                />
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={400}
                        data={operationalExpenses}
                        margin={{
                            top: 20,
                            right: 0,
                            left: -10,
                            bottom: 55,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke={palette.grey[800]} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            style={{ fontSize: '10px' }}
                        />
                        <YAxis
                            yAxisId={"left"}
                            orientation='left'
                            tickLine={false}
                            style={{ fontSize: '10px' }}
                            axisLine={false}
                        />
                        <YAxis
                            yAxisId={"right"}
                            orientation='right'
                            tickLine={false}
                            axisLine={false}
                            style={{ fontSize: '10px' }}
                        />
                        <Tooltip />
                        <Line
                            yAxisId={"left"}
                            type={"monotone"}
                            dataKey={"Non-Operational Expenses"}
                            stroke={palette.tertiary[500]}
                        /><Line
                            yAxisId={"right"}
                            type={"monotone"}
                            dataKey={"Operational Expenses"}
                            stroke={palette.primary.main}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </DashboardBox>
            <DashboardBox gridArea="e"></DashboardBox>
            <DashboardBox gridArea="f"></DashboardBox>
        </>
    )
}

export default Row2