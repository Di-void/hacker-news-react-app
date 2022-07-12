import React from "react";
import { useGlobalContext } from "./context";

// MAIN COMP..
const Buttons = () => {
	// STATE VALUES
	const { isLoading, page, nbPages, handlePage } = useGlobalContext();
	// FUNCTIONS AND SIDE EFFECTS
	// RETS
	return (
		<div className="btn-container">
			<button disabled={isLoading} onClick={() => handlePage("dec")}>
				prev
			</button>
			<p>
				{page + 1} of {nbPages}
			</p>
			<button disabled={isLoading} onClick={() => handlePage("inc")}>
				next
			</button>
		</div>
	);
};

export default Buttons;
