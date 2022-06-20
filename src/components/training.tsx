import { PrimeTrainingPage } from "./../--force/components/TrainingOverview/PrimeTrainingPage";

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