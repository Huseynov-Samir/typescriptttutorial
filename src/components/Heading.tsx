type HeadeingProps={
	children:string
}

function Heading(_props:HeadeingProps) {
	return ( 
		<>
		{_props.children}
		</>
	 );
}

export default Heading;