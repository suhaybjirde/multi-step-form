type SwitchProps = {
    yearly: boolean;
    onchange: (event: React.ChangeEvent<HTMLInputElement>)=> void
}


const Switch = ({
    yearly,
    onchange
}: SwitchProps) => {
  return (
    <>
        <input onChange={onchange} checked={yearly} className='sr-only peer' id="switch" type="checkbox" name="planTime"/>
        <label 
            htmlFor="switch"
            className={`peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-primary-100 ${yearly ? 'peer-checked:after:translate-x-6' : 'peer-checked:after:translate-x-0'} after:transition after:duration-300 bg-primary-500 w-12 h-6 rounded-full relative after:w-4 after:h-4 after:rounded-full after:bg-white after:absolute after:left-1 after:top-1 cursor-pointer`}
        ></label>
    </>
  )
}

export default Switch