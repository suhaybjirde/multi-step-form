import { Actions } from "../App";
import { FormFields } from "../schemas/formSchema";
import { string, ZodFormattedError } from 'zod'

type stepOneProps = {
  name: string;
  email: string;
  phone: string;
  dispatch: React.Dispatch<Actions>;
  errors: ZodFormattedError<FormFields>;
  validateField: (field: keyof FormFields, value: string) => void;
}

const StepOne = ({
  name,
  email,
  phone,
  dispatch,
  errors, 
  validateField
}:stepOneProps) => {

  return (
    <div>
        <h1 className="font-bold text-3xl text-primary-500">Personal Info</h1>
        <p className="text-neutral-400 py-2">Please provide your name, email and phone number.</p>
        <div className="my-5 group">
            <span className="flex justify-between"><label htmlFor="name" className="text-primary-500">Name *</label> {errors.name?._errors && <span className="text-primary-100 font-semibold text-sm group-focus-within:hidden">{errors.name._errors[0]}</span>}</span>
            <input value={name} onBlur={() => validateField('name', name)} onChange={(e)=> dispatch({name: e.target.value})} type="text" name="name" id="name" placeholder="e.g. Stephen King" autoComplete="off" className={`border ${errors.name?._errors[0] ? "border-primary-100" : "border-neutral-300" } mt-1 w-full p-2 rounded-md focus:outline-none focus:border-primary-400`}/>
        </div>
        <div className="my-5 group">
            <span className="flex justify-between"><label htmlFor="email" className="text-primary-500">Email Address *</label> {errors.email?._errors && <span className="text-primary-100 font-semibold text-sm group-focus-within:hidden">{errors.email._errors[0]}</span>}</span>
            <input value={email} onBlur={() => validateField('email', email)} onChange={(e)=> dispatch({email: e.target.value})} type="text" name="email" id="email" placeholder="e.g. Stephenking@lorem.come" autoComplete="off" className={`border ${errors.email?._errors[0] ? "border-primary-100" : "border-neutral-300" } mt-1 w-full p-2 rounded-md focus:outline-none focus:border-primary-400`}/>
        </div>
        <div className="my-5 group">
            <span className="flex justify-between"><label htmlFor="phone" className="text-primary-500">Phone Number *</label> {errors.phone?._errors && <span className="text-primary-100 font-semibold text-sm group-focus-within:hidden text-right">{errors.phone._errors[0]}</span>}</span>
            <input value={phone} onBlur={() => validateField('phone', phone)} onChange={(e)=> dispatch({phone: e.target.value})} type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" autoComplete="off" className={`border ${errors.phone?._errors[0]  ? "border-primary-100" : "border-neutral-300" } mt-1 w-full p-2 rounded-md focus:outline-none focus:border-primary-400`}/>
        </div>
    </div>
  )
}

export default StepOne