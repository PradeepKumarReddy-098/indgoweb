import { useState } from "react"
import './index.css'

const RequestCall = props => {
    const {changePopup} = props
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState('')
    const request = () => {
        if (!phone){
          setError('*Please enter Phone Number')
        }else if (!name || !email){
          setError('*Please enter Name and Email')
        }else{
          changePopup(true)
          setError('')
          setEmail('')
          setName('')
          setPhone('')
        }
      }
    return(
        <form>
          <h4>Aspiring to be an ACCA?</h4>
          <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} /><br />
          <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
          <input type='phone' placeholder='Mobile*' value={phone} onChange={(e)=>setPhone(e.target.value)} /><br />
          <button type="button" className='btn' onClick={request}>Request Call</button>
          {error && <p className='error'>{error}</p>}
    </form>
    )
}

export default RequestCall