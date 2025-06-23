function checkAnswer(answer, num) {
  const feedback = document.getElementById("feedback" + num);

  const correctMessages = {
    1: "✅ ¡Correcto! Muchas personas se ven obligadas a huir de conflictos armados.",
    2: "✅ ¡Correcto! La ONU es la organización que propuso el Pacto Mundial para la Migración.",
    3: "✅ ¡Correcto! Las inundaciones son una causa ambiental frecuente que obliga a migrar.",
    4: "✅ ¡Correcto! Las barreras lingüísticas dificultan el aprendizaje de estudiantes migrantes.",
    5: "✅ ¡Correcto! Estados Unidos es uno de los países que recibe mayor cantidad de migrantes."
  };

  const wrongMessages = {
    1: "❌ Incorrecto. La migración forzada ocurre sin decisión voluntaria.",
    2: "❌ Incorrecto. Recuerda que el Pacto Mundial es un acuerdo internacional impulsado por la ONU.",
    3: "❌ Incorrecto. Busca causas ambientales como desastres naturales.",
    4: "❌ Incorrecto. Algunas dificultades afectan el aprendizaje, no lo facilitan.",
    5: "❌ Incorrecto. ¿En serio ese lugar es un receptor de migrantes?"
  };

  if (answer === 'correct') {
    feedback.textContent = correctMessages[num];
    feedback.style.color = "green";
  } else {
    feedback.textContent = wrongMessages[num];
    feedback.style.color = "red";
  }
}