import React from 'react';
import '../Admin/Admin.css'
import Nav from '../../components/Nav/Nav';
import { useUserData } from '../../context/UserDataContext';



const users = [
  { name: 'John Doe', email: 'john@example.com', vote: true },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  { name: 'Jane Smith', email: 'jane@example.com', vote: false },
  
];

const Admin = () => {
    const { userData } = useUserData()
  return (
    <main className='admin page'>
        <h2>Admin Page</h2>
        <div className='vote-table'>
            <ul>
                {users.map((user, index) => (
                    <li key={index} className="vote-row">
                        <span className="vote-name">{user.name}</span>
                        <span className="vote-email">{user.email}</span>
                        <span className="vote-status">{user.vote ? 'Voted' : 'Not Voted'}</span>
                    </li>
                ))}
            </ul>
        </div>
    </main>
  );
};

export default Admin;
