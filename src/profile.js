
import { ALMProfilePage } from "./externalLib/components/Profile/ALMProfilePage"
export default class Profile{
    render(){
        return(
            <div
            class="profile__container"
            data-section1-title="Organization"
            data-section1-description="Section 1 description"
            data-section1-active-fields="Location,Department"
            data-section2-title="Role"
            data-section2-description="Section 2 description"
            data-section2-active-fields="hobby, new location"
          ><ALMProfilePage/></div>
        )
    }
}