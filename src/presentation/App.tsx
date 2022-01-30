import { Card, Col, Layout, Row } from "antd";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import useStore from "../application/state/store";
import { Store } from "../domain/interfaces/types";
import ConfirmDetailsComponent from "./components/ConfirmDetailsComponent";
import ParentInformationComponent from "./components/ParentInformationComponent";
import StepperComponent from "./components/StepperComponent";
import StudentInformationComponent from "./components/StudentInformationComponent";

function App() {
	const step = useStore((state: Store) => state.currentStep);
	return (
		<Layout
			style={{ maxWidth: "1200px", margin: "0 auto", background: "white" }}
		>
			<Content>
				<Card style={{ marginTop: "50px" }}>
					<Row>
						<Col span={24}>
							<StepperComponent />
						</Col>

						<Col span={24}>
							{step === 0 && <StudentInformationComponent />}

							{step === 1 && <ParentInformationComponent />}

							{step === 2 && <ConfirmDetailsComponent />}
						</Col>
					</Row>
				</Card>
			</Content>
		</Layout>
	);
}

export default App;
