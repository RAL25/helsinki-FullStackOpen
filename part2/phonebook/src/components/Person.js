import PersonDelete from "./PersonDelete";

const Person = ({
  searchName,
  persons,
  setPerson,
  setMessage,
  setTypeMessage,
}) => {
  const personsFilter = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase()),
  );

  return (
    <ul>
      {personsFilter.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <PersonDelete
            id={person.id}
            persons={persons}
            setPerson={setPerson}
            setMessage={setMessage}
            setTypeMessage={setTypeMessage}
          />
        </li>
      ))}
    </ul>
  );
};

export default Person;
