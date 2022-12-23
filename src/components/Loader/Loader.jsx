import { Puff } from  'react-loader-spinner'

const Loader = () => {
    return (
        <Puff
        radius={1}
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        visible={true}
      />
    // <h1>Loading.....</h1>

    )
}

export default Loader