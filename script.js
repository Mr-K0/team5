// Quiz Game Application
class QuizGame {
    constructor() {
        this.questions = {
            programming: {
                easy: [
                    {
                        question: "What does HTML stand for?",
                        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                        correct: 0
                    },
                    {
                        question: "Which keyword is used to declare a variable in JavaScript?",
                        options: ["var", "int", "string", "declare"],
                        correct: 0
                    },
                    {
                        question: "What is the file extension for a Python file?",
                        options: [".py", ".python", ".pt", ".pyt"],
                        correct: 0
                    }
                ],
                medium: [
                    {
                        question: "Which method is used to add an element to the end of an array in JavaScript?",
                        options: ["push()", "pop()", "shift()", "unshift()"],
                        correct: 0
                    },
                    {
                        question: "What is the purpose of CSS in web development?",
                        options: ["Structure and content", "Styling and layout", "Database management", "Server-side logic"],
                        correct: 1
                    },
                    {
                        question: "Which loop is guaranteed to execute at least once?",
                        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
                        correct: 2
                    },
                    {
                        question: "What is the time complexity of binary search?",
                        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                        correct: 1
                    },
                    {
                        question: "Which data structure uses LIFO principle?",
                        options: ["Queue", "Stack", "Array", "Tree"],
                        correct: 1
                    }
                ],
                hard: [
                    {
                        question: "What is the difference between let and const in JavaScript?",
                        options: ["let can be reassigned, const cannot", "const can be reassigned, let cannot", "Both are the same", "let is for numbers, const is for strings"],
                        correct: 0
                    },
                    {
                        question: "What is a closure in JavaScript?",
                        options: ["A function with access to outer scope", "A way to close applications", "A type of loop", "A database connection"],
                        correct: 0
                    },
                    {
                        question: "Which design pattern is used to create objects without specifying the exact class?",
                        options: ["Factory", "Singleton", "Observer", "Strategy"],
                        correct: 0
                    },
                    {
                        question: "What is the purpose of a promise in JavaScript?",
                        options: ["Handle asynchronous operations", "Create variables", "Define functions", "Style elements"],
                        correct: 0
                    },
                    {
                        question: "Which HTTP method is typically used to update a resource?",
                        options: ["GET", "POST", "PUT", "DELETE"],
                        correct: 2
                    },
                    {
                        question: "What is the difference between SQL and NoSQL databases?",
                        options: ["SQL is relational, NoSQL is non-relational", "NoSQL is relational, SQL is non-relational", "Both are the same", "SQL is for web, NoSQL is for mobile"],
                        correct: 0
                    },
                    {
                        question: "What is the purpose of middleware in Node.js?",
                        options: ["Process requests between request and response", "Create database connections", "Style HTML pages", "Handle frontend logic"],
                        correct: 0
                    },
                    {
                        question: "Which algorithm is used for finding the shortest path in a graph?",
                        options: ["Dijkstra's algorithm", "Bubble sort", "Binary search", "Quick sort"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between authentication and authorization?",
                        options: ["Authentication is who you are, authorization is what you can do", "Authorization is who you are, authentication is what you can do", "Both are the same", "Authentication is for servers, authorization is for clients"],
                        correct: 0
                    },
                    {
                        question: "What is the purpose of Docker in development?",
                        options: ["Containerize applications", "Write code", "Design UI", "Manage databases"],
                        correct: 0
                    }
                ]
            },
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2
                    },
                    {
                        question: "Which planet is known as the Red Planet?",
                        options: ["Venus", "Mars", "Jupiter", "Saturn"],
                        correct: 1
                    },
                    {
                        question: "What is the largest ocean on Earth?",
                        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                        correct: 3
                    }
                ],
                medium: [
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
                        correct: 2
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                        correct: 1
                    },
                    {
                        question: "Which element has the chemical symbol 'Au'?",
                        options: ["Silver", "Aluminum", "Gold", "Argon"],
                        correct: 2
                    },
                    {
                        question: "In which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["299,792 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the Heisenberg Uncertainty Principle about?",
                        options: ["Position and momentum cannot be simultaneously measured precisely", "Energy is conserved", "Light travels in straight lines", "Gravity is universal"],
                        correct: 0
                    },
                    {
                        question: "Who wrote 'One Hundred Years of Solitude'?",
                        options: ["Gabriel García Márquez", "Jorge Luis Borges", "Pablo Neruda", "Mario Vargas Llosa"],
                        correct: 0
                    },
                    {
                        question: "What is the Gödel's Incompleteness Theorem about?",
                        options: ["Mathematical systems have inherent limitations", "Physics laws are complete", "Chemistry is predictable", "Biology evolves"],
                        correct: 0
                    },
                    {
                        question: "Which ancient wonder of the world still stands today?",
                        options: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Lighthouse of Alexandria"],
                        correct: 0
                    },
                    {
                        question: "What is the Turing Test designed to evaluate?",
                        options: ["Machine intelligence", "Human emotions", "Physical strength", "Artistic ability"],
                        correct: 0
                    },
                    {
                        question: "Who developed the theory of continental drift?",
                        options: ["Alfred Wegener", "Charles Darwin", "Albert Einstein", "Isaac Newton"],
                        correct: 0
                    },
                    {
                        question: "What is the Schrödinger's cat thought experiment about?",
                        options: ["Quantum superposition", "Classical mechanics", "Relativity", "Thermodynamics"],
                        correct: 0
                    },
                    {
                        question: "Which philosopher wrote 'The Republic'?",
                        options: ["Plato", "Aristotle", "Socrates", "Confucius"],
                        correct: 0
                    },
                    {
                        question: "What is the Fermi Paradox about?",
                        options: ["Contradiction between high probability of extraterrestrial life and lack of contact", "Black hole physics", "Quantum entanglement", "Time travel paradoxes"],
                        correct: 0
                    },
                    {
                        question: "Who invented the World Wide Web?",
                        options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
                        correct: 0
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                        correct: 1
                    },
                    {
                        question: "In which year did Christopher Columbus reach America?",
                        options: ["1490", "1491", "1492", "1493"],
                        correct: 2
                    },
                    {
                        question: "Which ancient civilization built the pyramids?",
                        options: ["Greeks", "Romans", "Egyptians", "Persians"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "Who was the British Prime Minister during World War II?",
                        options: ["Neville Chamberlain", "Winston Churchill", "Margaret Thatcher", "Tony Blair"],
                        correct: 1
                    },
                    {
                        question: "The Renaissance began in which country?",
                        options: ["France", "Germany", "Italy", "Spain"],
                        correct: 2
                    },
                    {
                        question: "Who wrote the Declaration of Independence?",
                        options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
                        correct: 2
                    },
                    {
                        question: "Which empire was ruled by Julius Caesar?",
                        options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
                        correct: 1
                    },
                    {
                        question: "In which year did the Berlin Wall fall?",
                        options: ["1987", "1988", "1989", "1990"],
                        correct: 2
                    }
                ],
                hard: [
                    {
                        question: "What was the main cause of the Thirty Years' War?",
                        options: ["Religious conflict between Protestants and Catholics", "Territorial disputes", "Economic crisis", "Dynastic succession"],
                        correct: 0
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
                        correct: 1
                    },
                    {
                        question: "The Treaty of Westphalia in 1648 established what principle?",
                        options: ["State sovereignty", "Divine right of kings", "Separation of church and state", "Free trade"],
                        correct: 0
                    },
                    {
                        question: "Which battle marked the turning point in the Pacific War during WWII?",
                        options: ["Battle of Midway", "Battle of Guadalcanal", "Battle of Iwo Jima", "Battle of Okinawa"],
                        correct: 0
                    },
                    {
                        question: "The Magna Carta was signed in which year?",
                        options: ["1205", "1215", "1225", "1235"],
                        correct: 1
                    },
                    {
                        question: "Who was the founder of the Ming Dynasty?",
                        options: ["Kublai Khan", "Zhu Yuanzhang", "Genghis Khan", "Qin Shi Huang"],
                        correct: 1
                    },
                    {
                        question: "The Industrial Revolution began in which country?",
                        options: ["France", "Germany", "United Kingdom", "United States"],
                        correct: 2
                    },
                    {
                        question: "Which ancient Greek philosopher was Alexander the Great's tutor?",
                        options: ["Socrates", "Plato", "Aristotle", "Epicurus"],
                        correct: 2
                    },
                    {
                        question: "The fall of Constantinople occurred in which year?",
                        options: ["1453", "1492", "1521", "1588"],
                        correct: 0
                    },
                    {
                        question: "Who was the first female Prime Minister of the United Kingdom?",
                        options: ["Theresa May", "Margaret Thatcher", "Liz Truss", "Angela Rayner"],
                        correct: 1
                    }
                ]
            },
            politics: {
                easy: [
                    {
                        question: "How many branches of government does the United States have?",
                        options: ["2", "3", "4", "5"],
                        correct: 1
                    },
                    {
                        question: "Who is the current President of the United States? (as of 2024)",
                        options: ["Donald Trump", "Joe Biden", "Barack Obama", "George Bush"],
                        correct: 1
                    },
                    {
                        question: "Which country has the largest democracy in the world?",
                        options: ["United States", "China", "India", "Russia"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "What is the term length for a U.S. Senator?",
                        options: ["2 years", "4 years", "6 years", "8 years"],
                        correct: 2
                    },
                    {
                        question: "Which political system has no hereditary rulers?",
                        options: ["Monarchy", "Democracy", "Empire", "Kingdom"],
                        correct: 1
                    },
                    {
                        question: "The United Nations was founded in which year?",
                        options: ["1943", "1945", "1947", "1949"],
                        correct: 1
                    },
                    {
                        question: "How many members are in the U.S. House of Representatives?",
                        options: ["100", "435", "538", "270"],
                        correct: 1
                    },
                    {
                        question: "Which amendment gave women the right to vote in the U.S.?",
                        options: ["16th", "17th", "18th", "19th"],
                        correct: 3
                    }
                ],
                hard: [
                    {
                        question: "What is the difference between a parliamentary and presidential system?",
                        options: ["Parliamentary: executive and legislative fused, Presidential: separated", "Parliamentary: president elected, Presidential: prime minister appointed", "Parliamentary: no constitution, Presidential: written constitution", "Parliamentary: multi-party, Presidential: two-party"],
                        correct: 0
                    },
                    {
                        question: "The concept of 'separation of powers' was developed by which philosopher?",
                        options: ["John Locke", "Montesquieu", "Rousseau", "Hobbes"],
                        correct: 1
                    },
                    {
                        question: "What is gerrymandering?",
                        options: ["Manipulating electoral districts for political advantage", "Campaign financing", "Voter registration process", "Election monitoring"],
                        correct: 0
                    },
                    {
                        question: "The European Union has how many member countries as of 2024?",
                        options: ["25", "27", "29", "31"],
                        correct: 1
                    },
                    {
                        question: "Which document established the principle of 'rule of law'?",
                        options: ["Magna Carta", "Declaration of Independence", "Constitution", "Bill of Rights"],
                        correct: 0
                    },
                    {
                        question: "What is the 'filibuster' in U.S. Senate procedure?",
                        options: ["Prolonged speech to delay legislation", "Type of voting", "Committee process", "Veto power"],
                        correct: 0
                    },
                    {
                        question: "The 'Iron Curtain' speech was delivered by which leader?",
                        options: ["Winston Churchill", "Franklin D. Roosevelt", "Harry Truman", "Dwight Eisenhower"],
                        correct: 0
                    },
                    {
                        question: "What is the 'Electoral College' in the U.S. election system?",
                        options: ["Body that elects the President", "Educational institution for politicians", "Campaign training center", "Voter registration office"],
                        correct: 0
                    },
                    {
                        question: "The 'Marshall Plan' was designed to do what?",
                        options: ["Rebuild Europe after WWII", "Establish NATO", "Create the United Nations", "End the Cold War"],
                        correct: 0
                    },
                    {
                        question: "What is 'sovereignty' in political science?",
                        options: ["Supreme authority within a territory", "International diplomacy", "Economic independence", "Military power"],
                        correct: 0
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is H2O commonly known as?",
                        options: ["Hydrogen", "Oxygen", "Water", "Carbon"],
                        correct: 2
                    },
                    {
                        question: "How many bones are in the human body?",
                        options: ["106", "206", "306", "406"],
                        correct: 1
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3
                    }
                ],
                medium: [
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
                        correct: 1
                    },
                    {
                        question: "What force keeps planets in orbit around the sun?",
                        options: ["Magnetism", "Gravity", "Friction", "Nuclear force"],
                        correct: 1
                    },
                    {
                        question: "What is the chemical formula for glucose?",
                        options: ["C6H12O6", "H2O", "CO2", "NaCl"],
                        correct: 0
                    },
                    {
                        question: "Which gas makes up most of Earth's atmosphere?",
                        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                        correct: 2
                    },
                    {
                        question: "What is the speed of sound in air?",
                        options: ["343 m/s", "500 m/s", "1000 m/s", "1500 m/s"],
                        correct: 0
                    }
                ],
                hard: [
                    {
                        question: "What is the difference between mitosis and meiosis?",
                        options: ["Mitosis produces identical cells, meiosis produces gametes", "Meiosis produces identical cells, mitosis produces gametes", "Both are the same", "Mitosis is for plants, meiosis is for animals"],
                        correct: 0
                    },
                    {
                        question: "What is the Pauli Exclusion Principle?",
                        options: ["No two electrons can have the same quantum state", "Energy is conserved", "Matter cannot be created or destroyed", "Light travels at constant speed"],
                        correct: 0
                    },
                    {
                        question: "What causes the Northern Lights (Aurora Borealis)?",
                        options: ["Solar particles interacting with Earth's magnetic field", "Reflection of moonlight", "Lightning storms", "Volcanic eruptions"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between DNA and RNA?",
                        options: ["DNA has deoxyribose, RNA has ribose", "RNA has deoxyribose, DNA has ribose", "Both are identical", "DNA is single-stranded, RNA is double-stranded"],
                        correct: 0
                    },
                    {
                        question: "What is the Heisenberg Uncertainty Principle?",
                        options: ["Cannot simultaneously measure position and momentum precisely", "Energy is conserved", "Light speed is constant", "Gravity is universal"],
                        correct: 0
                    },
                    {
                        question: "What causes tides?",
                        options: ["Gravitational pull of moon and sun", "Earth's rotation", "Wind patterns", "Ocean currents"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between mass and weight?",
                        options: ["Mass is constant, weight varies with gravity", "Weight is constant, mass varies with gravity", "Both are the same", "Mass depends on volume, weight on density"],
                        correct: 0
                    },
                    {
                        question: "What is the Doppler Effect?",
                        options: ["Frequency change due to relative motion", "Light bending", "Sound amplification", "Heat transfer"],
                        correct: 0
                    },
                    {
                        question: "What causes seasons on Earth?",
                        options: ["Tilt of Earth's axis", "Distance from sun", "Earth's rotation", "Solar flares"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between a hypothesis and a theory?",
                        options: ["Hypothesis is testable prediction, theory is well-supported explanation", "Theory is prediction, hypothesis is explanation", "Both are the same", "Hypothesis is proven, theory is not"],
                        correct: 0
                    }
                ]
            },
            sports: {
                easy: [
                    {
                        question: "How many players are on a basketball team?",
                        options: ["4", "5", "6", "7"],
                        correct: 1
                    },
                    {
                        question: "In which sport would you perform a slam dunk?",
                        options: ["Tennis", "Basketball", "Soccer", "Golf"],
                        correct: 1
                    },
                    {
                        question: "How often are the Olympic Games held?",
                        options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                        correct: 2
                    }
                ],
                medium: [
                    {
                        question: "Which country has won the most FIFA World Cups?",
                        options: ["Germany", "Argentina", "Brazil", "Italy"],
                        correct: 2
                    },
                    {
                        question: "In tennis, what is a score of zero called?",
                        options: ["Nil", "Zero", "Love", "Nothing"],
                        correct: 2
                    },
                    {
                        question: "How many rounds are there in a professional boxing match?",
                        options: ["10", "12", "15", "8"],
                        correct: 1
                    },
                    {
                        question: "Which sport is known as 'the beautiful game'?",
                        options: ["Tennis", "Basketball", "Soccer", "Golf"],
                        correct: 2
                    },
                    {
                        question: "What is the maximum score in ten-pin bowling?",
                        options: ["200", "250", "300", "350"],
                        correct: 2
                    }
                ],
                hard: [
                    {
                        question: "What is the 'offside rule' in soccer?",
                        options: ["Player cannot be closer to goal than second-last defender when ball is played", "Player must stay in own half", "Player cannot tackle from behind", "Player must keep both feet on ground"],
                        correct: 0
                    },
                    {
                        question: "In cricket, what is a 'duck'?",
                        options: ["Score of zero", "Hitting six runs", "Catching ball", "Bowling out batsman"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between Grand Slam and Masters 1000 in tennis?",
                        options: ["Grand Slams are more prestigious with more points", "Masters are more prestigious", "Both are equal", "Grand Slams are for doubles only"],
                        correct: 0
                    },
                    {
                        question: "In American football, what is a 'two-point conversion'?",
                        options: ["Scoring 2 points instead of extra point after touchdown", "Scoring 2 touchdowns", "Kicking 2 field goals", "Running 2 yards"],
                        correct: 0
                    },
                    {
                        question: "What is the 'ironman' in triathlon?",
                        options: ["Full distance triathlon (2.4 mile swim, 112 mile bike, 26.2 mile run)", "Half triathlon", "Sprint triathlon", "Olympic triathlon"],
                        correct: 0
                    },
                    {
                        question: "In golf, what is a 'birdie'?",
                        options: ["One stroke under par", "One stroke over par", "Two strokes under par", "Hole in one"],
                        correct: 0
                    },
                    {
                        question: "What is the 'decathlon' in track and field?",
                        options: ["10 events over 2 days", "5 events in 1 day", "Marathon with obstacles", "Team competition"],
                        correct: 0
                    },
                    {
                        question: "In baseball, what is a 'perfect game'?",
                        options: ["No opposing batter reaches base", "Team scores in every inning", "Pitcher strikes out everyone", "Game ends in 9 innings"],
                        correct: 0
                    },
                    {
                        question: "What is the 'yellow jersey' in Tour de France?",
                        options: ["Worn by overall race leader", "Best climber", "Best sprinter", "Most aggressive rider"],
                        correct: 0
                    },
                    {
                        question: "In volleyball, what is a 'kill'?",
                        options: ["Attack that results in point", "Serving ace", "Block that scores", "Set that leads to point"],
                        correct: 0
                    }
                ]
            },
            geography: {
                easy: [
                    {
                        question: "What is the capital of Japan?",
                        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                        correct: 2
                    },
                    {
                        question: "Which continent is Egypt located in?",
                        options: ["Asia", "Europe", "Africa", "South America"],
                        correct: 2
                    },
                    {
                        question: "What is the longest river in the world?",
                        options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                        correct: 1
                    }
                ],
                medium: [
                    {
                        question: "How many continents are there?",
                        options: ["5", "6", "7", "8"],
                        correct: 2
                    },
                    {
                        question: "Which country has the largest population?",
                        options: ["India", "China", "United States", "Indonesia"],
                        correct: 0
                    },
                    {
                        question: "What is the smallest country in Asia?",
                        options: ["Maldives", "Singapore", "Brunei", "Bahrain"],
                        correct: 1
                    },
                    {
                        question: "Which desert is the largest in the world?",
                        options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
                        correct: 3
                    },
                    {
                        question: "What is the deepest ocean trench?",
                        options: ["Java Trench", "Puerto Rico Trench", "Mariana Trench", "Japan Trench"],
                        correct: 2
                    }
                ],
                hard: [
                    {
                        question: "What is the difference between latitude and longitude?",
                        options: ["Latitude measures north-south, longitude measures east-west", "Longitude measures north-south, latitude measures east-west", "Both measure the same", "Latitude is for land, longitude is for water"],
                        correct: 0
                    },
                    {
                        question: "Which country spans the most time zones?",
                        options: ["Russia", "United States", "China", "France"],
                        correct: 0
                    },
                    {
                        question: "What is the Ring of Fire?",
                        options: ["Area around Pacific Ocean with high volcanic and seismic activity", "Circle of volcanoes in Africa", "Fire festival in Asia", "Climate change phenomenon"],
                        correct: 0
                    },
                    {
                        question: "Which mountain range separates Europe and Asia?",
                        options: ["Alps", "Pyrenees", "Ural Mountains", "Carpathians"],
                        correct: 2
                    },
                    {
                        question: "What is a 'peninsula'?",
                        options: ["Land surrounded by water on three sides", "Island", "Desert area", "Mountain region"],
                        correct: 0
                    },
                    {
                        question: "Which sea is the saltiest in the world?",
                        options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Black Sea"],
                        correct: 0
                    },
                    {
                        question: "What is the 'Tropic of Cancer'?",
                        options: ["Northernmost point where sun can be directly overhead", "Southernmost point where sun can be directly overhead", "Equator", "Arctic Circle"],
                        correct: 0
                    },
                    {
                        question: "Which country has the most coastline?",
                        options: ["Canada", "Russia", "Australia", "Indonesia"],
                        correct: 0
                    },
                    {
                        question: "What causes earthquakes?",
                        options: ["Movement of tectonic plates", "Volcanic eruptions", "Human activity", "Weather changes"],
                        correct: 0
                    },
                    {
                        question: "What is the difference between weather and climate?",
                        options: ["Weather is short-term, climate is long-term", "Climate is short-term, weather is long-term", "Both are the same", "Weather is for land, climate is for oceans"],
                        correct: 0
                    }
                ]
            }
        };

        this.currentDifficulty = null;
        this.currentCategory = null;
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timer = null;
        this.timeLeft = 15;
        this.totalTime = 0;
        this.selectedOption = null;
        this.isAnswered = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showScreen('startScreen');
    }

    setupEventListeners() {
        // Difficulty buttons
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectDifficulty(e));
        });

        // Category buttons
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectCategory(e));
        });

        // Start quiz button
        document.getElementById('startQuizBtn').addEventListener('click', () => this.startQuiz());

        // Option buttons
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => this.selectOption(e));
        });

        // Control buttons
        document.getElementById('previousBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('exitBtn').addEventListener('click', () => this.exitQuiz());
        document.getElementById('checkBtn').addEventListener('click', () => this.checkAnswer());

        // Score screen buttons
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('homeBtn').addEventListener('click', () => this.goToHome());
    }

    selectDifficulty(e) {
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentDifficulty = e.currentTarget.dataset.difficulty;
        this.updateStartButton();
    }

    selectCategory(e) {
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentCategory = e.currentTarget.dataset.category;
        this.updateStartButton();
    }

    updateStartButton() {
        const startBtn = document.getElementById('startQuizBtn');
        if (this.currentDifficulty && this.currentCategory) {
            startBtn.disabled = false;
        }
    }

    startQuiz() {
        this.currentQuestions = this.getQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalTime = 0;
        this.showScreen('quizScreen');
        this.loadQuestion();
    }

    getQuestions() {
        let questions = [];
        
        if (this.currentCategory === 'all') {
            // Get questions from all categories
            const categories = Object.keys(this.questions);
            categories.forEach(category => {
                if (this.questions[category][this.currentDifficulty]) {
                    questions = questions.concat(this.questions[category][this.currentDifficulty]);
                }
            });
        } else {
            questions = this.questions[this.currentCategory][this.currentDifficulty] || [];
        }

        // Shuffle questions
        questions = this.shuffleArray(questions);

        // Get the required number of questions
        const questionCount = {
            easy: 3,
            medium: 5,
            hard: 10
        };

        return questions.slice(0, questionCount[this.currentDifficulty]);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    loadQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update question info
        document.getElementById('questionNumber').textContent = 
            `Question ${this.currentQuestionIndex + 1}/${this.currentQuestions.length}`;
        document.getElementById('categoryName').textContent = 
            this.currentCategory.charAt(0).toUpperCase() + this.currentCategory.slice(1);
        
        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        
        // Update question text
        document.getElementById('questionText').textContent = question.question;
        
        // Update character question
        document.getElementById('characterQuestion').textContent = question.question;
        
        // Update options
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.querySelector('.option-text').textContent = question.options[index];
            option.classList.remove('selected', 'correct', 'incorrect');
            option.style.pointerEvents = 'auto';
        });
        
        // Reset state
        this.selectedOption = null;
        this.isAnswered = false;
        
        // Update buttons
        document.getElementById('previousBtn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('checkBtn').disabled = true;
        
        // Start timer
        this.startTimer();
        
        // Animate character
        this.animateCharacter();
    }

    startTimer() {
        this.timeLeft = 15;
        this.updateTimerDisplay();
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.totalTime++;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        document.getElementById('timer').textContent = `${this.timeLeft}s`;
        
        // Change color based on time left
        const timerElement = document.getElementById('timer');
        if (this.timeLeft <= 5) {
            timerElement.style.color = '#ef4444';
        } else if (this.timeLeft <= 10) {
            timerElement.style.color = '#fbbf24';
        } else {
            timerElement.style.color = 'white';
        }
    }

    selectOption(e) {
        if (this.isAnswered) return;
        
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        e.currentTarget.classList.add('selected');
        this.selectedOption = e.currentTarget.dataset.option;
        document.getElementById('checkBtn').disabled = false;
    }

    checkAnswer() {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        clearInterval(this.timer);
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const correctAnswer = String.fromCharCode(65 + question.correct);
        const isCorrect = this.selectedOption === correctAnswer;
        
        // Show correct/incorrect styling
        document.querySelectorAll('.option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (option.dataset.option === this.selectedOption && !isCorrect) {
                option.classList.add('incorrect');
            }
        });
        
        // Update score and show appreciation
        if (isCorrect) {
            this.score++;
            this.showPointAppreciation();
            this.addBackgroundEffect('correct');
        } else {
            this.addBackgroundEffect('wrong');
        }
        
        // Update character reaction
        this.updateCharacterReaction(isCorrect);
        
        // Auto-advance after delay
        setTimeout(() => {
            if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                this.nextQuestion();
            } else {
                this.endQuiz();
            }
        }, 2000);
    }

    timeUp() {
        clearInterval(this.timer);
        this.isAnswered = true;
        
        // Show correct answer
        const question = this.currentQuestions[this.currentQuestionIndex];
        document.querySelectorAll('.option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            }
        });
        
        this.addBackgroundEffect('wrong');
        this.updateCharacterReaction(false);
        
        setTimeout(() => {
            if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                this.nextQuestion();
            } else {
                this.endQuiz();
            }
        }, 2000);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit the quiz?')) {
            clearInterval(this.timer);
            this.goToHome();
        }
    }

    endQuiz() {
        clearInterval(this.timer);
        this.showScoreScreen();
    }

    showScoreScreen() {
        this.showScreen('scoreScreen');
        
        // Calculate accuracy
        const accuracy = Math.round((this.score / this.currentQuestions.length) * 100);
        
        // Update score display
        document.getElementById('scoreResult').textContent = 
            `${this.score} out of ${this.currentQuestions.length} correct!`;
        document.getElementById('accuracyPercent').textContent = `${accuracy}%`;
        document.getElementById('totalTime').textContent = `${this.totalTime}s`;
        
        // Update message based on performance
        let message = '';
        if (accuracy >= 80) {
            message = 'Excellent! You\'re a quiz master!';
        } else if (accuracy >= 60) {
            message = 'Good job! Keep practicing!';
        } else if (accuracy >= 40) {
            message = 'Needs Practice';
        } else {
            message = 'Keep trying! You\'ll get better!';
        }
        
        document.getElementById('scoreMessage').textContent = message;
    }

    restartQuiz() {
        this.startQuiz();
    }

    goToHome() {
        clearInterval(this.timer);
        this.currentDifficulty = null;
        this.currentCategory = null;
        
        // Reset UI
        document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        document.getElementById('startQuizBtn').disabled = true;
        
        this.showScreen('startScreen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showPointAppreciation() {
        const appreciation = document.getElementById('pointAppreciation');
        const messages = [
            'Great Job! +1 Point',
            'Excellent! +1 Point',
            'Brilliant! +1 Point',
            'Perfect! +1 Point',
            'Amazing! +1 Point'
        ];
        
        document.getElementById('appreciationText').textContent = 
            messages[Math.floor(Math.random() * messages.length)];
        
        appreciation.classList.add('show');
        
        setTimeout(() => {
            appreciation.classList.remove('show');
        }, 1500);
    }

    addBackgroundEffect(type) {
        document.body.classList.add(type + '-answer');
        setTimeout(() => {
            document.body.classList.remove(type + '-answer');
        }, 600);
    }

    animateCharacter() {
        const character = document.querySelector('.character-host.mini .character');
        if (character) {
            character.style.animation = 'none';
            setTimeout(() => {
                character.style.animation = 'bounce 2s infinite';
            }, 10);
        }
    }

    updateCharacterReaction(isCorrect) {
        const speechBubble = document.querySelector('.character-host.mini .speech-bubble p');
        if (speechBubble) {
            const correctMessages = [
                "That's right! Excellent!",
                "Correct! You're doing great!",
                "Well done! Keep it up!",
                "Perfect! Amazing knowledge!",
                "Brilliant! You're on fire!"
            ];
            
            const wrongMessages = [
                "Not quite, but keep trying!",
                "Almost there! Don't give up!",
                "Nice try! You'll get the next one!",
                "Not this time, but stay focused!",
                "Keep going! You're learning!"
            ];
            
            const messages = isCorrect ? correctMessages : wrongMessages;
            speechBubble.textContent = messages[Math.floor(Math.random() * messages.length)];
        }
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizGame();
});
