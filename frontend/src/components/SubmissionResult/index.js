import "./submissionResult.css";

export default function SubmissionResult({ formReturnData }) {
  if (formReturnData.length === 0) {
    return <></>;
  }

  return (
    <div className="submit-container">
      <div>
        <h4 className="submit-text">Last link submitted</h4>
      </div>

      <div className="form-return">
        <a
          target="blank"
          href={formReturnData[0].link}
          key={formReturnData[0].link_id}
        >
          <p className="description">{formReturnData[0].description}</p>
          <p className="contributor">{`⭐️ Contributor: ${formReturnData[0].contributor}`}</p>
        </a>
      </div>
    </div>
  );
}
