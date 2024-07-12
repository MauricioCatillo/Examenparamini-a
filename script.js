const questions = {
    facil: [
        {
            question: "¿Qué rama del derecho se ocupa de los delitos y las penas?",
            options: ["Derecho Civil", "Derecho Penal", "Derecho Laboral", "Derecho Administrativo"],
            answer: 1,
            explanation: "El derecho penal se ocupa de los delitos y las penas."
        },
        {
            question: "¿Cuál es el documento fundamental que establece los derechos y deberes de los ciudadanos en un país?",
            options: ["Código Civil", "Constitución", "Ley Orgánica", "Tratado Internacional"],
            answer: 1,
            explanation: "La constitución establece los derechos y deberes de los ciudadanos."
        },
        {
            question: "¿Qué significa 'habeas corpus'?",
            options: ["Tienes el cuerpo", "Libre de culpa", "Derecho a la vida", "Justicia para todos"],
            answer: 0,
            explanation: "'Habeas corpus' significa 'tienes el cuerpo'."
        },
        {
            question: "¿Qué es el derecho civil?",
            options: ["El conjunto de normas jurídicas que regulan las relaciones entre los particulares.", "El conjunto de normas jurídicas que regulan la relación entre los particulares y el Estado.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan el comercio entre naciones."],
            answer: 0,
            explanation: "El derecho civil regula las relaciones entre particulares."
        },
        {
            question: "¿Qué es un contrato?",
            options: ["Un acuerdo entre dos o más personas que crea obligaciones y derechos.", "Un documento legal que solo pueden firmar abogados.", "Una ley aprobada por el Congreso.", "Un juicio que se lleva a cabo en la corte."],
            answer: 0,
            explanation: "Un contrato es un acuerdo que crea obligaciones y derechos."
        },
        {
            question: "¿Qué es el derecho penal?",
            options: ["El conjunto de normas jurídicas que regulan las relaciones entre los particulares.", "El conjunto de normas jurídicas que regulan la relación entre los particulares y el Estado.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan el comercio entre naciones."],
            answer: 2,
            explanation: "El derecho penal regula los delitos y las penas."
        },
        {
            question: "¿Qué es un juicio?",
            options: ["Un proceso legal en el que se resuelven conflictos entre partes.", "Un contrato entre dos o más personas.", "Una ley aprobada por el Congreso.", "Un derecho que tienen los ciudadanos."],
            answer: 0,
            explanation: "Un juicio es un proceso legal para resolver conflictos."
        },
        {
            question: "¿Qué es una ley?",
            options: ["Una norma jurídica aprobada por el Congreso.", "Un contrato entre dos o más personas.", "Un juicio que se lleva a cabo en la corte.", "Un derecho que tienen los ciudadanos."],
            answer: 0,
            explanation: "Una ley es una norma aprobada por el Congreso."
        },
        {
            question: "¿Qué es el derecho laboral?",
            options: ["El conjunto de normas jurídicas que regulan las relaciones laborales.", "El conjunto de normas jurídicas que regulan las relaciones entre los particulares.", "El conjunto de normas jurídicas que regulan el comercio entre naciones.", "El conjunto de normas jurídicas que regulan los delitos y las penas."],
            answer: 0,
            explanation: "El derecho laboral regula las relaciones laborales."
        },
        {
            question: "¿Qué es un abogado?",
            options: ["Un profesional que asesora y representa a las personas en asuntos legales.", "Una persona que aprueba leyes.", "Un juez que dicta sentencias.", "Un funcionario del gobierno."],
            answer: 0,
            explanation: "Un abogado asesora y representa en asuntos legales."
        },
        {
            caseQuestion: "Un vecino ha invadido tu propiedad y ha construido una cerca. ¿Qué derecho aplicarías para resolver este problema?",
            options: [],
            answer: null,
            explanation: "El derecho civil regula las disputas de propiedad."
        }
    ],
    normal: [
        {
            question: "¿Qué es un contrato de adhesión?",
            options: ["Un contrato que se firma con pegamento", "Un contrato donde una parte establece todas las cláusulas", "Un contrato entre dos empresas", "Un contrato de trabajo temporal"],
            answer: 1,
            explanation: "Un contrato de adhesión es establecido por una parte."
        },
        {
            question: "¿Qué es el 'fuero'?",
            options: ["Un tipo de impuesto", "Una competencia especial atribuida a ciertas personas", "Un tipo de sentencia", "Un tribunal especial"],
            answer: 1,
            explanation: "El fuero es una competencia especial para ciertas personas."
        },
        {
            question: "¿Qué es el 'derecho consuetudinario'?",
            options: ["Derecho basado en la costumbre", "Derecho internacional", "Derecho escrito", "Derecho romano"],
            answer: 0,
            explanation: "El derecho consuetudinario se basa en la costumbre."
        },
        {
            question: "¿Qué es un recurso de casación?",
            options: ["Un recurso extraordinario que se interpone contra sentencias de tribunales superiores.", "Un tipo de contrato de trabajo temporal.", "Un derecho que tienen los ciudadanos.", "Una norma jurídica aprobada por el Congreso."],
            answer: 0,
            explanation: "Un recurso de casación impugna sentencias superiores."
        },
        {
            question: "¿Qué es la responsabilidad civil?",
            options: ["La obligación de reparar el daño causado a otra persona.", "Un derecho que tienen los ciudadanos.", "Una norma jurídica aprobada por el Congreso.", "Un tipo de contrato de trabajo temporal."],
            answer: 0,
            explanation: "La responsabilidad civil obliga a reparar daños."
        },
        {
            question: "¿Qué es la presunción de inocencia?",
            options: ["El derecho que tiene toda persona a ser considerada inocente hasta que se demuestre lo contrario.", "Una norma jurídica aprobada por el Congreso.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La presunción de inocencia considera a una persona inocente hasta probar lo contrario."
        },
        {
            question: "¿Qué es el derecho mercantil?",
            options: ["El conjunto de normas jurídicas que regulan las relaciones comerciales.", "El conjunto de normas jurídicas que regulan las relaciones laborales.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan las relaciones entre los particulares."],
            answer: 0,
            explanation: "El derecho mercantil regula las relaciones comerciales."
        },
        {
            question: "¿Qué es el derecho administrativo?",
            options: ["El conjunto de normas jurídicas que regulan la organización y funcionamiento de la administración pública.", "El conjunto de normas jurídicas que regulan las relaciones laborales.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan las relaciones comerciales."],
            answer: 0,
            explanation: "El derecho administrativo regula la administración pública."
        },
        {
            question: "¿Qué es el derecho procesal?",
            options: ["El conjunto de normas jurídicas que regulan el proceso judicial.", "El conjunto de normas jurídicas que regulan las relaciones laborales.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan las relaciones comerciales."],
            answer: 0,
            explanation: "El derecho procesal regula el proceso judicial."
        },
        {
            question: "¿Qué es la nulidad de un acto jurídico?",
            options: ["La ineficacia de un acto jurídico por falta de alguno de sus requisitos.", "El conjunto de normas jurídicas que regulan las relaciones laborales.", "El conjunto de normas jurídicas que regulan los delitos y las penas.", "El conjunto de normas jurídicas que regulan las relaciones comerciales."],
            answer: 0,
            explanation: "La nulidad de un acto jurídico es por falta de requisitos."
        },
        {
            caseQuestion: "Has firmado un contrato en el que todas las cláusulas las ha establecido la otra parte. ¿Qué tipo de contrato es este?",
            options: [],
            answer: null,
            explanation: "Un contrato de adhesión tiene todas las cláusulas establecidas por una parte."
        }
    ],
    dificil: [
        {
            question: "¿Qué es la 'prescripción adquisitiva' en derecho civil?",
            options: ["Un tipo de receta médica", "Un modo de adquirir la propiedad por el paso del tiempo", "Una forma de invalidar un contrato", "Un método para calcular impuestos"],
            answer: 1,
            explanation: "La prescripción adquisitiva adquiere propiedad por el tiempo."
        },
        {
            question: "¿Qué significa 'in dubio pro reo'?",
            options: ["El acusado siempre tiene la razón", "En caso de duda, a favor del reo", "La duda beneficia al estado", "Dudar de la inocencia del acusado"],
            answer: 1,
            explanation: "'In dubio pro reo' favorece al reo en caso de duda."
        },
        {
            question: "¿Qué es un 'recurso de amparo'?",
            options: ["Una ayuda económica del estado", "Un proceso para proteger derechos fundamentales", "Un tipo de apelación en casos civiles", "Una forma de solicitar asilo político"],
            answer: 1,
            explanation: "Un recurso de amparo protege derechos fundamentales."
        },
        {
            question: "¿Qué es el 'derecho objetivo'?",
            options: ["El conjunto de normas jurídicas que rigen en un país.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El derecho objetivo es el conjunto de normas jurídicas de un país."
        },
        {
            question: "¿Qué es el 'derecho subjetivo'?",
            options: ["La facultad que tiene una persona de exigir el cumplimiento de una obligación.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El derecho subjetivo es la facultad de exigir el cumplimiento de una obligación."
        },
        {
            question: "¿Qué es la 'capacidad jurídica'?",
            options: ["La aptitud de una persona para ser titular de derechos y obligaciones.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La capacidad jurídica es la aptitud para tener derechos y obligaciones."
        },
        {
            question: "¿Qué es la 'responsabilidad penal'?",
            options: ["La obligación de un individuo de responder por los delitos que comete.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La responsabilidad penal es responder por delitos cometidos."
        },
        {
            question: "¿Qué es la 'acción de inconstitucionalidad'?",
            options: ["Un recurso que impugna la constitucionalidad de una norma jurídica.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La acción de inconstitucionalidad impugna la constitucionalidad de una norma."
        },
        {
            question: "¿Qué es la 'teoría del riesgo' en derecho civil?",
            options: ["La teoría que establece que quien causa un daño debe repararlo.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La teoría del riesgo establece que quien causa un daño debe repararlo."
        },
        {
            question: "¿Qué es el 'principio de legalidad' en derecho penal?",
            options: ["El principio que establece que ningún delito puede ser castigado sin una ley previa.", "El conjunto de normas jurídicas que rigen en un país.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El principio de legalidad establece que ningún delito puede ser castigado sin ley previa."
        },
        {
            caseQuestion: "Un tribunal declara que una ley es inconstitucional. ¿Qué tipo de acción se ha utilizado para llegar a esta conclusión?",
            options: [],
            answer: null,
            explanation: "Una acción de inconstitucionalidad declara que una ley es inconstitucional."
        }
    ],
    ultra: [
        {
            question: "En derecho internacional, ¿qué significa 'ius cogens'?",
            options: ["Derecho flexible", "Norma imperativa de derecho internacional general", "Ley del mar", "Derecho consuetudinario internacional"],
            answer: 1,
            explanation: "'Ius cogens' es una norma imperativa de derecho internacional general."
        },
        {
            question: "¿Qué es la 'teoría de la imprevisión' en derecho contractual?",
            options: ["Una cláusula que prevé todos los escenarios posibles", "La posibilidad de modificar un contrato por circunstancias imprevistas", "Una teoría sobre cómo redactar contratos", "Un principio que invalida contratos mal redactados"],
            answer: 1,
            explanation: "La teoría de la imprevisión permite modificar un contrato por circunstancias imprevistas."
        },
        {
            question: "¿Qué es el 'solved problem' en el análisis económico del derecho?",
            options: ["Un caso judicial resuelto", "Un problema matemático en economía", "La asignación eficiente de derechos de propiedad", "Una técnica para resolver conflictos legales"],
            answer: 2,
            explanation: "El 'solved problem' asigna eficientemente derechos de propiedad."
        },
        {
            question: "¿Qué es la 'acción de nulidad' en derecho administrativo?",
            options: ["Un recurso que se interpone para invalidar un acto administrativo.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La acción de nulidad invalida un acto administrativo."
        },
        {
            question: "¿Qué es el 'derecho de retención'?",
            options: ["El derecho de un acreedor de retener un bien hasta el pago de una deuda.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El derecho de retención permite retener un bien hasta el pago de una deuda."
        },
        {
            question: "¿Qué es el 'principio de proporcionalidad'?",
            options: ["El principio que establece que las sanciones deben ser proporcionales a la gravedad de la falta.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El principio de proporcionalidad establece sanciones proporcionales a la falta."
        },
        {
            question: "¿Qué es el 'principio de irretroactividad' en derecho penal?",
            options: ["El principio que establece que las leyes penales no pueden aplicarse retroactivamente.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El principio de irretroactividad impide aplicar leyes penales retroactivamente."
        },
        {
            question: "¿Qué es la 'acción de tutela' en derecho constitucional?",
            options: ["Un recurso judicial para proteger derechos fundamentales.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La acción de tutela protege derechos fundamentales."
        },
        {
            question: "¿Qué es la 'soberanía nacional'?",
            options: ["El poder supremo del Estado para gobernarse a sí mismo sin interferencias externas.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "La soberanía nacional es el poder supremo del Estado para gobernarse sin interferencias externas."
        },
        {
            question: "¿Qué es el 'principio de igualdad' en derecho constitucional?",
            options: ["El principio que establece que todas las personas deben ser tratadas de manera igual ante la ley.", "Un derecho que tienen los ciudadanos.", "Un tipo de contrato de trabajo temporal.", "Una sentencia dictada por un juez."],
            answer: 0,
            explanation: "El principio de igualdad establece el trato igualitario ante la ley."
        },
        {
            caseQuestion: "Un país adopta una nueva ley que contradice una norma internacional de 'ius cogens'. ¿Qué principio se ha violado?",
            options: [],
            answer: null,
            explanation: "Se ha violado una norma imperativa de derecho internacional general ('ius cogens')."
        }
    ]
};

let currentDifficulty;
let currentQuestionIndex;
let score;
let startTime;

function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('difficulty-select').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    generateCaseQuestion();
    startTime = new Date();
    nextQuestion();
}

function generateCaseQuestion() {
    const difficultyQuestions = questions[currentDifficulty];
    const regularQuestions = difficultyQuestions.slice(0, difficultyQuestions.length - 1);
    const caseQuestion = difficultyQuestions[difficultyQuestions.length - 1];

    const randomIndex = Math.floor(Math.random() * regularQuestions.length);
    const randomQuestion = regularQuestions[randomIndex];
    const correctAnswerIndex = randomQuestion.answer;
    const correctAnswerText = randomQuestion.options[correctAnswerIndex];

    caseQuestion.options = randomQuestion.options.slice();
    caseQuestion.answer = correctAnswerIndex;
    caseQuestion.options[correctAnswerIndex] = correctAnswerText;
}

function nextQuestion() {
    const questionData = questions[currentDifficulty][currentQuestionIndex];
    if (questionData) {
        document.getElementById('question').textContent = questionData.question || questionData.caseQuestion;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
        document.getElementById('result').textContent = '';
        document.getElementById('next-btn').style.display = 'none';
        updateProgressBar();
    } else {
        showFinalResult();
    }
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentDifficulty][currentQuestionIndex];
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    saveTime(currentDifficulty, timeTaken);
    startTime = new Date();

    if (selectedIndex === questionData.answer) {
        score++;
        document.getElementById('result').textContent = '¡Correcto!';
        document.getElementById('result').style.color = '#4CAF50';
    } else {
        document.getElementById('result').textContent = 'Incorrecto. La respuesta correcta era: ' + questionData.options[questionData.answer] + '. ' + questionData.explanation;
        document.getElementById('result').style.color = '#F44336';
    }
    currentQuestionIndex++;
    document.getElementById('next-btn').style.display = 'block';
}

function updateProgressBar() {
    const progress = document.getElementById('progress');
    const totalQuestions = questions[currentDifficulty].length;
    const percentage = (currentQuestionIndex / totalQuestions) * 100;
    progress.style.width = `${percentage}%`;
}

function showFinalResult() {
    const totalQuestions = questions[currentDifficulty].length;
    let message;
    switch(currentDifficulty) {
        case 'facil':
            message = "Esta es mi niña carajo";
            break;
        case 'normal':
            message = "Te ganaste tu sporade amor, te amor mi amor!!";
            break;
        case 'dificil':
            message = "Como siempre orgullesiendome carajo 😭";
            break;
        case 'ultra':
            message = "Ya te graduaste como profesional, mañana mismo te busco trabajo y me compras mi pc gamer, gracias mi amor 😻";
            break;
    }
    document.getElementById('quiz').innerHTML = `
        <h2>Examen completado mi amor</h2>
        <p>Puntuación: ${score} de ${totalQuestions}</p>
        <div id="final-message">${message}</div>
        <button onclick="location.reload()">Volver a jugar</button>
    `;
}

function saveTime(difficulty, time) {
    let times = JSON.parse(localStorage.getItem('times')) || {};
    if (!times[difficulty]) {
        times[difficulty] = [];
    }
    times[difficulty].push(time);
    localStorage.setItem('times', JSON.stringify(times));
}
