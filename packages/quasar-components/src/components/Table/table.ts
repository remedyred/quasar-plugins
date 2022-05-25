export interface STable {
	title?: string
	perPageOptions?: number[]
	columns?: STableColumn[]
	rows?: any[] | undefined;
	selected?: any[] | undefined;
	loading?: boolean
	filter?: string
	pagination: STablePagination
	styles?: any
}

export interface STableColumn {
	/**
	 * Unique id, identifies column, (used by pagination.sortBy, 'body-cell-[name]' slot, ...)
	 */
	name: string;
	/**
	 * Label for header
	 */
	label: string;
	/**
	 * Row Object property to determine value for this column or function which maps to the required property
	 * @param row The current row being processed
	 * @returns Value for this column
	 */
	field: string | ((row: any) => any);
	/**
	 * If we use visible-columns, this col will always be visible
	 */
	required?: boolean;
	/**
	 * Horizontal alignment of cells in this column
	 * Default value: right
	 */
	align?: "left" | "right" | "center";
	/**
	 * Tell QTable you want this column sortable
	 */
	sortable?: boolean;
	/**
	 * Compare function if you have some custom data or want a specific way to compare two rows
	 * @param a Value of the first comparison term
	 * @param b Value of the second comparison term
	 * @param rowA Full Row object in which is contained the first term
	 * @param rowB Full Row object in which is contained the second term
	 * @returns Comparison result of term 'a' with term 'b'. Less than 0 when 'a' should come first; greater than 0 if 'b' should come first; equal to 0 if their position must not be changed with respect to each other
	 */
	sort?: (a: any, b: any, rowA: any, rowB: any) => number;
	/**
	 * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); Overrides the 'column-sort-order' prop
	 * Default value: ad
	 */
	sortOrder?: "ad" | "da";
	/**
	 * Function you can apply to format your data
	 * @param val Value of the cell
	 * @param row Full Row object in which the cell is contained
	 * @returns The resulting formatted value
	 */
	format?: (val: any, row: any) => any;
	/**
	 * Style to apply on normal cells of the column
	 * @param row The current row being processed
	 */
	style?: string | ((row: any) => string);
	/**
	 * Classes to add on normal cells of the column
	 * @param row The current row being processed
	 */
	classes?: string | ((row: any) => string);
	/**
	 * Style to apply on header cells of the column
	 */
	headerStyle?: string;
	/**
	 * Classes to add on header cells of the column
	 */
	headerClasses?: string;
}

export interface STablePagination {
	/**
	 * Column name (from column definition)
	 */
	sortBy?: string;
	/**
	 * Is sorting in descending order?
	 */
	descending?: boolean;
	/**
	 * Page number (1-based)
	 */
	page?: number;
	/**
	 * How many rows per page? 0 means Infinite
	 */
	rowsPerPage?: number;
	/**
	 * For server-side fetching only. How many total database rows are there to be added to the table. If set, causes the QTable to emit @request when data is required.
	 */
	rowsNumber?: number;
}

export const defaultTableOptions: STable = {
	title: '',
	perPageOptions: [
		10,
		25,
		50,
		100
	],
	columns: [],
	rows: [],
	selected: [],
	loading: false,
	filter: '',
	pagination: {
		page: 0,
		rowsPerPage: 10,
		rowsNumber: 0
	}
}
