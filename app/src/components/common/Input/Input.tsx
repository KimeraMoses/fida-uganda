import "./Input.css";

type InputProps = {
    placeholder?: string,
    name?: string;
    label?: string;
    value?: string;
    handleChange?: () => void;
    type?: "text" | "number" | "password" | "email" | "tel" | "date" | "time" | "datetime-local" | "month" | "week" | "url" | "search" | "color" | "file" | "range" | "radio" | "checkbox";
}

function Input({name, label, value, placeholder, handleChange, type="text"}: InputProps) {
    return (
        <div className="Input">
            {label && <label className="Input-label" htmlFor={name}>{label}</label>}
            <input className="Input-input" type={type} placeholder={placeholder} name={name} value={value} onChange={handleChange} />
        </div>
    )
}

export default Input;
