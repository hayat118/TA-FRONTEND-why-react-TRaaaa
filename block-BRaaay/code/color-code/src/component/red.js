import data from "../data/colors.json";

function Red() {
  return (
    <>
      {data.red.map((color, i) => {
        return (
          <div
            className="color"
            style={{
              backgroundColor: `${color}`,
              height: "50px",
              width: "100px",
            }}
          >
            <div className="number">
              <p>{more(i)}</p>
              <p>{color}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
function more(i) {
  var a = 100;
  if (i === 0) {
    return 50;
  } else {
    return a * i;
  }
}

export default Red;
