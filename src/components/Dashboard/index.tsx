import Sumary from "../Sumary";
import TransitionTable from "../TransitionTable";
import { Container } from "./styles";
const Dashboard = () => {
    return (
        <>
        <Container>
            <Sumary />
            <TransitionTable />
        </Container>
        </>
    )
}

export default Dashboard;