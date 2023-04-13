import Link from "next/link";

interface FloatingButton {
    children: React.ReactNode;
    href: string;
}

export default function FloatingButton ({href, children} : FloatingButton){
    return(
        <Link href={href} legacyBehavior>
            <a className="fixed hover:bg-orange-500 border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-24 right-5 shadow-xl bg-orange-400 rounded-full w-10 h-10 flex items-center justify-center text-white">
                {children}
            </a>
        </Link>
    )
}

