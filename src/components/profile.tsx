import { ALMUserProfile } from "./../--force/components/UserProfile";

const Profile = () =>{
  return(
    <div
    className="profile__container"
    data-section1-title="Organization"
    data-section1-description="Section 1 description"
    data-section1-active-fields="Location,Department"
    data-section2-title="Role"
    data-section2-description="Section 2 description"
    data-section2-active-fields="hobby, new location"
  ><ALMUserProfile/></div>
  );
};
export default Profile;