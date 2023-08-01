import './NumbersTable.css'

function NumbersTable({limit}){

const numbers = [];

for (let i = 1; i <= limit;  i ++ ){
console.log('what in there :)' , i) 
numbers.push(i);
}

   

    return (
        <div>
         <table className='number-table'>
            <tbody>

            {numbers.map((number) => (
                
               <tr key={number}
                    style={{backgroundColor: number % 2 === 0 ? "red" : "white"}}
                    >
                       <td>{number}</td> 

                </tr>
            ))}
            </tbody>
          </table>
        </div>
    )
}

export default NumbersTable;