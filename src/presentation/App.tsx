import { Card, Col, Row } from "antd";
import "antd/dist/antd.css";
import StepperComponent from "./components/StepperComponent";

function App() {
	return (
		<Card>
			<Row>
				<Col>
					<StepperComponent />
				</Col>
			</Row>
		</Card>
	);
}

export default App;
