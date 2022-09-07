import moment from 'moment'
import {useSelector} from 'react-redux'
import { inforUser } from '../../redux/selector'
export function Infor() {
    const currentUser = useSelector(inforUser)
    return (
        <div className="flex flex-col w-[1000] mx-10 items-center justify-between sm:justify-center sm:pt-0 bg-gray-50 overflow-hidden">
              <div className="my-5">
                      <h3 className="text-4xl font-bold text-gray-800">
                          Hi!
                      </h3>
              </div>
              <div className="w-full p-6 mb-10 m-auto bg-white rounded-md border-2 border-indigo-900 lg:max-w-xl">
                  <div>
                      <div className='flex flex-row'>
                            <div className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[135px]">
                              Name:
                            </div>
                          
                            <div className="block w-full text-sm text-gray-800 bg-white  ">
                                {currentUser.Name}
                            </div>
                        </div>
                        <div className="mt-4 flex flex-row">
                            <div className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[135px]">
                              Email:
                            </div>
                            <div
                                  className="block w-full text-sm text-gray-800 bg-white  ">
                                    {currentUser.Email}
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row'>
                            <div className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[135px]">
                              Password:
                            </div>
                            <div
                                  className="block w-full text-sm text-gray-800 bg-white  ">
                                    {currentUser.PassWord}
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row'>
                            <div className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[135px]">
                            Date of Birth:
                            </div>
                            <div
                                  className="block w-full text-sm text-gray-800 bg-white  ">
                                    {moment(currentUser.DoB).format('DD/MM/YYYY')}
                                </div>
                        </div>
                        <div className='mt-4 flex flex-row'>
                            <div
                              className="block text-sm font-medium text-gray-700 undefined sm:min-w-[160px] w-[135px]"
                          >
                              TotalMoney:
                          </div>
                              <div
                                  className="block w-full text-sm  text-gray-800 bg-white ">
                                    {currentUser.TotalMoney} VND
                                </div>
                      </div>
                  </div>
              </div>
          </div>
    )
}