import { EmailAddress } from "../objects/email_address";
import { PhoneNumber } from "../objects/phone_number";

export interface UserBioInformation {
	firstName: string;
	lastName: string;
	passportPhotoUrl: string;
}

export interface StudentInfo {
	dateOfBirth: Date;
	admissionNumber: number;
}

export interface ParentInfo {
	phoneNumber: PhoneNumber;
	emailAddress: EmailAddress;
	address: string;
}