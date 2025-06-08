import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../CV/MyDocument";
function DownloadButton({
  data,
  isButtonHover,
  buttonHover,
  isNotButtonHover,
}) {
  return (
    <PDFDownloadLink
      document={<MyDocument data={data} />}
      fileName={`${
        data.name.length > 0 ? data.name + "resume" : "John Doe Resume"
      }`}
    >
      {({ loading }) => (
        <button
          onMouseEnter={() => isButtonHover()}
          onMouseLeave={() => isNotButtonHover()}
          disabled={loading}
          className={`${
            buttonHover ? "scale-120" : "scale-100"
          } bg-blue-400 text-white px-3 py-2 transition-transform delay-75 ease-out`}
        >
          {loading ? "Generating PDf" : "Download PDF"}
        </button>
      )}
    </PDFDownloadLink>
  );
}

export default DownloadButton;
