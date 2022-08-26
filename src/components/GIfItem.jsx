

export const GIfItem = ({url,title}) => (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
)
