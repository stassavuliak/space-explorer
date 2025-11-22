import './ApodCard.scss'

const ApodCard = ({apod}) => {
  if (!apod) {
    return <h2>No APOD data</h2>
  }

  const { title, url, explanation, date, media_type } = apod

  return (
    <article className="apod-card">
      <h2>{apod.title}</h2>
      <p className="apod-date">📅 {date}</p>

      {media_type === "image" ? (
        <img className="apod-image" src={url} alt={title} />
      ) : (
        <p>⚠️ This APOD entry is not an image.</p>
      )}

      <p className="apod-explanation">{explanation}</p>
    </article>
  )
}

export default ApodCard