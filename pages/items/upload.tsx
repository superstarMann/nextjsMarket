import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="Upload Product">
      <form className="p-4 space-y-4">
      <div> 
          <label className="w-full flex items-center text-gray-600 hover:text-orange-500 hover:border-orange-500 justify-center border-2 border-dashed border-gray-300 h-56 rounded-xl">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="file" className="hidden" />
          </label>
      </div>
      <Input required 
             label="Name" 
             name="name" 
             type="text"/>
      <Input required
             label="Price"
             placeholder="0.00"
             name="price"
             type="text"
             kind="price"
            />
            <TextArea name="description" label="Description"  />
            <Button text="Upload"/>
      </form>
    </Layout>
  );
};

export default Upload;

/*

 <div className="my-5">
        <label className="mb-1 block text-sm font-medium text-gray-700" 
               htmlFor="price">Price
        </label>
        <div className="rounded-md relative shadow-sm items-center justify-center mt-1 flex">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
           className="appearance-none pl-6 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
           id='price' 
           type="text" 
           placeholder="0.00" />
          <div className="absolute right-0 pointer pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">Description</label>
          <textarea rows={4} className='mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500' />
      </div>
      <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">Upload product</button>
    

      */