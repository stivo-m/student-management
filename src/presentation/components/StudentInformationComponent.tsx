import { Form, Input, Button, DatePicker } from "antd";
import useStore from "../../application/state/store";
import { Store } from "../../domain/interfaces/types";
import UploadComponent from "./UploadComponent";
import { ArrowRightOutlined } from "@ant-design/icons";
import { StudentProfile } from "../../domain/entities/StudentProfile";
import { StudentInput } from "../../domain/interfaces/interfaces";

const StudentInformationComponent = () => {
	const step = useStore((state: Store) => state.currentStep);
	const oldStudentInfo = useStore((state: Store) => state.studentDetails);
	const updateCurrentStep = useStore((state: Store) => state.updateCurrentStep);
	const updateStudentProfile = useStore(
		(state: Store) => state.updateStudentProfile,
	);
	const [form] = Form.useForm();

	const handleSubmit = (props: StudentInput) => {
		// save the student details
		const student: StudentProfile = new StudentProfile(
			props.dob,
			props.admissionNumber,
			props.firstName,
			props.lastName,
			"",
		);
		updateStudentProfile(student);
		updateCurrentStep(step + 1);
	};

	return (
		<>
			<Form
				name='student-details-form'
				form={form}
				layout='vertical'
				style={{ width: "100%" }}
				onFinish={handleSubmit}
				initialValues={{
					firstName: oldStudentInfo?.firstName,
					lastName: oldStudentInfo?.lastName,
					admissionNumber: oldStudentInfo?.admissionNumber,
					dob: oldStudentInfo?.dateOfBirth,
				}}
			>
				<UploadComponent />

				<Form.Item
					label='First Name'
					name='firstName'
					required
					rules={[{ required: true, message: "Please enter your first name" }]}
					style={{ width: "100%", marginTop: "10px" }}
				>
					<Input placeholder='e.g John' />
				</Form.Item>
				<Form.Item
					label='Last Name'
					name='lastName'
					required
					rules={[{ required: true, message: "Please enter your last name" }]}
				>
					<Input placeholder='e.g Doe' style={{ width: "100%" }} />
				</Form.Item>

				<Form.Item
					label='Date of birth'
					name='dob'
					required
					rules={[
						{ required: true, message: "Please enter your date of birth" },
					]}
				>
					<DatePicker style={{ width: "100%" }} />
				</Form.Item>

				<Form.Item
					label='Admission Number'
					name='admissionNumber'
					required
					rules={[
						{ required: true, message: "Please enter your admission number" },
					]}
					style={{ width: "100%", marginTop: "10px" }}
				>
					<Input placeholder='e.g A0012345KI' />
				</Form.Item>

				{step >= 0 && (
					<Form.Item style={{ width: "100%", textAlign: "right" }}>
						<Button
							htmlType='submit'
							type='primary'
							icon={<ArrowRightOutlined />}
						>
							Next
						</Button>
					</Form.Item>
				)}
			</Form>
		</>
	);
};

export default StudentInformationComponent;
