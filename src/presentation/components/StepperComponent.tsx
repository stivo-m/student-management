import { Steps } from "antd";
import { Store } from "antd/lib/form/interface";
import useStore from "../../application/state/store";

const StepperComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const { Step } = Steps;
	return (
		<Steps current={step} responsive={false} style={{ width: "100%" }}>
			<Step title='Student' />
			<Step title='Parent' />
			<Step title='Confirm' />
		</Steps>
	);
};

export default StepperComponent;
