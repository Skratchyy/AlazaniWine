import "./LongDescription.css";

function LongDescription(props) {
  return (
    <>
      <div className="admin-long">
        <label htmlFor={props.name}>{props.title}</label>
        <textarea
          name={props.name}
          id={props.id}
          cols={props.cols}
          rows={props.rows}
        >
          {props.placeholder}
        </textarea>
      </div>
    </>
  );
}

export default LongDescription;
