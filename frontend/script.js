document.getElementById('registrationForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const competitorNumber = document.getElementById('competitorNumber').value;
    const track = document.getElementById('track').value;
    const experience = document.getElementById('experience').value;
    const institution = document.getElementById('institution').value;

    const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            competitorNumber,
            track,
            experience,
            institution
        })
    });

    const result = await response.json();
    document.getElementById('response').innerText = result.message;
});
