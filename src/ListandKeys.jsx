//this example without using key
// const names = ['Alice', 'Bob', 'Charlie'];

// function NameList() {
//   return (
//     <ul>
//       {names.map((name) => (
//         <li>{name}</li>
//       ))}
//     </ul>
//   );
// }

// export default NameList;




//this example with using key
// const names = ['Alice', 'Bob', 'Charlie'];

// function NameList() {
//   return (
//     <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
//     </ul>
//   );
// }

// export default NameList;


function NameList() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number,index) =>
      <li key={index}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

export default NameList;
  

