import { StudentInfo, UserBioInformation } from "../interfaces/interfaces";

class StudentProfile implements UserBioInformation, StudentInfo {
	dateOfBirth: Date;
	admissionNumber: number;
	firstName: string;
	lastName: string;
	file: any;

	constructor(
		dateOfBirth: Date,
		admissionNumber: number,
		firstName: string,
		lastName: string,
		file: any,
	) {
		this.dateOfBirth = dateOfBirth;
		this.admissionNumber = admissionNumber;
		this.firstName = firstName;
		this.lastName = lastName;
		this.file = file;
	}
}

export { StudentProfile };
