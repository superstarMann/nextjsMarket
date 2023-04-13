import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps{
    title?: string;
    canGoBack?: boolean;
    hasTabBar?: boolean;
    children: React.ReactNode;
}

export default function Layout({
    title, 
    canGoBack, 
    hasTabBar, 
    children}: LayoutProps) {
        const router = useRouter();
        const onClick = () => {
            router.back()
        }
    return (
        <div>
            <div className="justify-between bg-white w-full max-w-xl text-lg font-medium py-3 fixed text-gray-700 border-b top-0 flex px-5 items-center">
                {canGoBack ? 
                <button onClick={onClick}>&larr;</button>
                : null }
                {title ? <span>{title}</span>: null}
                <div>{""}</div>
            </div>
            <div className="py-16">{children}</div>
            {hasTabBar ?(
            <nav className="bg-white w-full max-w-xl text-gray-800 text-xs border-t fixed bottom-0 pb-5 py-2 px-5 flex justify-between">
                <Link href="/" className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         fill="none" 
                         viewBox="0 0 24 24" 
                         strokeWidth="1.5" 
                         stroke="currentColor" 
                         className="w-6 h-6">
                        <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span>Home</span>
                </Link>

                <Link href='/community' className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24" 
                         strokeWidth="1.5" 
                         stroke="currentColor" 
                         className="w-6 h-6">
                        <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" 
                        />
                    </svg>
                    <span>Q&A</span>
                </Link>

                <Link href={"/chats"} className="flex flex-col items-center space-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         fill="none" viewBox="0 0 24 24" 
                         strokeWidth="1.5" 
                         stroke="currentColor" 
                         className="w-6 h-6">
                        <path strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" 
                        />
                    </svg>
                    <span>Chats</span>
                </Link>

                <Link href={'/profile'} className="flex flex-col items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" 
                     fill="none" viewBox="0 0 24 24" 
                     strokeWidth="1.5" 
                     stroke="currentColor" 
                     className="w-6 h-6">
                    <path strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                    <span>Profile</span>
                </Link>
                </nav>) : null}
        </div>
    )
}