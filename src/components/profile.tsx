import { ActiveFieldsContainter } from "../adobe-learning-manager-components/ui.frontend/src/almLib";
import { ALMSkillComponent } from "../adobe-learning-manager-components/ui.frontend/src/almLib";
import { ALMUserProfile } from "../adobe-learning-manager-components/ui.frontend/src/almLib";

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