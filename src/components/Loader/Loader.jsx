import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-circle">
        <div>
          <div className="loader moon-loader">
            <div className="loader-circle">
              <div className="loader-moon-size"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="loader-sun"></div>
    </div>
  )
}

export default Loader