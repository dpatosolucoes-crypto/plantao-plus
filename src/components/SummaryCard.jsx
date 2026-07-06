function SummaryCard({ title, value, description, type }) {
  return (
    <article className={`summary-card ${type || ""}`}>
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{description}</small>
    </article>
  );
}

export default SummaryCard;