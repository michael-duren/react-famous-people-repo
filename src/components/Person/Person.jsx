function Person(props) {
  const { person } = props;

  return (
    <li key={person.id}>
      {person.name} is famous for {person.role}
    </li>
  );
}

export default Person;
