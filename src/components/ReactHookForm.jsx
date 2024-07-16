import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const {register,handleSubmit}=useForm();
    console.log(register())
    // const handleSubmit=(data)=>{
    //     console.log(data)
    // }
  return (
    <div>
          <form action="" onSubmit={handleSubmit((data)=>console.log(data))} >
      <input  {...register('name')} type="text"   placeholder="name" className="border-2 "/>
      <input   {...register("age")}type="text"   placeholder="age" className="border-2 "/>
      <input   {...register('email')}type="email" placeholder="email" className="border-2 " />
      <div className="flex">
      <input
       type="checkbox"
        {...register('candidates')}
      />
      <div>
        <label htmlFor="candidates">Candidates</label>
        <p>Get notified when a candidate applies for a job.</p>
      </div>
      </div>


      <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        name="pushNotifications"


        {...register('pushNotifications')}
        
      />

      <label htmlFor="pushEverything">pushNotifications</label>

      <br/>
      <input
        type="radio"
           name="pushNotifications"
        // value="Everything"
        {...register('Everything')}


      />

      <label htmlFor="pushEmail">Everything</label>

      <br/>
      <input
        type="radio"
        name="Same as email"


        {...register('Same as email')}

      />

      <label htmlFor="pushNothing">Same as email</label>

    </fieldset>
      <input type="submit" />
      </form>
    </div>
  )
}

export default ReactHookForm