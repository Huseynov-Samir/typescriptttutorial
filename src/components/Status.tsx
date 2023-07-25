type StatusProps={
	status:"loading" | "success"|"error"
}

function Status(_props:StatusProps) {
	let message;
	if(_props.status==='loading'){
		message='Loading...'
	}else if(_props.status==='success'){
		message='Data fetched successfully'
	}else if(_props.status==='error'){
		message='Error fetching data'
	}
	return ( 
		<>

		</>
	 );
}

export default Status;