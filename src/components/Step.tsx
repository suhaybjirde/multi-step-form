type StepProps = {
    step: number;
    title: string;
    isActive?: boolean;
}

const Step = ({ step, title, isActive }: StepProps) => {

    return (
        <div className=" pb-20 md:pb-0 flex gap-3 items-center uppercase">
            <span className={`${isActive ? "bg-primary-200 text-primary-500 border-primary-200" : "text-white border-white"} rounded-full w-7 h-7 border flex items-center justify-center `}>{step}</span>
            <div className=" hidden md:block">
                <span className="text-sm text-neutral-300">step {step}</span>
                <h2 className="leading-4 font-extrabold text-neutral-100 text-sm">{title}</h2>
            </div>
        </div>
    )
}

export default Step