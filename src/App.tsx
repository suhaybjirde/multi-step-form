import { useReducer, useState } from "react"
import Aside from "./components/Aside"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import { FormFields, formSchema } from "./schemas/formSchema"
import { ZodFormattedError } from "zod"
import StepThree from "./components/StepThree"
import StepFour from "./components/StepFour"
import Thanks from "./components/Thanks"

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
  if ('onlineService' in action)
    return {...state, onlineService: action.onlineService}
  if ('largeStorage' in action)
    return {...state, largeStorage: action.largeStorage}
  if ('customizableProfile' in action)
    return {...state, customizableProfile: action.customizableProfile}
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
  const [currentIndex, setCurrentIndex] = useState(0)
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
    <StepThree
      customizableProfile={formData.customizableProfile}
      dispatch={dispatch}
      largeStorage={formData.largeStorage}
      onlineService={formData.onlineService}
      planTime={formData.planTime}
    />,
    <StepFour 
      customizableProfile={formData.customizableProfile}
      largeStorage={formData.largeStorage}
      onlineService={formData.onlineService}
      plan={formData.plan}
      planTime={formData.planTime}
      setCurrentIndex={setCurrentIndex}
    />,
    <Thanks />
  ]

  const length = steps.length - 1
  const lastIndex = length == currentIndex

  function validateField(fieldName: keyof FormFields, value: string) {
    const fieldSchema = formSchema.shape[fieldName]; // Get the specific field's schema
    const result = fieldSchema.safeParse(value);

    setError((prevErrors) => {
      // prevents to add prevError[feildName] key in the object if fieldName is not already in the error object for re-render perfomance
      const prev = {...prevErrors}
      if (!result.success)
        prev[fieldName] = result.error.format()
      else
        if (prev[fieldName])
          prev[fieldName] = intailError
      return prev
    })
  }


  function goBack() {
    setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validation = formSchema.safeParse(formData)
    if (!validation.success) 
      setError(validation.error.format())
    else {
      setError(intailError)
      setCurrentIndex(prevIndex => prevIndex < length ? prevIndex + 1 : prevIndex)
    }
  }

  return (
    <main className="md:rounded-lg md:p-3 bg-white w-full md:max-w-[850px] h-full">
      <section className="flex  flex-col md:flex-row md:min-h-[520px]">
        <Aside currentIndex={currentIndex}/>
        <div className="md:h-[350px]  w-full  max-w-[440px] md:max-w-full p-10 md:basis-2/3  absolute md:relative md:top-1 md:left-1  bg-white  top-20  left-1/2 md:-translate-x-0 md:-translate-y-0  -translate-x-1/2  rounded-md md:rounded-none  min-h-[400px] md:min-h-[70vh]  shadow-md md:shadow-none">
          {lastIndex ? <Thanks /> : 
          <form className=" h-full min-h-full relative" onSubmit={handleSubmit}>
            {steps[currentIndex]}
            <div className="flex  -bottom-32 py-4 md:-bottom-20 absolute w-full">
              {currentIndex > 0 && <button onClick={goBack} type="button" className="font-bold text-neutral-400">Go Back</button>}
              {currentIndex == length - 1 ? <button className="bg-primary-400 text-white py-2 px-5 rounded-md font-bold ml-auto">Confirm</button> : <button className="bg-primary-500 text-white py-2 px-3 rounded-md font-bold ml-auto">Next Step</button>}
            </div>
          </form>}
        </div>
      </section>
    </main>
  )
}

export default App