import { Steps } from "antd";
import { Store } from "antd/lib/form/interface";
import useStore from "../../application/state/store";
import ConfirmDetailsComponent from "./ConfirmDetailsComponent";
import ParentInformationComponent from "./ParentInformationComponent";
import StudentInformationComponent from "./StudentInformationComponent";

const StepperComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const { Step } = Steps;
	return (
		<>
			<Steps current={step} responsive={true}>
				<Step
					title='Enter Student Details'
					description={step === 0 && <StudentInformationComponent />}
				/>
				<Step
					title='Enter Parent Details'
					description={step === 1 && <ParentInformationComponent />}
				/>
				<Step
					title='Confirm Information'
					description={step === 2 && <ConfirmDetailsComponent />}
				/>
			</Steps>
		</>
	);
};

export default StepperComponent;
