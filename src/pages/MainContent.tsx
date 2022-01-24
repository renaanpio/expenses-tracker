import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useState } from "react";

function MainContent() {
  const [transaction, setTransaction] = useState({} as any);
  const [armazem, setArmazem] = useState([] as any);

  function handleChange(event: any) {
    const { name, value } = event.target;

    setTransaction((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(transaction);

  function addItems(event: any) {
    event.preventDefault();

    // setArmazem(((oldArray: any) => [...oldArray, transaction]))
    setArmazem([...armazem, transaction]);
  }

  return (
    <div id="main-content">
      <h1>Expenses Tracker</h1>
      <h3>Your Balance</h3>
      <span>R$0</span>
      <div className="income-expenses">
        <div className="income">
          <p>INCOME</p>
          <span className="incomeGreen">R$0</span>
        </div>
        <div className="expenses">
          <p>EXPENSES</p>
          <span className="expensesRed">R$0</span>
        </div>
      </div>
      <form>
        <h4>History</h4>
        <ul>
          {armazem.map((lista: any) => (
            <li>
              {lista.text} R${lista.number}
            </li>
          ))}
        </ul>
        <h4>New Item:</h4>
        <input onChange={handleChange} type="text" name="text" id="" />
        <h4>Amount (- for negative):</h4>
        <input onChange={handleChange} type="number" name="number" id="" />
        <Button onClick={addItems}>add Transaction</Button>
      </form>
    </div>
  );
}

export default MainContent;
