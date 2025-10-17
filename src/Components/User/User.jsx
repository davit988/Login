import "./User.css";
export const User = ({name}) => {
  return (
    <>
      <section>
        <div className="container aas">
          <div className="relav">
            <div className="users">
              <h2>Hello <span>{name}</span></h2>
              <p>Your Regest Code is</p>
              <p>{Math.round(Math.random() * 9999)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
