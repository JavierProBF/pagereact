import './error.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-description">Página no encontrada. Por favor, verifica la URL o regresa a la página de inicio.</p>
      <button className="error-button" onClick={() => window.location.href = '/'}>Volver al inicio</button>
    </div>
  );
};

export default ErrorPage;
