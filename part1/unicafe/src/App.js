import { useState } from "react";
const Title = ({ title }) => {
  return <h1>{title}</h1>;
};
const Botao = (props) => (
  <button onClick={props.handleClique}>{props.texto}</button>
);
const Exibir = (props) => (
  <tbody>
    <tr>
      <td>{props.texto}</td>
      <td>{props.valor}</td>
    </tr>
  </tbody>
);

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <Title title={"Statistics"} />
        No feedback given
      </div>
    );
  }
  return (
    <div>
      <Title title={"Statistics"} />
      <table>
        <Exibir texto={"good"} valor={props.good} />
        <Exibir texto={"neutral"} valor={props.neutral} />
        <Exibir texto={"bad"} valor={props.bad} />
        <Exibir texto={"all"} valor={props.total} />
        <Exibir texto={"average"} valor={props.average.toFixed(2)} />
        <Exibir texto={"positive"} valor={`${props.positive.toFixed(2)} %`} />
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const Good = (valor) => {
    const newGood = valor;
    const newTotal = newGood + neutral + bad;
    const newAverage = (newGood * 1 + neutral * 0 + bad * -1) / newTotal;
    const newPositive = (newGood * 100) / newTotal;

    setGood(newGood);
    Total(newTotal);
    Average(newAverage);
    Positive(newPositive);
  };
  const Neutro = (valor) => {
    const newNeutral = valor;
    const newTotal = good + newNeutral + bad;
    const newAverage = (good * 1 + newNeutral * 0 + bad * -1) / newTotal;
    const newPositive = (good * 100) / newTotal;

    setNeutral(newNeutral);
    Total(newTotal);
    Average(newAverage);
    Positive(newPositive);
  };
  const Bad = (valor) => {
    const newBad = valor;
    const newTotal = good + neutral + newBad;
    const newAverage = (good * 1 + neutral * 0 + newBad * -1) / newTotal;
    const newPositive = (good * 100) / newTotal;

    setBad(newBad);
    Total(newTotal);
    Average(newAverage);
    Positive(newPositive);
  };

  const Total = (valor) => {
    setTotal(valor);
  };
  const Average = (valor) => {
    setAverage(valor);
  };
  const Positive = (valor) => {
    setPositive(valor);
  };

  return (
    <div>
      <div>
        <Title title={"Give feedback"} />
        <Botao handleClique={() => Good(good + 1)} texto="good" />
        <Botao handleClique={() => Neutro(neutral + 1)} texto="neutral" />
        <Botao handleClique={() => Bad(bad + 1)} texto="bad" />
      </div>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      </div>
    </div>
  );
};

export default App;
