import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useState } from "react";

function MainContent() {



  const [text, setText] = useState<string>('');
  const [item, setItem] = useState<string[]>([]);

  const [numm, setNum] = useState<string>('')

  const [enviar, setEnviar] = useState<[]>([]);

  function handleChange(event: any) {
    let t = event.target.value;
    setText(t);
    
  }

  function handleAmountChanger(event: any) {
    let num = event.target.value;
    setNum(num)
    
  }

  function addTransaction(event: any) {
    event.preventDefault();
    setItem([...item ,text, numm]) 
    
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
          {item?.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
        <h4>New Item:</h4>
        <input onChange={handleChange} type="text" name="text" id="" />
        <h4>Amount (- for negative):</h4>
        <input
          onChange={handleAmountChanger}
          type="number"
          name="number"
          id=""
        />
        <Button onClick={addTransaction}>add Transaction</Button>
      </form>
    </div>
  );
}

export default MainContent;
