import Result from "../Result";
import "./resultList.css";

export default function ResultList({ results }) {
  return (
    <div className="resultlist-container">
      <ul>
        {results === "No results found" ? (
          <p>{results}</p>
        ) : (
          results.map((result) => {
            return (
              <Result
                key={result.id}
                category={result.category}
                description={result.description}
                snippet={result.snippet}
              />
            );
          })
        )}
      </ul>
    </div>
  );
}
