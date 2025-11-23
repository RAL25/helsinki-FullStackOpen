const PersonForm = (props) => {
  const addName = (event) => {
    event.preventDefault();
    const algoNome = props.persons.find(
      (person) => person.name === props.newName
    );
    const algoNumero = props.persons.find(
      (person) => person.number === props.newNumber
    );

    if (algoNome) {
      window.alert(`${props.newName} is already added to phonebook`);
      return;
    } else if (algoNumero) {
      window.alert(`${props.newNumber} is already added to phonebook`);
      return;
    }

    const nameObject = {
      name: props.newName,
      number: props.newNumber,
      id: props.persons.length + 1,
    };

    props.setPersons(props.persons.concat(nameObject));
    props.setNewName("");
    props.setNewNumber("");
  };

  return (
    <form onSubmit={addName}>
      <div>
        name:{" "}
        <input
          value={props.newName}
          onChange={(event) => props.setNewName(event.target.value)}
        />
      </div>
      <div>
        number:{" "}
        <input
          value={props.newNumber}
          onChange={(event) => props.setNewNumber(event.target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default PersonForm;
