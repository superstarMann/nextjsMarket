import Layout from "@/components/layout";
import { NextPage } from "next";

const Community: NextPage = () => {
    return (
        <Layout title="Q&A" hasTabBar>
          <div className="py-2 space-y-8 px-4">
          <div className="flex flex-col items-start">
            <span className="flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ">
                Alle Fragen
            </span>
            <div className="mt-4 text-gray-700">
              <span className="text-orange-500 font-medium">
                Q.</span> Wo ist der berühmteste Friseur in Frankfurt?
            </div>
            <div className="mt-5 flex items-center justify-end w-full font-medium text-xs">
              <span className="text-gray-900 pr-2">{`ID: ${"Lee" /*userName */}`} 🇰🇷</span>
              <span className="text-gray-500">18h</span>
            </div>
            <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full">
              <span className="flex space-x-2 items-center text-sm ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>Ich auch 1</span>
              </span>
              <span className="flex space-x-2 items-center text-sm ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>Antwort 1</span>
              </span>
            </div>
          </div>
          <button className="fixed bottom-24 text-white right-5 bg-orange-400 rounded-full p-4">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </button>
        </div>
        </Layout>
      );
    };

export default Community;