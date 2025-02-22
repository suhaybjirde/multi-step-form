import { FormDispatch } from "../App";
import { FormFields } from "../schemas/formSchema";
import { ZodFormattedError } from 'zod'
import SliderAnimation from "./SliderAnimation";
import InputText from "./InputText";

type stepOneProps = {
  name: string;
  email: string;
  phone: string;
  dispatch: FormDispatch;
  errors: ZodFormattedError<FormFields>;
  validateField: (field: keyof FormFields, value: string) => void;
  prevIndex: number;
  currentIndex: number;
}

const StepOne = ({
  name,
  email,
  phone,
  dispatch,
  errors, 
  validateField,
  prevIndex,
  currentIndex
}:stepOneProps) => {

  return (
    <SliderAnimation prevIndex={prevIndex} currentIndex={currentIndex}>
        <h1 className="font-bold text-3xl text-primary-500">Personal Info</h1>
        <p className="text-neutral-400 py-2">Please provide your name, email and phone number.</p>
        <InputText 
          controledValue={name}
          dispatch={dispatch}
          LabelText="Name *"
          errorMessage={errors['name']?._errors[0]}
          id="name"
          validateField={validateField}
          placeHolder="e.g. Stephen King"
        />
        <InputText 
          controledValue={email}
          dispatch={dispatch}
          LabelText="Email Address *"
          errorMessage={errors['email']?._errors[0]}
          id="email"
          placeHolder="e.g. Stephenking@lorem.come"
          validateField={validateField}
        />
        <InputText 
          controledValue={phone}
          dispatch={dispatch}
          LabelText="Phone Number *"
          errorMessage={errors['phone']?._errors[0]}
          id="phone"
          validateField={validateField}
          placeHolder="e.g. +1 234 567 890"
        />
    </SliderAnimation>
  )
}

export default StepOne