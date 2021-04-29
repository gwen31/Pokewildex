import './StaffList.css';

function Staff({ name, age, data }) {
  return (
    <main className="flex">
      <article className="card">
        <img src={data.imgUrl} alt="" className="card-body-img" />
        <div
          className="card-body"
          style={{
            backgroundColor: data.color,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <h1 className="card-body-title"> {name}</h1>
          <p className="card-body-text"> {age} </p>
          <div className="card-footer">
            <div className="card-footer-social">
              <h3>Intégration</h3>
              <p>HTML/CSS</p>
            </div>
            <div className="card-footer-social">
              <h3>Javascript</h3>
              <p>react/node</p>
            </div>
            <div className="card-footer-social">
              <h3>Agile</h3>
              <p>Scrum</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Staff;
