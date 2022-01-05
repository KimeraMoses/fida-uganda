import "./Text.css";

type TextProps = {
    children: React.ReactNode;
    variant?: "display_large" | "display_medium" | "display_small" | "headline_large" | "headline_medium" | "headline_small" |"title_large" | "title_medium" | "title_small" | "body_large" | "body_medium" | "body_small" | "label_large" | "label_medium" | "label_small";
}

function Text({children, variant = "body_large"}: TextProps) {
    if (!variant) {
    return (
        <p className={variant}>
            {children}
        </p>
    )}
    if (variant === "display_large" || variant === "display_medium" || variant === "display_small") {
    return (
        <h1 className={variant}>
            {children}
        </h1>
    )}

    if (variant === "headline_large" || variant === "headline_medium" || variant === "headline_small") {
        return (
            <h3 className={variant}>
                {children}
            </h3>)
    }

    if (variant === "title_large" || variant === "title_medium" || variant === "title_small") {
        return (
            <h5 className={variant}>
                {children}
            </h5>)
    }

    return (
        <p className={variant}>
            {children}
        </p>
    )

}

export default Text;
