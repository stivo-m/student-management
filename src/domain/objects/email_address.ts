import { emailValidator } from "../validators/validators";

class EmailAddress {
	value: string;

	constructor(value: string) {
		this.value = emailValidator(value) && value;
	}
}

export { EmailAddress };
