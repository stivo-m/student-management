import { EmailAddress } from "../objects/email_address";
import { PhoneNumber } from "../objects/phone_number";
import { ParentInfo, UserBioInformation } from "../interfaces/interfaces";

class ParentProfile implements UserBioInformation, ParentInfo {
	firstName: string;
	lastName: string;
	passportPhotoUrl: string;
	phoneNumber: PhoneNumber;
	emailAddress: EmailAddress;
	address: string;

	constructor(
		firstName: string,
		lastName: string,
		passportPhotoUrl: string,
		phoneNumber: PhoneNumber,
		emailAddress: EmailAddress,
		address: string,
	) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.passportPhotoUrl = passportPhotoUrl;
		this.phoneNumber = phoneNumber;
		this.emailAddress = emailAddress;
		this.address = address;
	}
}

export { ParentProfile };
