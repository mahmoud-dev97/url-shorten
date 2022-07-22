import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function Shorten() {
  const [links, setLinks] = useState("");
  const [result, setResult] = useState(null);
  const [input, setInput] = useState("");
  const [copy, setCopy] = useState("Copy");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const regEx =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  useEffect(() => {
    if (input.length > 0 && input.match(regEx)) {
      const getShortenLink = () => {
        axios
          .get(`https://api.shrtco.de/v2/shorten?url=${input}`)
          .then((res) => setResult(res.data.result));
      };
      getShortenLink();
    } else {
      setLinks("");
    }
  }, [input, regEx]);
  return (
    <Fragment>
      <div className="row p-5 shorten rounded">
        <div className="col-lg-10 col-12">
          <input
            className="form-control ps-4"
            type="search"
            placeholder="Shorten a link here..."
            aria-label="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="col-lg-2 col-12">
          <button
            onClick={() => {
              setLinks(result);
              setCopy("Copy");
            }}
            className="btn btn-primary w-100 mt-4 mt-lg-0"
          >
            Shorten It
          </button>
        </div>
      </div>
      {links ? (
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
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Shorten;
