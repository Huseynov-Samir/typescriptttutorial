import {useContext} from 'react'
import {UserContext} from './UserContext'

function User() {
	const userContext=useContext(UserContext)
	const handleLogin=()=>{
			userContext?.setUser({
				name:"salam",
				email:'dost'
			})
	}
	const handleLogout=()=>{
			userContext?.setUser(null)
	}
	return ( 
		<div>
			<button onClick={handleLogin}>login</button>
			<button onClick={handleLogout}>logout</button>
			<div>user name is{userContext.user?.name}</div>
			<div>user email is{userContext.user?.email}</div>
		</div>
	 );
}

export default User;