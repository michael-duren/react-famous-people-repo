import Person from '../Person/Person';

function PersonList(props) {
  const { famousPeopleArray } = props;

  return (
    <ul>
      {famousPeopleArray.map((person) => {
        return <Person person={person} />;
      })}
    </ul>
  );
}

export default PersonList;
