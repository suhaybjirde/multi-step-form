import { FormDispatch } from "../App"
import { FormFields } from "../schemas/formSchema"
import CheckBox from "./CheckBox"
import SliderAnimation from "./SliderAnimation";

type StepThreeProps = Pick<FormFields, 'customizableProfile' | 'largeStorage' | 'onlineService' | 'planTime'> & {
  dispatch: FormDispatch;
  prevIndex: number;
  currentIndex: number
}

const StepThree = ({
  customizableProfile,
  dispatch,
  largeStorage,
  onlineService,
  planTime,
  prevIndex,
  currentIndex
}: StepThreeProps) => {
  return (
    <SliderAnimation prevIndex={prevIndex} currentIndex={currentIndex}>
        <h1 className="font-bold text-3xl text-primary-500">Pick add-ons</h1>
        <p className="text-neutral-400 py-2">Add-ons help enhance your gaming experience</p>
        <div className="mt-4 grid gap-4">
          <CheckBox 
            addOnsName='onlineService'
            title="Online service"
            discription="Access to multiplayer games"
            isServiceActive={onlineService}
            planTime={planTime}
            price={1}
            onChange={(e)=> dispatch({onlineService: e.target.checked})}
          />
          <CheckBox 
            addOnsName='largeStorage'
            title="Larger storage"
            discription="Extra 1TB cloud save"
            isServiceActive={largeStorage}
            planTime={planTime}
            price={2}
            onChange={(e)=> dispatch({largeStorage: e.target.checked})}
          />
          <CheckBox 
            addOnsName='customizableProfile'
            title="Larger storage"
            discription="Extra 1TB cloud save"
            isServiceActive={customizableProfile}
            planTime={planTime}
            price={2}
            onChange={(e)=> dispatch({customizableProfile: e.target.checked})}
          />
        </div>
    </SliderAnimation>
  )
}

export default StepThree