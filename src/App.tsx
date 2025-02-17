import { useReducer, useState } from "react"
import Aside from "./components/Aside"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import { FormFields, formSchema } from "./schemas/formSchema"
import { ZodFormattedError } from "zod"

export type Actions = {
  [k in keyof FormFields]: {[P in k]: FormFields[k]}
}[keyof FormFields]

export type FormDispatch = React.Dispatch<Actions>;

function formReducer(state: FormFields, action: Actions): FormFields {
  if ('name' in action)
    return {...state, name: action.name}
  if ('email' in action)
    return {...state, email: action.email}
  if ('phone' in action)
    return {...state, phone: action.phone}
  if ('plan' in action)
    return {...state, plan: action.plan}
  if ('planTime' in action)
    return {...state, planTime: action.planTime}
  return state
}


const intailState: FormFields = {
  name: "", 
  email: "", 
  phone: "",
  plan: "arcade",
  planTime: 'monthly',
  onlineService: true,
  largeStorage: true,
  customizableProfile: false
}

const intailError = { _errors: []}
function App() {
  const [formData, dispatch] = useReducer(formReducer, intailState)
  const [currentStep, setCurrentIndex] = useState(0)
  const [error, setError] = useState<ZodFormattedError<FormFields>>(intailError)

  const steps = [
    <StepOne 
      errors={error} 
      name={formData.name} 
      email={formData.email} 
      phone={formData.phone} 
      dispatch={dispatch}
      validateField={validateField}
    />,
    <StepTwo 
      plan={formData.plan}
      dispatch={dispatch}
      planTime={formData.planTime}
    />,
  ]

  const length = steps.length - 1

  function goNext() {
    const validation = formSchema.safeParse(formData)
    if (!validation.success) 
      setError(validation.error.format())
    else {
      setError(intailError)
      setCurrentIndex(prevIndex => prevIndex < length ? prevIndex + 1 : prevIndex)
    }
  }

function validateField(fieldName: keyof FormFields, value: string) {
  const fieldSchema = formSchema.shape[fieldName]; // Get the specific field's schema
  const result = fieldSchema.safeParse(value);

  setError((prevErrors) => ({
    ...prevErrors,
    [fieldName]: result.success ? intailError : result.error.format(),
  }));
}


  function goBack() {
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <main className="rounded-lg p-3 bg-white w-full max-w-[850px] h-full">
      <section className="flex min-h-[500px]">
        <Aside currentIndex={currentStep}/>
        <div className="p-10 basis-2/3">
          <form className="h-full relative" onSubmit={handleSubmit}>
            {steps[currentStep]}
            <div className="flex bottom-0 absolute w-full">
              {currentStep > 0 && <button onClick={goBack} type="button" className="font-bold text-neutral-400">Go Back</button>}
              <button onClick={goNext} className="bg-primary-500 text-white p-2 rounded-md font-bold ml-auto">Next step</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default App