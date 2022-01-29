import { StudentInfo, UserBioInformation } from "../interfaces/interfaces";

class StudentProfile implements UserBioInformation, StudentInfo {
	dateOfBirth: Date;
	admissionNumber: number;
	firstName: string;
	lastName: string;
	passportPhotoUrl: string;

	constructor(
		dateOfBirth: Date,
		admissionNumber: number,
		firstName: string,
		lastName: string,
		passportPhotoUrl: string,
	) {
		(this.admissionNumber = admissionNumber),
			(this.dateOfBirth = dateOfBirth),
			(this.firstName = firstName),
			(this.lastName = lastName),
			(this.passportPhotoUrl = passportPhotoUrl);
	}
}

export { StudentProfile };
