type ContainerProps={
	styles:React.CSSProperties
}

function Container(_props:ContainerProps) {
	return ( 
		<div style={_props.styles}>
			text
		</div>
	 );
}

export default Container;