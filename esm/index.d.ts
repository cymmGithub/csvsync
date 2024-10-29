// index.d.ts

/**
 * Options for the stringify function.
 */
export interface StringifyOptions {
	/** Field delimiter, default is ',' */
	delimiter?: string;
	/** If true, all fields will be quoted */
	quoteAll?: boolean;
}

/**
 * Options for the parse function.
 */
export interface ParseOptions {
	/** Field delimiter, default is ',' */
	delimiter?: string;
	/** Skip the first row as header */
	skipHeader?: boolean;
	/** Trim whitespace around fields */
	trim?: boolean;
	/** Return each row as an object, using header row as keys */
	returnObject?: boolean;
	/** Custom header keys (used if returnObject is true) */
	headerKeys?: string[];
	/** Parse without requiring quotes around fields */
	unquotedFields?: boolean;
	/** Character used to quote fields (e.g., for CSV compatibility) */
	removeFieldQuote?: string;
}
