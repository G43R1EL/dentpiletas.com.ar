import {StepControl} from "./Control/StepControl";
import {StepDescriptionContainer} from "./Description/StepDescriptionContainer";
import {StepImgContainer} from "./ImageContainer/StepImgContainer";

export const StepSlider = () => {
    return (
        <div className="step__slider">
            <StepControl />
            <div>
                <StepImgContainer />
                <StepDescriptionContainer />
            </div>
        </div>
    )
}