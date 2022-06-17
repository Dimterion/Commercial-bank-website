import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <div>You must sign in.</div>;
  }

  return <div>Profile page</div>;
}

export default Profile;
