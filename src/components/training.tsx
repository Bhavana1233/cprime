import { PrimeTrainingPage } from "../adobe-learning-manager-components/ui.frontend/src/almLib";

const Training = () => {
    return (
        <div
        className="training__page__container"
        data-show-description="true"
        data-show-author-info="true"
        data-show-enroll-deadline="true">
       <PrimeTrainingPage/>   
      </div>
    );
};
export default Training;