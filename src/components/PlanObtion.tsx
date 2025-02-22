import { FormDispatch } from "../App"
import { FormFields } from "../schemas/formSchema"

type PlanObtionProps = Pick<FormFields, 'plan' | 'planTime'> & {
    dispatch: FormDispatch;
    value: FormFields['plan']
    img: string,
    price: number
}

const PlanObtion = ({
    dispatch,
    value,
    plan,
    planTime,
    price,
    img,
}: PlanObtionProps) => {
  return (
    <label htmlFor={value} className="basis-1/3 cursor-pointer">
        <input checked={plan == value} onChange={()=> dispatch({plan: value})} className="peer sr-only" type="radio" name="plan" id={value} />
        <div className="peer-focus-visible:border-primary-400 md:h-[170px] p-4 flex sm:flex-row md:flex-col sm:gap-3 md:gap-0 border border-neutral-300 rounded-md peer-checked:border-primary-400">
            <img className='self-start' src={img} alt={`$${value} icon`} />
            <span className='mt-auto'>
                <h3 className="font-bold text-primary-500">{value}</h3>
                <p className='text-neutral-400 text-sm'>{planTime === 'monthly' ? `$${price}/mo` : `$${price}0/yr`}</p>
                {planTime === 'yearly' && <p className="text-primary-500 text-sm font-medium">2 months free</p>}
            </span>
        </div>
    </label>
  )
}

export default PlanObtion