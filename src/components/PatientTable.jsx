import RiskBadge from "./RiskBadge";

function PatientTable({ patients }) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Idade</th>
            <th>Leito</th>
            <th>Risco</th>
            <th>Queixa principal</th>
            <th>Medicação</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.bed}</td>
              <td>
                <RiskBadge risk={patient.risk} />
              </td>
              <td>{patient.complaint}</td>
              <td>{patient.medication}</td>
              <td>{patient.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;