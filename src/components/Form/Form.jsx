function Form(props) {
  const {
    addPerson,
    famousPersonName,
    famousPersonRole,
    setPersonName,
    setPersonRole,
  } = props;

  return (
    <form onSubmit={addPerson}>
      <label htmlFor="name-input">Name:</label>
      <input
        value={famousPersonName}
        id="name-input"
        onChange={(e) => setPersonName(e.target.value)}
      />
      <label htmlFor="role-input">Famous for:</label>
      <input
        value={famousPersonRole}
        id="role-input"
        onChange={(e) => setPersonRole(e.target.value)}
      />
      <button type="submit">Done</button>
    </form>
  );
}

export default Form;
