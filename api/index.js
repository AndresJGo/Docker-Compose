const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Almacenamiento de registros
let registrations = [];
let currentId = 1; // ID inicial para corredores

// Endpoint para registrar un nuevo corredor
app.post('/register', (req, res) => {
    const { name, competitorNumber, track, experience, institution } = req.body;

    const newRegistration = {
        id: currentId++, // Asignar un ID único y luego incrementarlo
        name,
        competitorNumber,
        track,
        experience,
        institution,
    };

    registrations.push(newRegistration);
    res.json({ message: 'Registro exitoso', newRegistration });
});

// Endpoint para obtener todos los corredores registrados
app.get('/showRunners', (req, res) => {
    res.json({ runners: registrations });
});

// Endpoint para obtener el registro de un corredor por su ID
app.get('/showRunner/:id', (req, res) => {
    const id = parseInt(req.params.id, 10); // Convertir el ID recibido a número entero
    const runner = registrations.find(r => r.id === id);

    if (runner) {
        res.json({ runner });
    } else {
        res.status(404).json({ message: 'Corredor no encontrado' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
