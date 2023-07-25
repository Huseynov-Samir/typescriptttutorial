import { Name } from "./Person.types";

type PersonListProps={
	name:Name[]
}

function PersonList(_props:PersonListProps) {
	return ( 
		<>
		{
			_props.name.map((item)=>{
				return <div key={item.first}>
					{item.first}
					{item.last}
				</div>
			})
		}
		</>
	 );
}

export default PersonList;