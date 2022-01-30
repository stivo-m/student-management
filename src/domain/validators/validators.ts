const phoneNumberValidator = (phoneNumber: string): Boolean => {
	const regExMatcher: RegExp = RegExp(/^(\+254|0)[0-9]\d{8}$/);

	return regExMatcher.test(phoneNumber);
};
const emailValidator = (email: string): Boolean => {
	const regExMatcher: RegExp = RegExp(
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);

	return regExMatcher.test(email);
};

export { phoneNumberValidator, emailValidator };
