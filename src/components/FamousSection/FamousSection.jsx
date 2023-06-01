import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import Form from '../Form/Form';
import PersonList from '../PersonList/PersonList';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server
    return fetch('/people')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  // TODO: on load, call the fetchPeople() function
  useEffect(() => {
    console.log('HIT');
    fetchPeople().then(setPeopleArray);
  }, []);

  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(
      `The person is ${famousPersonName} and they're famous for ${famousPersonRole}`
    );

    const newPerson = {
      name: famousPersonName,
      role: famousPersonRole,
    };

    setPersonName('');
    setPersonRole('');

    // TODO: create POST request to add this new person to the database
    fetch('/people', {
      method: 'POST',
      body: JSON.stringify(newPerson),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('BAD STATUS');
        }
        fetchPeople().then(setPeopleArray);
      })
      .catch((error) => {
        console.error(error);
      });

    // HINT: the server is expecting a person object
    //       with a `name` and a `role` property
  };

  return (
    <section className="new-person-section">
      <Form
        addPerson={addPerson}
        famousPersonName={famousPersonName}
        famousPersonRole={famousPersonRole}
        setPersonName={setPersonName}
        setPersonRole={setPersonRole}
      />
      <p>
        {famousPersonName} is famous for "{famousPersonRole}".
      </p>
      <PersonList famousPeopleArray={famousPeopleArray} />
    </section>
  );
}

export default FamousSection;
