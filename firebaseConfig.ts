// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database'; // Importamos 'ref' y 'onValue' para mostrar un ejemplo de uso

// 1. Tu configuración de Firebase para la web
// ¡IMPORTANTE! Debes reemplazar los valores de "YOUR_API_KEY", "YOUR_MESSAGING_SENDER_ID" y "YOUR_APP_ID"
// con los datos reales de tu proyecto desde la consola de Firebase.
//
// ¿Dónde encontrar estos datos?
// Ve a la Consola de Firebase (console.firebase.google.com)
// - Selecciona tu proyecto "Greenhouse Future".
// - Haz clic en el ícono de "engranaje" (⚙️) junto a "Project overview" en el menú de la izquierda.
// - Ve a "Project settings" (Configuración del proyecto).
// - Baja hasta la sección "Your apps" (Tus aplicaciones) y busca la app web que creaste o crea una nueva.
// - Haz clic en "Config" y copiarás un objeto JSON con toda esta información.

const firebaseConfig = {
  apiKey: "AIzaSyDBqtgpy3QP56y2SBySHqrbxk2Y9-UaZhA", // Tu clave API única para la app web
  authDomain: "greenhouse-future.firebaseapp.com", // El dominio de autenticación de tu proyecto
  projectId: "greenhouse-future", // Tu ID de proyecto (¡ya lo tenemos!)
  storageBucket: "greenhouse-future.appspot.com", // Tu bucket de Cloud Storage
  messagingSenderId: "6895847817", // Tu ID de remitente de FCM
  appId: "1:6895847817:web:1057040f9086768a817958", // El ID de tu aplicación web en Firebase
  databaseURL: "https://greenhousefuture-73514-default-rtdb.firebaseio.com/" // ¡Esta es tu URL de Realtime Database por defecto!
};

// 2. Inicializa Firebase en tu aplicación
// Esta línea es crucial; inicia la conexión con tu proyecto Firebase.
const app = initializeApp(firebaseConfig);

// 3. Obtén una referencia al servicio de Realtime Database
// Esto te permite interactuar con tu base de datos.
export const db = getDatabase(app);

// 4. Exporta la instancia de la base de datos
// Así podrás importar 'database' en otros archivos de tu aplicación web
// para leer o escribir datos.

/*
// --- Ejemplo de cómo usar 'database' en otro archivo de tu aplicación (por ejemplo, en un componente de React/Angular/Vue o un script principal) ---

// Digamos que tienes un archivo 'sensorDisplay.ts' o 'main.ts'
// donde quieres mostrar los datos del sensor.

// 1. Importa la instancia de la base de datos
// import { database } from './firebaseConfig';

// 2. Define la ruta donde tu compañero de Arduino enviará los datos.
// Es una buena práctica usar rutas descriptivas, como 'sensores/esp32_humedad' o 'datosSensores/temperatura'.
// Para este ejemplo, usaremos 'datosSensores/esp32-1'.
const pathDatosSensor = 'datosSensores/esp32-1'; // ¡Asegúrate de que esta ruta coincida con la que usa tu compañero en Arduino!

// 3. Obtén una referencia a esa ubicación en la base de datos
const datosSensorRef = ref(database, pathDatosSensor);

// 4. Escucha los cambios en los datos en tiempo real
// Cada vez que el ESP32 de tu compañero envíe datos a esta ruta,
// esta función 'onValue' se ejecutará con los nuevos datos.
onValue(datosSensorRef, (snapshot) => {
  const datosRecibidos = snapshot.val(); // 'snapshot.val()' obtiene los datos JSON
  if (datosRecibidos) {
    console.log("¡Datos del sensor recibidos en tiempo real!", datosRecibidos);
    // Aquí es donde actualizarías la interfaz de usuario de tu aplicación web.
    // Por ejemplo, mostrar la temperatura, humedad, etc.
    // Ejemplo: document.getElementById('temperatura').innerText = datosRecibidos.temperatura + '°C';
  } else {
    console.log("No hay datos en la ruta:", pathDatosSensor);
  }
});

*/
