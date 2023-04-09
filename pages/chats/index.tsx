import { NextPage } from "next";

const Chats: NextPage = () => {
    return(
        <div className="pt-10">
            {[1,1,1,1,1,1,1,1].map((_, i) => (
                <div key={i} className="flex mt-2 mb-3 py-2 px-4 cursor-pointer pb-3 border-b items-center space-x-3 last:border-b-0">
                <div className="w-10 h-10 rounded-full bg-slate-300" />
                    <div>
                    <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
                    <p className="text-xs font-medium text-gray-500">
                      yap, Wann kommen Sie hier an?
                    </p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Chats;