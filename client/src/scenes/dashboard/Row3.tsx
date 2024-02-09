import DashboardBox from '@/components/DashboardBox'
import { useGetTransactionsQuery } from '@/state/api'

type Props = {}

const Row3 = (props: Props) => {
    const {data: transactionData} = useGetTransactionsQuery()
    console.log("data", transactionData)
    return (
        <>
            <DashboardBox gridArea="g"></DashboardBox>
            <DashboardBox gridArea="h"></DashboardBox>
            <DashboardBox gridArea="i"></DashboardBox>
            <DashboardBox gridArea="j"></DashboardBox>
        </>
    )
}

export default Row3