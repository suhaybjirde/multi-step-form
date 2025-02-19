import { FormFields } from "../schemas/formSchema"

type CustomCheckBoxProps = {
  title: string;
  discription: string;
  price: number;
  planTime: FormFields['planTime'],
  onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void;
  addOnsName: keyof Pick<FormFields, 'largeStorage' | 'onlineService' | 'customizableProfile'>;
  isServiceActive: boolean;
}


const CustomCheckBox = ({
  discription,
  title,
  planTime,
  price,
  onChange,
  addOnsName,
  isServiceActive
}: CustomCheckBoxProps) => {
  return (
    <label htmlFor={addOnsName} className="relative">
        <input onChange={onChange} checked={isServiceActive} type="checkbox" id={addOnsName}className="appearance-none border border-solid border-neutral-300 shadow-sm rounded-md peer absolute w-6 h-6 top-6 left-5 
             bg-white checked:bg-primary-400 focus:outline-none focus-visible:ring-2
             checked:after:content-['✓'] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:text-white"/>
        <div className="p-4 outline outline-1 rounded-md peer-checked:outline-primary-400 outline-neutral-300 w-full flex items-center shadow-sm">
            <div className="ml-10">
                <h2 className="font-bold text-primary-500">{title}</h2>
                <p className="text-neutral-400 text-sm">{discription}</p>
            </div>
            <p className="text-primary-400 text-sm ml-auto font-semibold">{planTime === 'monthly' ? `$${price}/mo` : `$${price}0/yr`}</p>
        </div>
    </label>
  )
}

export default CustomCheckBox