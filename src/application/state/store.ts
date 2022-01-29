import create from "zustand";
import { ParentProfile } from "../../domain/entities/ParentProfile";
import { StudentProfile } from "../../domain/entities/StudentProfile";
import { Store } from "../../domain/interfaces/types";

const useStore = create<Store>(
	(set): Store => ({
		currentStep: 0,
		studentDetails: undefined,
		parentProfile: undefined,
		updateCurrentStep: (stepCount: number) =>
			set((state: Store) => ({
				...state,
				currentStep: stepCount,
			})),
		updateStudentProfile: (profile: StudentProfile) =>
			set((state: Store) => ({
				...state,
				studentDetails: profile,
			})),
		updateParentProfile: (profile: ParentProfile) =>
			set((state: Store) => ({
				...state,
				parentProfile: profile,
			})),
	}),
);

export default useStore;
