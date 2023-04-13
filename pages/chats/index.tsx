import Layout from "@/components/layout";
import { NextPage } from "next";
import Link from "next/link";

const Chats: NextPage = () => {
    return(
        <Layout title="Chat" hasTabBar>
            <div>
            {[1,1,1,1,1,1,1,1].map((_, i) => (
                <Link href={`/chats/${i}`} key={i} className="flex mb-3 py-2 px-4 cursor-pointer pb-3 border-b items-center space-x-3 last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-slate-300" />
                    <div>
                    <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
                    <p className="text-xs font-medium text-gray-500">
                      yap, Wann kommen Sie hier an?
                    </p>
                </div>
            </Link>
            ))}
        </div>
        </Layout>
    )
}

export default Chats;