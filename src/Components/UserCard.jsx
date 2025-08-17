function UserCard({ name, email }) {
  return (
    <div className="bg-purple-100 shadow-md rounded-lg p-6 w-96 mx-auto border border-purple-200 
                    hover:shadow-lg hover:scale-105 transform transition duration-300">
      <h2 className="text-xl font-semibold text-purple-800">{name}</h2>
      <p className="text-purple-600">{email}</p>
    </div>
  );
}

export default UserCard;
