const Row = ({ item }) => {
  return (
    <tr>
      { Object.entries(item).map(([key, value]) => {
        return (
            <Cell key={key} dataCell={JSON.stringify(value)} />
        )
    }) }
    </tr>
  )
}

export default Row;
