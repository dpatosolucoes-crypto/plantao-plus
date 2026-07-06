import { useState } from "react";
import AddPatientForm from "./components/AddPatientForm";
import BedCard from "./components/BedCard";
import PatientTable from "./components/PatientTable";
import SummaryCard from "./components/SummaryCard";
import { patients as initialPatients } from "./data/patients";

function App() {
  const [patients, setPatients] = useState(initialPatients);

  function handleAddPatient(newPatient) {
    setPatients([...patients, newPatient]);
  }

  const totalPatients = patients.length;

  const criticalPatients = patients.filter(
    (patient) => patient.risk === "Crítico"
  ).length;

  const pendingMedications = patients.filter(
    (patient) =>
      patient.medication.toLowerCase().includes("pendente") ||
      patient.medication.toLowerCase().includes("atrasada")
  ).length;

  const occupiedBeds = patients.length;

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Dashboard hospitalar</p>
          <h1>Plantão+</h1>
          <p className="subtitle">
            Painel de apoio para visualização rápida de pacientes, leitos e
            pendências do plantão.
          </p>
        </div>

        <div className="shift-card">
          <span>Plantão atual</span>
          <strong>07:00 - 19:00</strong>
          <small>Pronto Atendimento</small>
        </div>
      </header>

      <section className="summary-grid">
        <SummaryCard
          title="Pacientes no setor"
          value={totalPatients}
          description="em acompanhamento"
        />

        <SummaryCard
          title="Pacientes críticos"
          value={criticalPatients}
          description="necessitam atenção imediata"
          type="danger"
        />

        <SummaryCard
          title="Medicações pendentes"
          value={pendingMedications}
          description="pendentes ou atrasadas"
          type="warning"
        />

        <SummaryCard
          title="Leitos ocupados"
          value={`${occupiedBeds}/8`}
          description="capacidade total do setor"
        />
      </section>

      <AddPatientForm onAddPatient={handleAddPatient} />

      <section className="content-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2>Mapa de leitos</h2>
              <p>Status rápido dos pacientes internados no setor.</p>
            </div>
          </div>

          <div className="bed-grid">
            {patients.map((patient) => (
              <BedCard key={patient.id} patient={patient} />
            ))}
          </div>
        </div>

        <aside className="panel alerts-panel">
          <h2>Alertas do plantão</h2>

          {criticalPatients > 0 && (
            <div className="alert danger-alert">
              <strong>Paciente crítico</strong>
              <p>Existe paciente classificado como crítico no setor.</p>
            </div>
          )}

          {pendingMedications > 0 && (
            <div className="alert warning-alert">
              <strong>Medicação pendente</strong>
              <p>Há medicações pendentes ou atrasadas no plantão atual.</p>
            </div>
          )}

          <div className="alert info-alert">
            <strong>Passagem de plantão</strong>
            <p>
              Revise pacientes em observação, exames e pendências antes da troca
              de equipe.
            </p>
          </div>
        </aside>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <h2>Lista de pacientes</h2>
            <p>
              Visão organizada para acompanhamento durante a passagem de
              plantão.
            </p>
          </div>
        </div>

        <PatientTable patients={patients} />
      </section>
    </main>
  );
}

export default App;