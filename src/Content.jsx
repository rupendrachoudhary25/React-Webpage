import Box from "./Box.jsx";

function Content(props) {
  return (
    <>
      <div className="content">
        <h1>Hello There</h1>
        <div className="box-wrapper">
          {props.boxData.map((obj, index) => {
            return <Box obj={obj} key={index} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Content;