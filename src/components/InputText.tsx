import { Actions, FormDispatch } from "../App";
import { FormFields } from "../schemas/formSchema";

type InputTextProps = {
    controledValue: string;
    errorMessage: string | undefined;
    dispatch: FormDispatch;
    validateField: (field: keyof FormFields, value: string) => void;
    LabelText: string,
    id: keyof FormFields;
    placeHolder: string;
}

const InputText = ({
    controledValue,
    errorMessage,
    dispatch,
    validateField,
    LabelText,
    id,
    placeHolder
}: InputTextProps) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;

        let newValue: string | boolean;
        if (type === "checkbox") {
            newValue = checked;  // Handle checkboxes
        } else if (type === "radio") {
            newValue = value;    // Handle radio buttons
        } else {
            newValue = value;    // Handle text
        }

        dispatch({ [name]: newValue } as Actions);
    }
    return (
        <div className="my-5 group">
            <span className="flex justify-between"><label htmlFor={id} className="text-primary-500">{LabelText}</label> {errorMessage && <span className="text-primary-100 font-semibold text-sm group-focus-within:hidden">{errorMessage}</span>}</span>
            <input value={controledValue} name={id} onBlur={() => validateField(id, controledValue)} onChange={handleChange} type="text" id={id} placeholder={placeHolder} autoComplete="off" className={`border ${errorMessage ? "border-primary-100" : "border-neutral-300" } mt-1 w-full p-2 rounded-md focus:outline-none focus:border-primary-400`}/>
        </div>
    )
}

export default InputText