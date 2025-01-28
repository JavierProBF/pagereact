import './init.css';

const Init = () => {
  return (
    <div className="init-container">
      <h1 className="init-title">Init</h1>
      <p className="init-description">Bienvenido a la página de inicio. Aquí puedes comenzar tu viaje.</p>
      <button className="init-button" onClick={() => alert('¡Iniciando!')}>Comenzar</button>
    </div>
  );
};

export default Init;
