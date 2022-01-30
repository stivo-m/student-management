import { Card, Button } from "antd";
import useStore from "../../application/state/store";
import { Store } from "../../domain/interfaces/types";
import { ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment";

const ConfirmDetailsComponent = () => {
	const student = useStore((state: Store) => state.studentDetails);
	const parent = useStore((state: Store) => state.parentProfile);
	const step = useStore((state: Store) => state.currentStep);
	const updateStep = useStore((state: Store) => state.updateCurrentStep);

	return (
		<div style={{ marginTop: "50px" }}>
			<Card title='Student Information'>
				<p>
					First Name: <b>{student?.firstName}</b>
				</p>
				<p>
					Last Name: <b>{student?.lastName}</b>
				</p>
				<p>
					Admission Number: <b>{student?.admissionNumber}</b>
				</p>
				<p>
					Date of birth:{" "}
					<b>
						{moment(student?.dateOfBirth, "mm/dd/yy").toDate().toLocaleString()}
					</b>
				</p>
			</Card>
			<Card
				style={{ marginTop: "10px", marginBottom: "10px" }}
				title='Parent Information'
			>
				<p>
					First Name: <b>{parent?.firstName}</b>
				</p>
				<p>
					Last Name: <b>{parent?.lastName}</b>
				</p>
				<p>
					Phone Number: <b>{parent?.phoneNumber.value}</b>
				</p>
				<p>
					Email Address: <b>{parent?.emailAddress.value}</b>
				</p>
				<p>
					{" "}
					Address: <b>{parent?.address}</b>
				</p>
			</Card>

			<Button
				type='default'
				icon={<ArrowLeftOutlined />}
				onClick={() => updateStep(step - 1)}
			>
				Back
			</Button>
		</div>
	);
};

export default ConfirmDetailsComponent;
