import ActiveFieldsContainter from "../Components-almLib/components/ActiveFields/ActiveFieldsContainer";
import { ALMSkillComponent } from "../Components-almLib/components/ALMSkills";
import ALMUserProfile from "../Components-almLib/components/Profile/ALMUserProfile/ALMUserProfile";

const Profile = () =>{
  return(
    <div
    className="profile__container"
  ><ALMUserProfile/>
  <ALMSkillComponent/>
  <div
    className="activeFields__container"
    data-section1-title="Organization"
    data-section1-description="Section 1 description"
    data-section1-active-fields="Location,Department"
    data-section2-title="Role"
    data-section2-description="Section 2 description"
    data-section2-active-fields="hobby, new location"
    ><ActiveFieldsContainter/>
    </div>
  </div>
  );
};
export default Profile;