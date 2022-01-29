import React from 'react';
import Link from 'next/link';

export default function index(props) {
  console.log(props);
  return (
    <div className="container">
      <h1 className="text-center">La liste des utilisateurs</h1>
      <div className="row gt-3 mt-4">
        {props.users.map((user) => (
          <div key={user.id} className="card h100 shadow-sm">
            <div className="card-title">{user.username}</div>
            <Link href={`/users/${user.id}`}>
              <a className='btn btn-primary'>Contacter</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export async function getStaticProps() {

  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: {
      users
    }
  }
}
