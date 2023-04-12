import { NextPage } from "next";

const EditProfile : NextPage = () => {
    return(
        <div className="py-10 px-4 space-y-4">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-full bg-gray-500"/>
                <label 
                htmlFor="picture" 
                className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
                    Change Photo
                    <input 
                    id="picture"
                    type="file" 
                    className="hidden"/>
                </label>
            </div>
            <div className="space-y-1">
                <label 
                htmlFor="email"
                className="text-sm font-medium text-gray-700 mt-2">
                    Email Adress
                </label>
                    <input 
                    id="email"
                    type="email" 
                    className="appearance-none w-full shadow-sm rounded-lg mt-2 border-gray-300 bg-gray-50 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500" 
                    required /> 
            </div>
            <div className="space-y-1">
                <label 
                htmlFor="phone"
                className="text-sm font-medium text-gray-700 mt-2">
                    Phone Number
                </label>
                <div className="flex rounded-md shadow-sm mt-2">
                <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
                    +49</span>
                <input type="number"
                 className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                 required />
              </div>
            </div>
            <button className="mt-7 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
            update Profile
          </button>
        </div>
    )
}

export default EditProfile