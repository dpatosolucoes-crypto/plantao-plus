function RiskBadge({ risk }) {
  return <span className={`risk-badge ${risk.toLowerCase()}`}>{risk}</span>;
}

export default RiskBadge;