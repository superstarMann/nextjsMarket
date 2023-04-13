import Button from "@/components/button";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
   <Layout title="" canGoBack>
     <div className="px-5 py-1">
      <div className="mb-8">
        <div className="h-96 rounded-lg bg-slate-300 flex justify-center items-center text-2xl">face</div>
        <div className="py-3 border-b flex items-center space-x-3">
          <div className="w-12 h-12 bg-slate-300 rounded-full"/>
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs font-medium text-gray-700">View profile &rarr;</p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Beauty Hairshop</h1>
          <span className="text-base text-gray-600">Berliner Straße Ass</span>
          <p className="text-sm text-gray-900 mt-1">$90</p>
          <p className="my-5 text-gray-700 border-2 border-gray-400 rounded-lg px-2 py-2 border-dotted text-sm">
          Türkischer Haare<br/>
          Schwarze Haare<br/>
          Weiße Haare<br/>
          Chinesische Haare
          </p>
          <div className="flex items-center justify-between">
            <Button large text={"Buchen & Talk"}/>
            <button className='ml-2 rounded-md p-3 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 '>
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Similar Shops</h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full mb-2 bg-slate-300 "/>
              <h3 className="text-sm text-gray-700 -mb-1">Hübsch Haare</h3>
              <span className="text-xs font-medium text-gray-900">$60</span>
            </div>
          ))}
        </div>
      </div>
    </div>
   </Layout>
  );
};

export default ItemDetail;