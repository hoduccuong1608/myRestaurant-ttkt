import {useSelector} from 'react-redux'
import moment from 'moment'
function UserProfile() {
  const currentUser = useSelector((state) => state.login.login?.currentUser)
  console.log(currentUser)
  console.log(moment(currentUser.DoB).utc().format('MM/DD/YYYY'))
    return (
      <div className="inline-block w-full my-16 h-auto mx-10 ">
        <div className='relative mt-7 justify-items-center flex flex-col border-2 overflow-hidden'>
          <div className='flex flex-row text-xl'>
            <div className='w-32'>Name:</div>
            <div>{currentUser.Name}</div>
          </div>
          <div className='flex flex-row text-xl'>
            <div className='w-32'>Email:</div>
            <div>{currentUser.Email}</div>
          </div>
          <div className='flex flex-row text-xl'>
            <div className='w-32'>Password:</div>
            <div>{currentUser.PassWord}</div>
          </div>
          <div className='flex flex-row text-xl'>
            <div className='w-32'>Date of birth:</div>
            <div>{moment(currentUser.DoB).utc().format('MM/DD/YYYY')}</div>
          </div>
        </div>
      </div>
      
      
    )
   }
   
   export default UserProfile;