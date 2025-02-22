import { FormDispatch } from '../App'
import advanceIcon from '../assets/images/icon-advanced.svg'
import arcadeIcon from '../assets/images/icon-arcade.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { FormFields } from '../schemas/formSchema'
import PlanObtion from './PlanObtion'
import SliderAnimation from './SliderAnimation'
import Switch from './Switch'

type StepTwoProps = Pick<FormFields, 'plan' | 'planTime'> & {
  dispatch: FormDispatch;
  currentIndex: number;
  prevIndex: number;
}
  
const StepTwo = ({
  plan,
  planTime,
  dispatch,
  currentIndex,
  prevIndex
}: StepTwoProps) => {
  return (
    <SliderAnimation prevIndex={prevIndex} currentIndex={currentIndex}>
        <h1 className="font-bold text-3xl text-primary-500">Select your plan</h1>
        <p className="text-neutral-400 py-2">You have the option of montyly or yearly billing</p>
        <div className='flex w-full gap-3 mt-10  flex-col md:flex-row'>
          <PlanObtion
            img={arcadeIcon}
            dispatch={dispatch}
            plan={plan}
            planTime={planTime}
            value='arcade'
            price={9}
          />
          <PlanObtion
            img={advanceIcon}
            dispatch={dispatch}
            plan={plan}
            planTime={planTime}
            value='advanced'
            price={12}
          />
          <PlanObtion
            img={proIcon}
            dispatch={dispatch}
            plan={plan}
            planTime={planTime}
            value='pro'
            price={15}
          />
        </div>
        <div className='bg-neutral-100 p-3 mt-7 flex items-center justify-center gap-4'>
          <p className={`${planTime == 'monthly' ? 'text-primary-500' : 'text-neutral-400'} font-bold`}>Monthly</p>
          <Switch 
            yearly={planTime == 'yearly'}
            onchange={(e)=> dispatch({planTime: e.target.checked ? 'yearly' : 'monthly'})}
          />
          <p className={`font-bold ${planTime == 'yearly' ? 'text-primary-500' : 'text-neutral-400'} font-bold`}>Yearly</p>
        </div>
    </SliderAnimation>
  )
}

export default StepTwo