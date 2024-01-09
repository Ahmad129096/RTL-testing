export default function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 2</h2>
      <p>All fields are mandatory</p>
      <div>All fields are mandatory</div>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Fullname" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select name="" id="job-location">
            <option value="">Select a company</option>
            <option value="US">United State</option>
            <option value="UK">United Kingdom</option>
            <option value="PK">Pakistan</option>
            <option value="IND">India</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="" id="terms" /> I agree to the terms
            and conditions
          </label>
        </div>
        <button role="submitButton">Submit</button>
      </form>
    </>
  );
}
