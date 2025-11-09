import { useState } from "react";

const Title = ({ title }) => <h1>{title}</h1>;

const Botao = ({ valor, texto }) => {
  return <button onClick={valor}>{texto}</button>;
};

const Votos = ({ valor }) => {
  return <div>Tem {valor} votos</div>;
};

const App = () => {
  const anecdotes = [
    "Se fazer algo dói, faça isso com mais frequência.",
    "Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!",
    "Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.",
    "Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.",
    "Otimização prematura é a raiz de todo o mal.",
    "Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.",
    "Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.",
    "A única maneira de ir rápido é ir bem.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));
  const [rankedAnecdotes, setRankedAnecdotes] = useState("");
  const [rankedVotes, setRankedVotes] = useState(0);

  const changeAnecdote = () => {
    const valorAleatorio = Math.floor(Math.random() * 8);
    setSelected(valorAleatorio);
  };
  const votarAnecdote = (valor) => {
    const copiaArray = [...votes];
    copiaArray[valor] += 1;
    setVotes(copiaArray);
    const max_of_array = Math.max.apply(Math, copiaArray);
    setRankedVotes(max_of_array);
    for (let i = 0; i < copiaArray.length; i++) {
      if (copiaArray[i] === max_of_array) {
        setRankedAnecdotes(anecdotes[i]);
      }
    }
  };

  return (
    <div>
      <div>
        <Title title="Anecdote of the day" />
        {anecdotes[selected]}
      </div>
      <div>
        <Votos valor={votes[selected]} />
        <Botao valor={() => votarAnecdote(selected)} texto={"vote"} />
        <Botao valor={changeAnecdote} texto={"next anecdote"} />
      </div>
      <div>
        <Title title="Anecdote with most votes" />
        {rankedAnecdotes}
        <Votos valor={rankedVotes} />
      </div>
    </div>
  );
};

export default App;
