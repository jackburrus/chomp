import * as React from 'react';

const CloseIcon = (props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={1.5}
		stroke="currentColor"
		className="w-10 h-10"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
		/>
	</svg>
);

export default CloseIcon;
