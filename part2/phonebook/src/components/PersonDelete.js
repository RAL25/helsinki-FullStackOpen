import personService from "../service/persons";

const PersonDelete = ({ id, persons, setPerson }) => {
  const RemovePerson = () => {
    const personSelected = persons.find((usuario) => usuario.id === id);
    if (window.confirm(`Delete ${personSelected.name}?`)) {
      personService.remove(id);
      setPerson(persons.filter((usuario) => usuario.id !== id));
      console.log("Item removed!");
    } else {
      console.log("Item don't removed!");
    }
  };
  return <button onClick={RemovePerson}>delete</button>;
};

export default PersonDelete;
