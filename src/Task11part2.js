function DoubledNumbersDisplay({ numbers }) {
  const doubledNumbers = numbers.map((number, index) => (
    <li key={index}>
      Doubled Number {index+1} is {number * 2}
    </li>
  ));

  return (
    <div>
      <ul>
        {doubledNumbers}
      </ul>
    </div>
  );
}

export default DoubledNumbersDisplay;