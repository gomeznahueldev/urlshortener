import axios from "axios";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import "./LinkResult.css";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(response.data.result.full_short_link);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]); // eslint-disable-line

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  if (error) {
    return <p className="noData">Something went wrong...</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>

          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
      {true && <p className="copied">{copied ? "Copied!" : ""}</p>}
    </>
  );
};

export default LinkResult;
