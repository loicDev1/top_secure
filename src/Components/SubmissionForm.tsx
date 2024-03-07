function SubmissionForm() {
  return (
    <div className="box form-container">
      <div className="login-box">
        <h2>Consulter validité</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default SubmissionForm;
