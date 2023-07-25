import {PersonNameProps} from './Person.types'

function Person(_props:PersonNameProps) {
	return ( 
		<>
		{_props.name.first}
		</>
	 );
}

export default Person;