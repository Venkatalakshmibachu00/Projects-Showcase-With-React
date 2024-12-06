import './index.css'

const FailureView = props => {
  const {onRetry} = props
  return (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h2>Oops! Something Went Wrong</h2>
      <p>We cannot seem to find the page you are looking for</p>
      <div>
        <button className="btn" type="button" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  )
}

export default FailureView
