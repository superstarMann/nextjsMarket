import { NextPage } from "next";

const ChatDetail: NextPage = () => {
    return (
      <div className="py-10 px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400"/>
          <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md">
            <p>wie viel kostet ein Haarschnitt bei Ihnen?</p>
          </div>
        </div>
        <div>
          <div />
          <div>ein Männerhaarschnitt kostet 15 Euro, ein Frauenhaarschnitt kostet 30-300 Euro</div>
        </div>
        <div>
          <div />
          <div>fuck you</div>
          <div>fuck you too</div>
        </div>
        <div>
          <div>
            <input type="text" />
            <div>
              <span>&rarr;</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ChatDetail;