import { phoneNumberValidator } from "../validators/validators";

class PhoneNumber {
	value?: string;
	constructor(value: string) {
		this.value = phoneNumberValidator(value) && value;
	}
}

export { PhoneNumber };
