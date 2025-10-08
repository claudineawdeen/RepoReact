
import   './Card.css';
function NumberDisplay() {

    const cardData = [
    {
        id: 1,
        title: 'Card 1',
        description: 'This is the card 1.',
        imageUrl: '/claudine.jpg'
    },
    {
        id: 2,
        title: 'Card 2',
        description: 'This is the card 2.',
        imageUrl: '/claudine.jpg'
    },
    {
        id: 3,
        title: 'Card 3',
        description: 'This is the card 3.',
        imageUrl: '/claudine.jpg'
    },
    ];

    return (
        <div className="card">
            {cardData.map(item => (
            <div>
            <img src={item.imageUrl} alt="User Avatar" width="100px" />
            <h3 key={item.id}>{item.title}</h3>
            <p key={item.id}>{item.description}</p>
          </div>
      ))}
        </div>
    );
}

export default NumberDisplay;