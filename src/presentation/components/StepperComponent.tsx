import { Steps } from "antd";
import { Store } from "antd/lib/form/interface";
import useStore from "../../application/state/store";

const StepperComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const { Step } = Steps;
	return (
		<Steps current={step}>
			<Step title='Enter Student Details' />
			<Step title='Enter Parent Details' />
			<Step title='Confirm Information' />
		</Steps>
	);
};

export default StepperComponent;
