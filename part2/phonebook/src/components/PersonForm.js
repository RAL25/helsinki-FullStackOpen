import personService from "../service/persons";

const DoneMessage = (setMessage, showMessage) => {
  setMessage(`${showMessage}`);
  setTimeout(() => {
    setMessage(null);
  }, 5000);
};

const PersonForm = (props) => {
  const addName = (event) => {
    event.preventDefault();
    const algoNome = props.persons.find(
      (person) => person.name === props.newName,
    );
    const algoNumero = props.persons.find(
      (person) => person.number === props.newNumber,
    );
    let showMessage = "";

    if (algoNome) {
      if (
        window.confirm(
          `${props.newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const changeObject = { ...algoNome, number: props.newNumber };
        personService.update(algoNome.id, changeObject).then((response) => {
          props.setPersons(
            props.persons.map((p) =>
              p.id !== algoNome.id ? p : response.data,
            ),
          );
          props.setNewName("");
          props.setNewNumber("");
        });
        console.log("Item updated!");
      } else {
        console.log("Item don't updated!");
      }

      showMessage = `Added ${props.newNumber} to ${props.newName}`;
      DoneMessage(props.setMessage, showMessage);

      return;
    } else if (algoNumero) {
      window.alert(`${props.newNumber} is already added to phonebook`);
      return;
    }

    let aux = props.persons.length + 1;
    const nameObject = {
      name: props.newName,
      number: props.newNumber,
      id: aux.toString(),
    };

    showMessage = `Added new person ${props.newName}`;
    DoneMessage(props.setMessage, showMessage);

    personService.create(nameObject).then((response) => {
      props.setPersons(props.persons.concat(response.data));
      props.setNewName("");
      props.setNewNumber("");
    });
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
