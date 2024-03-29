import React, { useEffect, useState } from 'react';
import './gitHubUsers.css'; 


const url = 'https://api.github.com/users';

export default function GitHubUsers () {
const [users, setUsers] = useState([]);

const getUsers = async() => {
  const response = await fetch(url);
  const users = await response.json();
  setUsers(users)
}
useEffect(() =>{
  getUsers()
}, [])

  return (
    <>
  <h2 style={{fontSize: '35px', fontFamily:'sans-serif'}}>GitHub Users</h2>
  <ul className='users'>
{users.map((user) => {
  const {id,login, avatar_url, html_url} = user;
  return(
    <li key={id}>
      <img src={avatar_url} alt={login} />
      <div>
        <h4>{login}</h4>
        <a href={html_url}>profile</a>
      </div>
    </li>
  )
})}
  </ul>
  </>
  )
}
