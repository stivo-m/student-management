import { EmailAddress } from "../objects/email_address";
import { PhoneNumber } from "../objects/phone_number";

export interface UserBioInformation {
	firstName: string;
	lastName: string;
	file: any;
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
export interface StudentInput {
	firstName: string;
	lastName: string;
	dob: Date;
	admissionNumber: number;
	file: any;
}

export interface ParentInput {
	firstName: string;
	lastName: string;
	dob: Date;
	phoneNumber: string;
	email: string;
	address: string;
}
