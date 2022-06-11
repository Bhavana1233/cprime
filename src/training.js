
import { PrimeTrainingPage } from "./externalLib"
export default class Training{
    render(){
        return(
            <div
            class="training__page__container"
            data-show-description="true"
            data-show-author-info="true"
            data-show-enroll-deadline="true"
          ><PrimeTrainingPage/></div>
        )
    }
}