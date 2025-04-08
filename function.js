const questions = [
    {
        text: "¿Qué es lo más importante en una clase?",
        options: [
            { text: "Disciplina y atención", type: "Tradicional" },
            { text: "Exploración y descubrimiento", type: "Constructivista" },
            { text: "Diálogo y reflexión crítica", type: "Freiriano" },
            { text: "Autonomía y libertad", type: "Montessori" },
            { text: "Uso de tecnología", type: "Tecnológico" },
            { text: "Creatividad y arte", type: "Waldorf" }
        ]
    },
    {
        text: "¿Cómo debe actuar un buen maestro?",
        options: [
            { text: "Debe ser firme y saber imponer respeto", type: "Tradicional" },
            { text: "Debe ser un guía del aprendizaje", type: "Constructivista" },
            { text: "Debe aprender junto con el estudiante", type: "Freiriano" },
            { text: "Debe observar y dejar que el estudiante explore", type: "Montessori" },
            { text: "Debe innovar y usar recursos digitales", type: "Tecnológico" },
            { text: "Debe nutrir el alma, el cuerpo y la mente", type: "Waldorf" }
        ]
    },
    {
        text: "¿Qué tipo de aula prefieres?",
        options: [
            { text: "Pupitres en fila, maestro al frente", type: "Tradicional" },
            { text: "Mesas en grupo, espacio para moverse", type: "Constructivista" },
            { text: "Círculo de diálogo, libros por doquier", type: "Freiriano" },
            { text: "Alfombras, estanterías bajas, libertad de movimiento", type: "Montessori" },
            { text: "Pantallas, apps, pizarras interactivas", type: "Tecnológico" },
            { text: "Colores suaves, elementos naturales, música suave", type: "Waldorf" }
        ]
    },
    {
        text: "¿Cómo evalúas el aprendizaje?",
        options: [
            { text: "Con exámenes y notas", type: "Tradicional" },
            { text: "Con proyectos y participación", type: "Constructivista" },
            { text: "A través de conversaciones y reflexiones", type: "Freiriano" },
            { text: "Mediante observación del proceso individual", type: "Montessori" },
            { text: "Con herramientas digitales y feedback instantáneo", type: "Tecnológico" },
            { text: "Según el desarrollo integral del estudiante", type: "Waldorf" }
        ]
    },
    {
        text: "¿Qué materiales te entusiasman más usar?",
        options: [
            { text: "Libro de texto y cuaderno", type: "Tradicional" },
            { text: "Tijeras, cartulinas, experimentos", type: "Constructivista" },
            { text: "Lecturas críticas, debates, videos sociales", type: "Freiriano" },
            { text: "Bloques, cuentas, objetos manipulables", type: "Montessori" },
            { text: "Apps educativas, simuladores, juegos digitales", type: "Tecnológico" },
            { text: "Acuarelas, instrumentos musicales, cuentos", type: "Waldorf" }
        ]
    },
    {
        text: "¿Qué frase representa mejor tu forma de enseñar?",
        options: [
            { text: "El maestro enseña, el alumno aprende", type: "Tradicional" },
            { text: "Aprender haciendo", type: "Constructivista" },
            { text: "Todos nos educamos en comunión", type: "Freiriano" },
            { text: "Sigue al niño", type: "Montessori" },
            { text: "La educación debe adaptarse a lo digital", type: "Tecnológico" },
            { text: "Educar es nutrir el alma del niño", type: "Waldorf" }
        ]
    },
    {
        text: "¿Qué rol le das a las emociones en el aula?",
        options: [
            { text: "Importan, pero no deben interferir con el orden", type: "Tradicional" },
            { text: "Son parte del aprendizaje activo", type: "Constructivista" },
            { text: "Son clave para generar conciencia y empatía", type: "Freiriano" },
            { text: "Son guía natural del aprendizaje", type: "Montessori" },
            { text: "Se pueden gestionar con apps y dinámicas", type: "Tecnológico" },
            { text: "Son el corazón del proceso educativo", type: "Waldorf" }
        ]
    }
];

let currentQuestion = 0;
const answers = [];

function renderQuestion() {
    const qBox = document.getElementById("question-box");
    const question = questions[currentQuestion];

    qBox.style.opacity = 0; // inicio de animación

    setTimeout(() => {
        let html = `<h2>${question.text}</h2>`;
        question.options.forEach((option, index) => {
            html += `<div class="option" onclick="selectOption(${index})">${option.text}</div>`;
        });

        qBox.innerHTML = html;
        updateNavigation();
        qBox.style.opacity = 1; // fin de animación
    }, 200);
}

function selectOption(index) {
    answers[currentQuestion] = index;

    document.querySelectorAll(".option").forEach((opt, i) => {
        opt.classList.toggle("selected", i === index);
    });
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

function updateNavigation() {
    document.getElementById("back-btn").style.display = currentQuestion === 0 ? "none" : "inline-block";
}
function showResult() {
    const counts = {};
    answers.forEach((answerIndex, i) => {
      const type = questions[i].options[answerIndex].type;
      counts[type] = (counts[type] || 0) + 1;
    });
  
    let topType = null;
    let max = 0;
    for (const type in counts) {
      if (counts[type] > max) {
        max = counts[type];
        topType = type;
      }
    }
  
    const descriptions = {
      "Tradicional": {
        emoji: "📘",
        color: "#f2e2ba",
        text: "Crees que el maestro debe tener control, orden y claridad. Piensas que la disciplina es la base del aprendizaje."
      },
      "Constructivista": {
        emoji: "🧱",
        color: "#c0f7cb",
        text: "Crees que los estudiantes construyen el conocimiento a través de experiencias significativas. Prefieres enseñar haciendo."
      },
      "Freiriano": {
        emoji: "✊",
        color: "#ffd6d6",
        text: "Tu vocación es transformar el mundo a través de la educación crítica. Promueves el diálogo y la conciencia social."
      },
      "Montessori": {
        emoji: "🌱",
        color: "#d4f0ff",
        text: "Valoras la libertad, el ritmo individual y el aprendizaje autónomo. El entorno debe adaptarse al estudiante."
      },
      "Tecnológico": {
        emoji: "💻",
        color: "#e1d7ff",
        text: "Crees que la educación debe estar conectada con el mundo digital. Usas tecnología para motivar y personalizar."
      },
      "Waldorf": {
        emoji: "🎨",
        color: "#ffe8cc",
        text: "Concibes la educación como un proceso artístico, emocional y espiritual. El desarrollo integral es lo más importante."
      }
    };
  
    const { emoji, color, text } = descriptions[topType];
  
    const qBox = document.getElementById("question-box");
    qBox.innerHTML = `
      <div class="result-card" style="background-color: ${color};">
        <div class="result-emoji">${emoji}</div>
        <h2>¡Eres un pedagogo ${topType}!</h2>
        <p>${text}</p>
        <button id="restart-btn" onclick="restartQuiz()">🔁 Rehacer el test</button>
        <button onclick="openModal()" style="margin-left: 10px;">📚 Ver todos los tipos</button>
      </div>
    `;
    document.querySelector(".controls").style.display = "none";
  }
  

function restartQuiz() {
    currentQuestion = 0;
    answers.length = 0;
    document.querySelector(".controls").style.display = "flex";
    renderQuestion();
}

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    renderQuestion();
}

function openModal() {
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


