import { useState } from "react";

const initialFormData = {
  name: "",
  age: "",
  bed: "",
  risk: "Estável",
  complaint: "",
  status: "Aguardando avaliação",
  medication: "",
  pressure: "",
  heartRate: "",
  saturation: "",
  temperature: "",
};

function AddPatientForm({ onAddPatient }) {
  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newPatient = {
      id: Date.now(),
      name: formData.name,
      age: Number(formData.age),
      bed: formData.bed,
      risk: formData.risk,
      complaint: formData.complaint,
      status: formData.status,
      medication: formData.medication,
      vitals: {
        pressure: formData.pressure,
        heartRate: Number(formData.heartRate),
        saturation: Number(formData.saturation),
        temperature: Number(formData.temperature),
      },
    };

    onAddPatient(newPatient);
    setFormData(initialFormData);
  }

  return (
    <section className="panel form-panel">
      <div className="panel-header">
        <div>
          <h2>Entrada de paciente</h2>
          <p>Cadastre um novo paciente no plantão atual.</p>
        </div>
      </div>

      <form className="patient-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome do paciente</label>
          <input
            type="text"
            name="name"
            placeholder="Ex: José Almeida"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Idade</label>
          <input
            type="number"
            name="age"
            placeholder="Ex: 52"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Leito</label>
          <input
            type="text"
            name="bed"
            placeholder="Ex: Leito 05"
            value={formData.bed}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Classificação de risco</label>
          <select name="risk" value={formData.risk} onChange={handleChange}>
            <option value="Estável">Estável</option>
            <option value="Atenção">Atenção</option>
            <option value="Crítico">Crítico</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Queixa principal</label>
          <input
            type="text"
            name="complaint"
            placeholder="Ex: Dor abdominal intensa"
            value={formData.complaint}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Aguardando avaliação">Aguardando avaliação</option>
            <option value="Em observação">Em observação</option>
            <option value="Aguardando exames">Aguardando exames</option>
            <option value="Medicação administrada">
              Medicação administrada
            </option>
            <option value="Alta prevista">Alta prevista</option>
          </select>
        </div>

        <div className="form-group">
          <label>Medicação</label>
          <input
            type="text"
            name="medication"
            placeholder="Ex: Dipirona 1g - pendente"
            value={formData.medication}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Pressão arterial</label>
          <input
            type="text"
            name="pressure"
            placeholder="Ex: 120/80"
            value={formData.pressure}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Frequência cardíaca</label>
          <input
            type="number"
            name="heartRate"
            placeholder="Ex: 82"
            value={formData.heartRate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Saturação</label>
          <input
            type="number"
            name="saturation"
            placeholder="Ex: 98"
            value={formData.saturation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Temperatura</label>
          <input
            type="number"
            step="0.1"
            name="temperature"
            placeholder="Ex: 36.5"
            value={formData.temperature}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Adicionar paciente
        </button>
      </form>
    </section>
  );
}

export default AddPatientForm;