import personService from "../service/persons";

const DoneMessage = (showMessage, setMessage) => {
  setMessage(`${showMessage}`);
  setTimeout(() => {
    setMessage(null);
  }, 5000);
};

const PersonDelete = ({ id, persons, setPerson, setMessage }) => {
  const RemovePerson = () => {
    const personSelected = persons.find((usuario) => usuario.id === id);
    let showMessage = "";
    if (window.confirm(`Delete ${personSelected.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPerson(persons.filter((usuario) => usuario.id !== id));
        })
        .catch((error) => {
          // alert(
          //   `the person '${personSelected.name}' was already deleted from server`,
          // );
          showMessage = `the person '${personSelected.name}' was already deleted from server`;
          DoneMessage(showMessage, setMessage);
          setPerson(persons.filter((n) => n.id !== id));
        });
      console.log("Item removed!");
    } else {
      console.log("Item don't removed!");
    }
  };
  return <button onClick={RemovePerson}>delete</button>;
};

export default PersonDelete;
