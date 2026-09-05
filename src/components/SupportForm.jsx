function SupportForm({ form, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label" htmlFor="nameInput">Full name</label>
        <input className="form-control" id="nameInput" name="name" onChange={onChange} placeholder="Your full name" required type="text" value={form.name} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="emailInput">Email address</label>
        <input className="form-control" id="emailInput" name="email" onChange={onChange} placeholder="name@example.com" required type="email" value={form.email} />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="interestInput">How would you like to help?</label>
        <select className="form-select" id="interestInput" name="interest" onChange={onChange} required value={form.interest}>
          <option value="">Select an option</option>
          <option>Workshop volunteer</option>
          <option>School or youth group</option>
          <option>Community outreach</option>
          <option>Resident feedback</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="form-label" htmlFor="priorityInput">Top priority for the park</label>
        <input className="form-control" id="priorityInput" name="priority" onChange={onChange} placeholder="Shade, seating, play, lighting, events..." required type="text" value={form.priority} />
      </div>
      <button className="btn btn-light btn-submit w-100" type="submit">Join activity</button>
    </form>
  );
}

export default SupportForm;
