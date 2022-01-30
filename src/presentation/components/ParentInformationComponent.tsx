import { Form, Input, Button, Row, Col } from "antd";
import useStore from "../../application/state/store";
import { Store } from "../../domain/interfaces/types";
import UploadComponent from "./UploadComponent";
import { ParentInput } from "../../domain/interfaces/interfaces";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { ParentProfile } from "../../domain/entities/ParentProfile";
import { PhoneNumber } from "../../domain/objects/phone_number";
import { EmailAddress } from "../../domain/objects/email_address";
import {
	emailValidator,
	phoneNumberValidator,
} from "../../domain/validators/validators";

const ParentInformationComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const oldParentProfile = useStore((state: Store) => state.parentProfile);
	const updateCurrentStep = useStore((state: Store) => state.updateCurrentStep);
	const updateParentProfile = useStore(
		(state: Store) => state.updateParentProfile,
	);
	const [form] = Form.useForm();

	const handleSubmit = (props: ParentInput) => {
		// save the student details
		const parentDetails: ParentProfile = new ParentProfile(
			props.firstName,
			props.lastName,
			"",
			PhoneNumber.create(props.phoneNumber),
			EmailAddress.create(props.email),
			props.address,
		);

		// ensure the values for email and phone number are valid and not undefined
		if (
			parentDetails !== undefined &&
			parentDetails.emailAddress.value !== undefined &&
			parentDetails.phoneNumber.value !== undefined
		) {
			updateParentProfile(parentDetails);
			updateCurrentStep(step + 1);
		}
	};

	return (
		<>
			<Form
				name='student-details-form'
				form={form}
				layout='vertical'
				style={{ width: "100%", marginTop: "50px" }}
				onFinish={handleSubmit}
				initialValues={{
					firstName: oldParentProfile?.firstName,
					lastName: oldParentProfile?.lastName,
					email: oldParentProfile?.emailAddress.value,
					phoneNumber: oldParentProfile?.phoneNumber.value,
					address: oldParentProfile?.address,
				}}
			>
				<Row gutter={16}>
					<Col span={24}>
						<UploadComponent />
					</Col>
					<Col xs={24} md={12} lg={12}>
						<Form.Item
							label='First Name'
							name='firstName'
							required
							rules={[
								{
									required: true,
									message: "Please enter your parent's first name",
								},
							]}
							style={{ width: "100%", marginTop: "10px" }}
						>
							<Input placeholder='e.g John' />
						</Form.Item>
					</Col>

					<Col xs={24} md={12} lg={12}>
						<Form.Item
							label='Last Name'
							name='lastName'
							required
							rules={[
								{
									required: true,
									message: "Please enter your parent's last name",
								},
							]}
						>
							<Input
								placeholder='e.g Doe'
								style={{ width: "100%", marginTop: "10px" }}
							/>
						</Form.Item>
					</Col>
					<Col xs={24} md={12} lg={12}>
						<Form.Item
							label='Phone number'
							name='phoneNumber'
							required
							rules={[
								{
									required: true,
									validator: (
										rule: any,
										value: string,
										cb: (msg?: string) => void,
									) => {
										if (!phoneNumberValidator(value)) {
											cb("Invalid phone number");
										} else {
											cb();
										}
									},
								},
							]}
						>
							<Input
								placeholder='e.g +2547123456789'
								style={{ width: "100%", marginTop: "10px" }}
							/>
						</Form.Item>
					</Col>
					<Col xs={24} md={12} lg={12}>
						<Form.Item
							label='Email address'
							name='email'
							required
							rules={[
								{
									required: true,
									validator: (
										rule: any,
										value: string,
										cb: (msg?: string) => void,
									) => {
										if (!emailValidator(value)) {
											cb("Enter a valid email address");
										} else {
											cb();
										}
									},
								},
							]}
							style={{ width: "100%", marginTop: "10px" }}
						>
							<Input placeholder='e.g someone@gmail.com' />
						</Form.Item>
					</Col>
					<Col xs={24} md={12} lg={12}>
						<Form.Item
							label='Address'
							name='address'
							required
							rules={[
								{
									required: true,
									message: "Please enter your parent's address",
								},
							]}
						>
							<Input
								placeholder='e.g Nairobi'
								style={{ width: "100%", marginTop: "10px" }}
							/>
						</Form.Item>
					</Col>
				</Row>

				<Row
					style={{
						marginTop: "10px",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Col>
						<Form.Item style={{ width: "100%", textAlign: "right" }}>
							<Button
								type='default'
								icon={<ArrowLeftOutlined />}
								style={{ marginRight: "10px" }}
								onClick={() => updateCurrentStep(step - 1)}
							>
								Back
							</Button>
						</Form.Item>
					</Col>
					<Col>
						<Form.Item style={{ width: "100%", textAlign: "right" }}>
							<Button
								htmlType='submit'
								type='primary'
								icon={<ArrowRightOutlined />}
							>
								Next
							</Button>
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</>
	);
};

export default ParentInformationComponent;
