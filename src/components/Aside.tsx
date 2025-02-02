import Step from "./Step"

function Aside() {
  return (
    <div className="basis-1/3 rounded-md px-6 py-6 grid content-start gap-4 bg-[url('/bg-sidebar-desktop.svg')] bg-no-repeat bg-contain">
      <Step isActive step={1} title="your info"/>
      <Step step={1} title="your info"/>
      <Step step={1} title="your info"/>
      <Step step={1} title="your info"/>
    </div>
  )
}

export default Aside