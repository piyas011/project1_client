const User = async () => {
  interface User {
    name: string;
    email: string;
    phone: number;
  }

  const res = await fetch("http://localhost:5000");
  const users: User[] = await res.json();

  return (
    <div>
      <p>Total User : {users.length}</p>
    </div>
  );
};

export default User;
