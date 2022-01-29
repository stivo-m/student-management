import { ParentProfile } from "../entities/ParentProfile";
import { StudentProfile } from "../entities/StudentProfile";

export type Store = {
	currentStep: number;
	studentDetails?: StudentProfile;
	parentProfile?: ParentProfile;
	updateCurrentStep: (stepCount: number) => void;
	updateStudentProfile: (profile: StudentProfile) => void;
	updateParentProfile: (profile: ParentProfile) => void;
};
