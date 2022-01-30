export const encode = (input: any) => {
	return Buffer.from(input).toString("utf8");
};

export const sum = (x: number) => {
	return function (y: number) {
		if (typeof y !== "undefined") {
			x = x + y;
			return arguments.callee;
		} else {
			return x;
		}
	};
};
