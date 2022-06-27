import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { getProfile, editProfile } from "../../features/profile/profileSlice";
import "./profile.css";

/**
 * Profile page
 */

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Accessing state for the authentication and getting the profile data.
  const { user } = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);

  // Checking the profile information through the console.
  // console.log(profile);

  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Checking if user is logged in to be able to access the profile page.
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    dispatch(getProfile());
  });

  // Functions to change name and open/close the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length >= 1 && lastName.length >= 1) {
      dispatch(editProfile({ firstName, lastName }));
      setFirstName("");
      setLastName("");
      setIsEdit(false);
    } else {
      toast.error(
        "Please enter a new first and last name to update this information."
      );
    }
  };

  const openForm = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const closeForm = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <main className="main bg-dark">
      {isEdit ? (
        <div className="header">
          <h1>Welcome back</h1>
          <form onSubmit={handleSubmit}>
            <div className="header-fields">
              <input
                id="firstNameInput"
                type="text"
                placeholder={profile.firstName}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.currentTarget.value);
                }}
              />
              <input
                id="lastNameInput"
                type="text"
                placeholder={profile.lastName}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-buttons-block">
              <button className="edit-button" type="submit">
                Save
              </button>
              <button className="edit-button" onClick={closeForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profile.firstName} {profile.lastName}!
          </h1>
          <button className="edit-button" onClick={openForm}>
            Edit Name
          </button>
        </div>
      )}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
