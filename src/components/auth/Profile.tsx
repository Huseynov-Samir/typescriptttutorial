export type ProfileProps={
	name:string
}

function Profile({name}:ProfileProps) {
	return ( 
		<>{name}</>
	 );
}

export default Profile;