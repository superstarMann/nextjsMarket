
interface ButtonProps{
    large?: boolean;
    text: string;
    [key: string] : any;
}

export default function Button ({
    large = false,
    text,
    onClick,
    ...rest
}: ButtonProps) {
    return(
        <button {...rest}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none py-2">
            {text}
        </button>
    )
} 