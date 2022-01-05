import "./Button.css";

type ButtonProps = {
    label: string;
    type?: "button" | "submit" | "reset";
}

function Button({label, type="button"}: ButtonProps) {
    return (
        <button type={type}>
            <span className="Button-label">{label}</span>
        </button>
    )
}

export default Button
