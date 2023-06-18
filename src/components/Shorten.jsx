import axios from "axios";
import { useState } from "react";

function Shorten() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [err, setErr] = useState(false);
  const [disable, setDisable] = useState(true);
  const [copy, setCopy] = useState("Copy");
  const urlRegex =
    /^(?:https?:\/\/)?(?:www\.)?([\w-]+(?:\.[\w-]+)+)(?:\/[\w-]*)*\/?$/;

  const getShortenLink = () => {
    axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`).then((res) => {
      console.log(res);
      setResult(res.data.result);
    });
  };

  const handelChange = (e) => {
    setInput(e.target.value);
    if (input.match(urlRegex)) {
      setErr(false);
      setDisable(false);
    } else {
      setErr(true);
      setDisable(true);
      setResult("");
    }
  };

  return (
    <>
      <div className="row p-5 shorten rounded">
        <div className="col-lg-10 col-12">
          <input
            className="form-control ps-4"
            type="url"
            placeholder="Shorten a link here..."
            aria-label="Search"
            value={input}
            onChange={handelChange}
          />
        </div>
        <div className="col-lg-2 col-12">
          <button
            onClick={() => {
              setCopy("Copy");
              getShortenLink();
            }}
            className="btn btn-primary w-100 mt-4 mt-lg-0"
            disabled={disable}
          >
            Shorten It
          </button>
        </div>
      </div>
      {err && <p className="text-danger">Please enter a valid url</p>}
      {result !== "" && (
        <div className="row mt-3 rounded justify-lg-content-between shadow p-3 align-items-center">
          <div className="col-lg-6 col-12 ">
            <h4 className="mb-0 text-start">{input}</h4>
          </div>
          <hr className="my-4 d-lg-none d-block" />
          <div className="col-lg-6 col-12">
            <div className="row align-items-center">
              <div className="col-lg-10 col-12 text-lg-end text-start">
                <h4 style={{ color: "hsl(180, 66%, 49%)" }} className="mb-0">
                  {result.short_link}
                </h4>
              </div>
              <div className="col-lg-2 col-12">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(result.short_link);
                    setCopy("Copied!");
                  }}
                  className="btn btn-primary mt-3 mt-lg-0 w-100"
                >
                  {copy}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shorten;
