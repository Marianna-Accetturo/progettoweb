export default function VideoRow({title, subtitle, type, date, items, artwork}) {
  return (
    <tr><td>
      <div class="Video-item">
      <img class="album" src={artwork} />
      <div class="description">
          <h1>{title}</h1>
          <p>{type}</p>
      </div>
    </div>
    </td>
      <td>{items.reduce((p, i) => p + i.length, 0)}</td>
      <td>{items.length}</td>
      <td>{date}</td>
      <td>{subtitle}</td>
    </tr>
  )
}
