export const numberFormattertoLocale = (locale = `en`, maxDigits = 0) => {
	return new Intl.NumberFormat(locale, {
		maximumFractionDigits: maxDigits,
	});
};

export const formatNumber = (value: string | number | undefined) => {
	if (!value) return 0;

	const formattedValue = Number(value);
	if (Number.isInteger(formattedValue)) {
		return numberFormattertoLocale().format(formattedValue);
	}

	if (formattedValue >= 1) {
		return numberFormattertoLocale(`en`, 2).format(formattedValue);
	}

	return numberFormattertoLocale(`en`, 6).format(formattedValue);
};

