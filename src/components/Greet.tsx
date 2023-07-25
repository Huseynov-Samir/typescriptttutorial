type GreetProps={
	name:string
	messageCount:number
	isBoolean:boolean
}

function Greet(_props:GreetProps) {
	return ( 
		<>{
			_props.isBoolean ? _props.name : _props.messageCount
		} </>
	 );
}

export default Greet;