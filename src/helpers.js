export function formatItemsForList(items) {
  return (
    <ul style={{ paddingLeft: 20 }}>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  )
}