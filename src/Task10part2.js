function ItemList(props) {
  const { items } = props; 

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} style={{
            background : '#56aed7',
            margin:"5px",
            listStyle:"none",
            width:"180px",
            textAlign:"center",
            color:"white",
            padding:"8px"
              }}>{item.name}</li> 
      ))}
    </ul>
  );
}

export default ItemList;