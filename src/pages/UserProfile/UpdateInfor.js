
import { useState} from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../api/apiUpdateUser";


export default function UpdateInfor(props) {
    const currentUser = useSelector((state) => state.login.login?.currentUser)
    const id = currentUser.UserID
    const [name, setName] = useState(currentUser.Name)
    const [password, setPassword] = useState(currentUser.PassWord)
    const [dob, setDob] = useState(moment(currentUser.DoB).utc().format('YYYY/MM/DD'))
    const dispatch = useDispatch()
    const handleUpdate = props.handleUpdate
    const isConfirm = props.isConfirm

    const handleSend = () => {
      let dataUpdate = {id, name, password, dob}
      updateUser(dataUpdate, dispatch)
      setTimeout(() => 
      handleUpdate()
      , 1000)
    }
    if (currentUser != null && isConfirm) {
    return (
    <div className="flex flex-col w-[1000] mx-10 items-center sm:justify-center sm:pt-0 bg-gray-50">
              <div className="my-5">
                      <h3 className="text-4xl font-bold text-gray-800">
                          Hi!
                      </h3>
              </div>
              <div className="w-full p-6 mb-10 m-auto bg-white rounded-md border-2 border-indigo-900 lg:max-w-xl">
                  <div>
                      <div className='flex flex-row'>
                            <label htmlFor="name" className="block p-2 text-sm font-medium text-gray-700 undefined min-w-[110px]">
                              Name:
                            </label>
                          
                            <input name='name' type = 'text' 
                            className="block p-2 w-full text-sm text-gray-800 bg-white  border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className='mt-4 flex flex-row'>
                            <label name='password' className="block p-2 text-sm font-medium text-gray-700 undefined min-w-[110px]">
                              Password:
                            </label>
                            <input type = 'password'
                                  className="block p-2 w-full text-sm text-gray-800  bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                                 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-4 flex flex-row'>
                            <label htmlFor='dob' className="block p-2 text-sm font-medium text-gray-700 undefined min-w-[110px]">
                            Date of Birth:
                            </label>
                            <input name="dob"
                                    type='date'
                                  className="block p-2 w-full text-sm text-gray-800  bg-white border rounded-md border-cyan-700 ring-neutral-400 focus:outline-none focus:ring focus:ring-opacity-40 "
                                  value={dob}
                                  onChange={e => setDob(e.target.value)}
                            />
                        </div>
                  </div>
              </div>
              <div className="flex flex-row w-[1000] items-center justify-center gap-x-6">
                <button className='mt-4 p-2 w-20 text-center bg-blue-800 text-white rounded border-purple-800 border-2 cursor-pointer'
                onClick={handleSend}
                >Send</button>
                <a className='mt-4 p-2 w-20 text-center bg-blue-800 text-white  rounded border-purple-800 border-2 cursor-pointer'
                href = '/profile'
                >Return</a>
            </div>
          </div>
    )
    }
}