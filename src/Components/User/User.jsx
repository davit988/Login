import "./User.css";
export const User = () => {
  return (
    <>
      <section>
        <div className="container aas">
          <div className="relav">
            <div className="users">
              <h2>Hello</h2>
              <p>Your Regest Code is</p>
              <p>{Math.round(Math.random() * 9999)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
