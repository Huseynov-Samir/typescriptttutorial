import { ReactNode } from "react";

type OscarProps={
	children:ReactNode
}

function Oscar(_props:OscarProps) {
	return ( 
		<>
		{_props.children}
		</>
	 );
}

export default Oscar;