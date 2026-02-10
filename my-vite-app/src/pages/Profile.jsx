import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await API.get("/auth/profile");
      setUser(data);
    };

    fetchProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Profile</h2>

      <p>
        <b>Name:</b> {user.name}
      </p>

      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default Profile;
