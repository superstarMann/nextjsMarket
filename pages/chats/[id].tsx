import { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
      <div className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400"/>
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
            <p>Haben Sie schon einmal asiatische Haare geschnitten?</p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
            <p>Ich schneide nur deutsche Haare</p>
            </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md">
          <p>fuck you</p>
          </div>
        </div>
        <div className="fixed px-4 py-4 w-full mx-auto max-w-md bottom-0 inset-x-0">
          <div className="flex relative items-center">
            <input type="text" className="pr-16 shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500" />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button className="focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 flex items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ChatDetail;