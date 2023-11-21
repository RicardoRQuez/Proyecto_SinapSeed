export const AuthProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const setNombreValue = (value) => {
    setNombre(value);
  };

  const setRutValue = (value) => {
    setRut(value);
  };

  const setEmailValue = (value) => {
    setEmail(value);
  };

  const setTelefonoValue = (value) => {
    setTelefono(value);
  };

  const handleVerification = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    console.log("Verificando datos:", nombre, rut, email, telefono);

    try {
      // Aquí deberías realizar la lógica de verificación con tu backend
      // Usar axios.post u otro método según la estructura de tu API

      // Ejemplo de solicitud de verificación (debes ajustar según tu backend)
      const response = await axios.post("URL_de_tu_backend/verificar_datos", {
        nombre,
        rut,
        email,
        telefono,
      });

      console.log("Respuesta del servidor:", response.data);

      // Dependiendo de la respuesta de tu backend, establece verificationSuccess a true o false
      const isVerified = response.data.verificado; // Cambiar por la respuesta real de tu backend

      if (isVerified) {
        setVerificationSuccess(true);
        // Aquí podrías realizar acciones adicionales después de la verificación exitosa
      } else {
        setVerificationSuccess(false);
        // Manejar el escenario de verificación fallida
      }
    } catch (error) {
      console.error("Error en la verificación:", error);
      // Manejar errores de verificación
    }
  };

  return (
    <AuthContext.Provider
      value={{
        nombre,
        rut,
        email,
        telefono,
        handleVerification,
        setNombre: setNombreValue,
        setRut: setRutValue,
        setEmail: setEmailValue,
        setTelefono: setTelefonoValue,
        verificationSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
