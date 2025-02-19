import { FormFields } from "../schemas/formSchema"

type StepFourProps = Pick<FormFields, 'plan' | 'planTime' | 'customizableProfile' | 'largeStorage' | 'onlineService'> & {
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const LiElement = ({
    title,
    yearly,
    price
}: {
    title: string;
    yearly: boolean;
    price: number;
})=> (
    <li className="px-3 py-2 flex items-center justify-between">
        <p className="text-neutral-400">{title}</p>
        <p className="text-primary-500 font-semibold text-sm">{yearly ? `+$${price}0/yr` : `+$${price}/mo`}</p>
    </li>
)

const planPrices = {
    arcade: 9,
    advanced: 12,
    pro: 15
}

const calculateTotal = (customizable: boolean, largeStorage: boolean, onlineService: boolean, plan: FormFields['plan'])=> {
    let total = planPrices[plan]
    if (customizable) total += 2
    if (largeStorage) total += 2
    if (onlineService) total += 1
    return total
}

const StepFour = ({
    customizableProfile,
    setCurrentIndex,
    largeStorage,
    onlineService,
    plan,
    planTime
}: StepFourProps) => {
    const total = calculateTotal(customizableProfile, largeStorage, onlineService, plan)
    const yearly = planTime == 'yearly'
    customizableProfile 
    return (
        <div>
            <h1 className="font-bold text-3xl text-primary-500">Finishing up</h1>
            <p className="text-neutral-400 py-2">Double-check everything looks OK before confirming</p>
            <ul className="mt-4 p-3 bg-neutral-100 rounded-md">
                <li className="flex justify-between items-center p-2 border-b border-neutral-200">
                    <div>
                        <h2 className="capitalize font-bold text-primary-500">{plan} ({planTime})</h2>
                        <button type="button" className="text-neutral-400 underline" onClick={()=> setCurrentIndex(2)}>Change</button>
                    </div>
                    <p className="font-bold text-primary-500 ">{yearly ? `$${planPrices[plan]}0/yr` : `$${planPrices[plan]}/mo`}</p>
                </li>
                {onlineService && 
                    <LiElement 
                        price={1} 
                        title='Online service' 
                        yearly={yearly} 
                    />
                }
                {largeStorage && 
                    <LiElement 
                        price={2} 
                        title='Larger storage' 
                        yearly={yearly} 
                    />
                }
                {customizableProfile && 
                    <LiElement 
                        price={2} 
                        title='Customizable profile' 
                        yearly={yearly} 
                    />
                }
            </ul>
            <div className="flex items-center justify-between px-6">
                <p className="text-neutral-400 text-sm">Total (per {yearly ? 'year' : 'month'})</p>
                <h3 className="font-bold text-primary-400 mt-7">{yearly? `+$${total}0/yr` : `+$${total}/mo`}</h3>
            </div>
        </div>
    )
}

export default StepFour