import {useState} from 'react'

function LoggedIn() {
	const [isLoggedIn,setIsLoggedIn]=useState(false)
	const handleLogin=()=>{
		setIsLoggedIn(true)
	}
	const handleLogout=()=>{
		setIsLoggedIn(false)
	}
	return ( 
		<div>
			<button onClick={handleLogin}>login</button>
			<button onClick={handleLogout}>logout</button>
			<div>
				{isLoggedIn ? 'logged in' : 'logged out'}
			</div>
		</div>
	 );
}

export default LoggedIn;