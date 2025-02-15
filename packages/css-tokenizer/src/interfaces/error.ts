export class ParseError extends Error {
	/** The index of the start character of the current token. */
	sourceStart: number;
	/** The index of the end character of the current token. */
	sourceEnd: number;
	/** The parser steps that preceded the error. */
	parserState: Array<string>;

	constructor(message, sourceStart: number, sourceEnd: number, parserState: Array<string>) {
		super(message);
		this.name = 'ParseError';

		this.sourceStart = sourceStart;
		this.sourceEnd = sourceEnd;
		this.parserState = parserState;
	}
}
