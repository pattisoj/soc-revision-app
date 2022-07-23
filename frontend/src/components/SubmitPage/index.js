import SubmissionForm from "../SubmissionForm";
import SubmissionResult from "../SubmissionResult";
import "./submitPage.css";

export default function Submitpage({
  formReturnData,
  setFormReturnData,
  categories,
}) {
  return (
    <div className="header-container">
      <div className="header">
        <h1>
          School of Code Link <br></br> Submission Page
        </h1>
        <p>Fill out the form below to add a helpful link to the home page.</p>
      </div>

      <div className="form">
        <SubmissionForm
          setFormReturn={setFormReturnData}
          categories={categories}
        />
        <SubmissionResult formReturnData={formReturnData} />
      </div>
    </div>
  );
}
