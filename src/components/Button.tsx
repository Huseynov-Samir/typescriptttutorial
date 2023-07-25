type ButtonProps={
	handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

function Button(_props:ButtonProps) {
	return ( 
		<button onClick={e=>_props.handleClick(e,1)}>
			click
		</button>
	 );
}

export default Button;