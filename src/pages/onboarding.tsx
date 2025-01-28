import './onboarding.css';

const Onboarding = () => {
  return (
    <div className="onboarding-container">
      <h1 className="onboarding-title">Onboarding</h1>
      <p className="onboarding-description">Bienvenido al proceso de integración. Aquí te guiaremos paso a paso.</p>
      <button className="onboarding-button" onClick={() => alert('¡Comenzando el onboarding!')}>Iniciar</button>
    </div>
  );
};

export default Onboarding;
