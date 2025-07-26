"use client";


type TButtonProps = {
    type?: "button" | "submit" | "reset";
    text?: string;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined, href?: string) => void;
    href?: string;
    icon?: React.ReactNode;
}

export const Button = ({ type, text, className, onClick, href, icon }: TButtonProps & { href?: string }) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (onClick && href) {
            onClick(e, href);
        } else {
            onClick && onClick(e);
        }
    };

    const baseClasses = "cursor-pointer text-center w-full md:w-[min-content] text-[14px] md:text-[16px] whitespace-nowrap font-[500] transition ease-in duration-[.3s]";

    return (
        <button type={type || "button"} className={`${baseClasses} ${className}`} onClick={handleClick}>
            <div className="flex items-center gap-[10px] justify-center">
                {icon && icon}
                {text || "Button Text"}
            </div>
        </button>
    );
};
