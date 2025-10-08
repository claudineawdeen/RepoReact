function NumberDisplay() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const oddNumbers = numbers.filter(number => number % 2 !== 0);

    return (
        <div>
            <h2>Even Numbers:</h2>
            <ul>
                {evenNumbers.map(number => (
                <li>{number}</li>
                ))}
            </ul>

            <h2>Odd Numbers:</h2>
            <ul>
                {oddNumbers.map(number => (
                <li>{number}</li>
                ))}
            </ul>
        </div>
    );
}

export default NumberDisplay;