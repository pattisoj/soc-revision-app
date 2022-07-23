import "./collapsible.css";

export default function Collapsible({ activeContent }) {
  return (
    <div className="links-container">
      {activeContent.map((resource) => (
        <a target="blank" href={resource.link} key={resource.link_id}>
          <p className="description">{resource.description}</p>
          <p className="contributor">{`⭐️ Contributor: ${resource.contributor}`}</p>
        </a>
      ))}
    </div>
  );
}
