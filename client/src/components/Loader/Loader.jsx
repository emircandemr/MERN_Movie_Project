import { InfinitySpin } from  'react-loader-spinner'
import './Loader.scss'

const Loader = () => {
    return (
      <div className='loader' >
      <InfinitySpin 
        width='200'
        color="#fff"
      />
      </div>
    )
}

export default Loader