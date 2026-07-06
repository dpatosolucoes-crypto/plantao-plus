import RiskBadge from "./RiskBadge";

function BedCard({ patient }) {
  return (
    <article className="bed-card">
      <div className="bed-card-header">
        <strong>{patient.bed}</strong>
        <RiskBadge risk={patient.risk} />
      </div>

      <h3>{patient.name}</h3>
      <p>{patient.status}</p>

      <div className="vitals">
        <span>PA: {patient.vitals.pressure}</span>
        <span>SpO₂: {patient.vitals.saturation}%</span>
        <span>FC: {patient.vitals.heartRate}</span>
        <span>T: {patient.vitals.temperature}°C</span>
      </div>
    </article>
  );
}

export default BedCard;