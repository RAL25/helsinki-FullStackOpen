import { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import NotificationError from "./components/NotificationError";
import personService from "./service/persons";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [message, setMessage] = useState(null);
  const [messageError, setMessageError] = useState(null);

  useEffect(() => {
    console.log("effect");

    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <NotificationError message={messageError} />
      <Filter value={searchName} change={setSearchName} />
      <h2>Add a new</h2>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <Person
        searchName={searchName}
        persons={persons}
        setPerson={setPersons}
        setMessage={setMessageError}
      />
    </div>
  );
};

export default App;
