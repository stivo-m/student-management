import { emailValidator } from "../validators/validators";

class EmailAddress {
	readonly value: string;

	private constructor(value: string) {
		this.value = value;
	}

	public static create(email: string): EmailAddress {
		if (email === undefined || email === "" || !emailValidator(email)) {
			throw Error("Invalid email address");
		} else {
			return new EmailAddress(email);
		}
	}
}

export { EmailAddress };
