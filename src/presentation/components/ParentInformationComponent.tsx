import { Form, Input, Button, DatePicker, Select, Row, Col } from "antd";
import useStore from "../../application/state/store";
import { Store } from "../../domain/interfaces/types";
import UploadComponent from "./UploadComponent";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const ParentInformationComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const updateCurrentStep = useStore((state: Store) => state.updateCurrentStep);
	const [form] = Form.useForm();
	const { Option } = Select;
	return (
		<>
			<Form form={form} layout='vertical'>
				<UploadComponent />
				<Form.Item
					label='First Name'
					required
					tooltip='This is a required field'
				>
					<Input placeholder='e.g John' />
				</Form.Item>
				<Form.Item
					label='Second Name'
					required
					tooltip='This is a required field'
				>
					<Input placeholder='e.g Doe' />
				</Form.Item>

				<Form.Item
					label='Date of birth'
					required
					tooltip='This is a required field'
				>
					<DatePicker />
				</Form.Item>

				<Form.Item label='Gender' required tooltip='This is a required field'>
					<Select defaultValue='Male' style={{ width: 120 }}>
						<Option value='male'>Male</Option>
						<Option value='female'>Female</Option>
						<Option value='other'>Other</Option>
					</Select>
				</Form.Item>
			</Form>
			<Row>
				<Col style={{ textAlign: "right" }}>
					{step >= 0 && (
						<Button
							type='default'
							onClick={() => updateCurrentStep(step - 1)}
							icon={<ArrowLeftOutlined />}
						>
							Back
						</Button>
					)}
				</Col>
				<Col style={{ float: "right" }}>
					{step >= 0 && (
						<Button
							type='primary'
							style={{ margin: "0 8px" }}
							onClick={() => updateCurrentStep(step + 1)}
							icon={<ArrowRightOutlined />}
						>
							Next
						</Button>
					)}
				</Col>
			</Row>
		</>
	);
};

export default ParentInformationComponent;
