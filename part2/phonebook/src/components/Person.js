const Person = ({ searchName, persons }) => {
  const personsFilter = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <ul>
      {personsFilter.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Person;
