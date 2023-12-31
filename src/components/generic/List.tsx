type ListProps<T>={
	items:T[]
	onClick:(value:T)=>void
}

const List=<T extends {id:number}>({
	items,
	onClick,
}:ListProps<T>)=> {
	return ( 
		<div>
			{
				items.map((item)=>{
					return (
						<div key={item.id} onClick={()=>onClick(item)}>
							{item}
						</div>
					)
				})
			}
		</div>
	 );
}

export default List;