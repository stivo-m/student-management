import { phoneNumberValidator } from "../validators/validators";

class PhoneNumber {
	readonly value?: string;
	constructor(value: string) {
		this.value = value;
	}

	public static create(num: string): PhoneNumber {
		if (num == undefined || num === "" || !phoneNumberValidator(num)) {
			throw "Invalid phone number format";
		} else {
			return new PhoneNumber(num);
		}
	}
}

export { PhoneNumber };
