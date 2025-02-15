import Step from "./Step"

type AsideProps = {
  currentIndex: number;
}

const AsideSteps = [
  {step: 1, title: 'Your Info'},
  {step: 2, title: 'Select Plan'},
  {step: 3, title: 'Add-ons'},
  {step: 4, title: 'Summary'}
]
function Aside({ currentIndex }:AsideProps) {
  return (
    <div className="basis-1/3 rounded-md px-6 py-6 grid content-start gap-4 bg-[url('/bg-sidebar-desktop.svg')] bg-no-repeat bg-contain">
      {AsideSteps.map(step => <Step key={step.step} step={step.step} title={step.title} isActive={step.step === currentIndex+1}/>)}
    </div>
  )
}

export default Aside