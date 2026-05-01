// Quiz Game Application
class QuizGame {
    constructor() {
        this.questions = this.initializeQuestions();
        this.currentCategory = 'general';
        this.currentDifficulty = 'easy';
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.gameActive = false;
        
        this.initializeElements();
        this.attachEventListeners();
        this.showScreen('welcomeScreen');
    }
    
    initializeQuestions() {
        return {
            general: {
                easy: [
                    {
                        question: "What is the capital of France?",
                        options: ["London", "Berlin", "Paris", "Madrid"],
                        correct: 2,
                        points: 10
                    },
                    {
                        question: "What is 2 + 2?",
                        options: ["3", "4", "5", "6"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "What color is the sky on a clear day?",
                        options: ["Red", "Green", "Blue", "Yellow"],
                        correct: 2,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "Who painted the Mona Lisa?",
                        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "What is the largest planet in our solar system?",
                        options: ["Earth", "Mars", "Jupiter", "Saturn"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "In which year did World War II end?",
                        options: ["1943", "1944", "1945", "1946"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "What is the smallest country in the world?",
                        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "Who wrote 'Romeo and Juliet'?",
                        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                        correct: 1,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "What is the speed of light in vacuum?",
                        options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "Which element has the atomic number 79?",
                        options: ["Silver", "Platinum", "Gold", "Copper"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "In what year was the Battle of Hastings fought?",
                        options: ["1065", "1066", "1067", "1068"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the derivative of sin(x)?",
                        options: ["cos(x)", "-cos(x)", "tan(x)", "-tan(x)"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "Which planet has the most moons?",
                        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "Who discovered penicillin?",
                        options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the capital of Kazakhstan?",
                        options: ["Almaty", "Nur-Sultan", "Shymkent", "Karaganda"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "In which year did the Byzantine Empire fall?",
                        options: ["1450", "1451", "1452", "1453"],
                        correct: 3,
                        points: 30
                    },
                    {
                        question: "What is the chemical formula for glucose?",
                        options: ["C6H12O6", "C12H22O11", "C6H10O5", "C5H10O5"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "Who composed 'The Four Seasons'?",
                        options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
                        correct: 2,
                        points: 30
                    }
                ]
            },
            programming: {
                easy: [
                    {
                        question: "What does HTML stand for?",
                        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                        correct: 0,
                        points: 10
                    },
                    {
                        question: "Which language is primarily used for web styling?",
                        options: ["JavaScript", "HTML", "CSS", "Python"],
                        correct: 2,
                        points: 10
                    },
                    {
                        question: "What is the result of 5 + '5' in JavaScript?",
                        options: ["10", "'55'", "Error", "undefined"],
                        correct: 1,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "What is a closure in JavaScript?",
                        options: ["A function that returns another function", "A way to close browser windows", "A type of loop", "A method to stop execution"],
                        correct: 0,
                        points: 20
                    },
                    {
                        question: "Which sorting algorithm has O(n log n) average time complexity?",
                        options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "What does API stand for?",
                        options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Integration", "Automated Programming Interface"],
                        correct: 0,
                        points: 20
                    },
                    {
                        question: "Which data structure uses LIFO principle?",
                        options: ["Queue", "Stack", "Array", "Tree"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "What is the purpose of Git?",
                        options: ["To compile code", "Version control", "To test applications", "To design interfaces"],
                        correct: 1,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "What is the time complexity of Dijkstra's algorithm with a binary heap?",
                        options: ["O(V²)", "O(E + V log V)", "O(V log V)", "O(E log V)"],
                        correct: 3,
                        points: 30
                    },
                    {
                        question: "What is the difference between == and === in JavaScript?",
                        options: ["No difference", "== checks type, === checks value", "== checks value, === checks value and type", "== is faster"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is the purpose of the 'volatile' keyword in Java?",
                        options: ["To make variables constant", "To indicate variables may change unexpectedly", "To improve performance", "To create thread-safe methods"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the maximum recursion depth in Python by default?",
                        options: ["100", "500", "1000", "5000"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Which design pattern is used to create objects without specifying their exact classes?",
                        options: ["Singleton", "Factory", "Observer", "Decorator"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the purpose of the 'finally' block in try-catch?",
                        options: ["To handle exceptions", "To execute code regardless of exceptions", "To throw exceptions", "To ignore exceptions"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the difference between HTTP and HTTPS?",
                        options: ["Speed", "Port number", "Encryption", "Protocol version"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is the purpose of the 'virtual' keyword in C++?",
                        options: ["To create virtual functions", "To allocate memory", "To create pure virtual classes", "To optimize code"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the space complexity of merge sort?",
                        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is the purpose of the 'synchronized' keyword in Java?",
                        options: ["To optimize performance", "To ensure thread safety", "To compile faster", "To debug code"],
                        correct: 1,
                        points: 30
                    }
                ]
            },
            history: {
                easy: [
                    {
                        question: "Who was the first President of the United States?",
                        options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "In which year did Columbus discover America?",
                        options: ["1490", "1491", "1492", "1493"],
                        correct: 2,
                        points: 10
                    },
                    {
                        question: "Who built the pyramids in Egypt?",
                        options: ["Romans", "Greeks", "Ancient Egyptians", "Persians"],
                        correct: 2,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "When did the Roman Empire fall?",
                        options: ["476 AD", "500 AD", "410 AD", "450 AD"],
                        correct: 0,
                        points: 20
                    },
                    {
                        question: "Who was the first Emperor of Rome?",
                        options: ["Julius Caesar", "Augustus", "Nero", "Marcus Aurelius"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "In which year did the American Civil War begin?",
                        options: ["1859", "1860", "1861", "1862"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "Who discovered America in 1492?",
                        options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "When was the Declaration of Independence signed?",
                        options: ["1774", "1775", "1776", "1777"],
                        correct: 2,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "In which year did the Battle of Waterloo take place?",
                        options: ["1813", "1814", "1815", "1816"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Who was the last Pharaoh of Egypt?",
                        options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Tutankhamun"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "When did the Ming Dynasty begin in China?",
                        options: ["1366", "1367", "1368", "1369"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Who was the first Muslim Caliph after Prophet Muhammad?",
                        options: ["Umar", "Abu Bakr", "Uthman", "Ali"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "In which year did the Ottoman Empire capture Constantinople?",
                        options: ["1451", "1452", "1453", "1454"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Who wrote 'The Art of War'?",
                        options: ["Confucius", "Lao Tzu", "Sun Tzu", "Mencius"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "When did the Russian Revolution take place?",
                        options: ["1915", "1916", "1917", "1918"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Who was the first Emperor of China?",
                        options: ["Tang Taizong", "Qin Shi Huang", "Han Wudi", "Ming Taizu"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "In which year did the Spanish Armada attack England?",
                        options: ["1586", "1587", "1588", "1589"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "Who was the founder of the Mongol Empire?",
                        options: ["Kublai Khan", "Genghis Khan", "Batu Khan", "Hulagu Khan"],
                        correct: 1,
                        points: 30
                    }
                ]
            },
            politics: {
                easy: [
                    {
                        question: "How many branches of government are there in the US?",
                        options: ["2", "3", "4", "5"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "Who is the current President of the United States? (as of 2024)",
                        options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
                        correct: 0,
                        points: 10
                    },
                    {
                        question: "What is the capital of the United States?",
                        options: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
                        correct: 2,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "How many members are in the US House of Representatives?",
                        options: ["100", "435", "535", "650"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "How many senators are there from each state?",
                        options: ["1", "2", "3", "4"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "What is the term length for a US President?",
                        options: ["4 years", "6 years", "8 years", "2 years"],
                        correct: 0,
                        points: 20
                    },
                    {
                        question: "How many Supreme Court justices are there?",
                        options: ["7", "8", "9", "10"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "What is the minimum age to become US President?",
                        options: ["30", "35", "40", "45"],
                        correct: 1,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "What is the 25th Amendment about?",
                        options: ["Presidential term limits", "Presidential disability and succession", "Voting rights", "Congressional terms"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "How many electoral votes are needed to win the presidency?",
                        options: ["270", "300", "350", "400"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'filibuster' in the US Senate?",
                        options: ["A type of vote", "A tactic to delay or block legislation", "A committee meeting", "A presidential veto"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "Which amendment guarantees freedom of speech?",
                        options: ["First Amendment", "Second Amendment", "Third Amendment", "Fourth Amendment"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'Electoral College'?",
                        options: ["A university for politicians", "The body that elects the President", "A voting method", "A political party"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "How many articles are in the US Constitution?",
                        options: ["5", "6", "7", "8"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is 'gerrymandering'?",
                        options: ["Drawing district boundaries for political advantage", "A type of voting", "A legislative process", "A judicial review"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'line-item veto'?",
                        options: ["Vetoing entire bills", "Vetoing specific parts of bills", "A type of amendment", "A congressional power"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "How many amendments does the US Constitution have?",
                        options: ["25", "26", "27", "28"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is the 'War Powers Act'?",
                        options: ["Declares war", "Limits presidential war powers", "Funds military", "Creates military"],
                        correct: 1,
                        points: 30
                    }
                ]
            },
            science: {
                easy: [
                    {
                        question: "What is H2O?",
                        options: ["Oxygen", "Hydrogen", "Water", "Carbon"],
                        correct: 2,
                        points: 10
                    },
                    {
                        question: "How many planets are in our solar system?",
                        options: ["7", "8", "9", "10"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "What is the largest organ in the human body?",
                        options: ["Heart", "Brain", "Liver", "Skin"],
                        correct: 3,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "What is the powerhouse of the cell?",
                        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "What is the chemical symbol for gold?",
                        options: ["Go", "Gd", "Au", "Ag"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "What is the speed of light?",
                        options: ["299,792,458 m/s", "300,000 km/s", "186,282 miles/s", "All of the above"],
                        correct: 3,
                        points: 20
                    },
                    {
                        question: "What is DNA?",
                        options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Amino Acid", "Protein"],
                        correct: 0,
                        points: 20
                    },
                    {
                        question: "What is the smallest unit of matter?",
                        options: ["Molecule", "Atom", "Proton", "Electron"],
                        correct: 1,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "What is the Heisenberg Uncertainty Principle?",
                        options: ["Energy conservation", "Position and momentum cannot be precisely measured simultaneously", "Wave-particle duality", "Quantum entanglement"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the molecular weight of water?",
                        options: ["16", "18", "20", "22"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the pH of pure water?",
                        options: ["6", "7", "8", "9"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the Schwarzschild radius?",
                        options: ["Radius of Earth", "Event horizon radius of a black hole", "Atomic radius", "Planck length"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the half-life of Carbon-14?",
                        options: ["5,730 years", "10,000 years", "1,000 years", "50,000 years"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the Avogadro constant?",
                        options: ["6.022 × 10²³", "3.14159", "9.8 m/s²", "299,792,458 m/s"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the Bohr model?",
                        options: ["Atomic model with electrons in discrete energy levels", "Model of the solar system", "Model of DNA", "Model of cell division"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the Planck constant?",
                        options: ["6.626 × 10⁻³⁴ J·s", "3.14159", "9.8 m/s²", "1.602 × 10⁻¹⁹ C"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the Rydberg constant?",
                        options: ["1.097 × 10⁷ m⁻¹", "6.626 × 10⁻³⁴ J·s", "9.8 m/s²", "299,792,458 m/s"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the Boltzmann constant?",
                        options: ["1.38 × 10⁻²³ J/K", "6.626 × 10⁻³⁴ J·s", "9.8 m/s²", "299,792,458 m/s"],
                        correct: 0,
                        points: 30
                    }
                ]
            },
            sports: {
                easy: [
                    {
                        question: "How many players are on a basketball team?",
                        options: ["4", "5", "6", "7"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "In which sport do you use a shuttlecock?",
                        options: ["Tennis", "Badminton", "Squash", "Racquetball"],
                        correct: 1,
                        points: 10
                    },
                    {
                        question: "How many innings are in a baseball game?",
                        options: ["7", "8", "9", "10"],
                        correct: 2,
                        points: 10
                    }
                ],
                medium: [
                    {
                        question: "How often are the Olympic Games held?",
                        options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "In which year was the first FIFA World Cup held?",
                        options: ["1928", "1930", "1932", "1934"],
                        correct: 1,
                        points: 20
                    },
                    {
                        question: "How many Grand Slam tennis tournaments are there?",
                        options: ["2", "3", "4", "5"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "What is the maximum score in ten-pin bowling?",
                        options: ["200", "250", "300", "350"],
                        correct: 2,
                        points: 20
                    },
                    {
                        question: "How many players are on a soccer team on the field?",
                        options: ["9", "10", "11", "12"],
                        correct: 2,
                        points: 20
                    }
                ],
                hard: [
                    {
                        question: "What is the 'triple crown' in horse racing?",
                        options: ["Kentucky Derby, Preakness, Belmont", "Three wins in one season", "Three different horses", "Three jockeys"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'perfect game' in baseball?",
                        options: ["No hits, no walks, no errors", "27 consecutive outs", "Strikeout every batter", "Home run every at-bat"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the 'ironman' streak in NFL?",
                        options: ["Most consecutive games played", "Most touchdowns", "Most yards", "Most sacks"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'four minute mile'?",
                        options: ["Running a mile under 4 minutes", "Swimming a mile under 4 minutes", "Cycling a mile under 4 minutes", "All of the above"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'yips' in golf?",
                        options: ["A type of club", "A golf course", "Nervous condition affecting putting", "A type of swing"],
                        correct: 2,
                        points: 30
                    },
                    {
                        question: "What is the 'dead ball' era in baseball?",
                        options: ["Early 1900s with low scoring", "Modern baseball", "Future baseball", "International baseball"],
                        correct: 0,
                        points: 30
                    },
                    {
                        question: "What is the 'triangle offense' in basketball?",
                        options: ["A defensive strategy", "An offensive strategy", "A type of dribble", "A type of shot"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the 'tuck rule' in NFL?",
                        options: ["A passing rule", "A fumble rule", "A scoring rule", "A timeout rule"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the 'silver medal'?",
                        options: ["First place", "Second place", "Third place", "Fourth place"],
                        correct: 1,
                        points: 30
                    },
                    {
                        question: "What is the 'hat trick' in hockey?",
                        options: ["Three goals in one game", "Three assists", "Three penalties", "Three saves"],
                        correct: 0,
                        points: 30
                    }
                ]
            }
        };
    }
    
    initializeElements() {
        // Screens
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.gameScreen = document.getElementById('gameScreen');
        this.scoreScreen = document.getElementById('scoreScreen');
        
        // Welcome screen elements
        this.categorySelect = document.getElementById('categorySelect');
        this.difficultyButtons = document.querySelectorAll('.difficulty-btn');
        this.startGameBtn = document.getElementById('startGame');
        
        // Game screen elements
        this.currentScoreEl = document.getElementById('currentScore');
        this.currentQuestionEl = document.getElementById('currentQuestion');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.characterQuestionEl = document.getElementById('characterQuestion');
        this.questionTextEl = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.nextButton = document.getElementById('nextButton');
        this.appreciationMessageEl = document.getElementById('appreciationMessage');
        
        // Score screen elements
        this.finalMessageEl = document.getElementById('finalMessage');
        this.totalQuestionsScoreEl = document.getElementById('totalQuestionsScore');
        this.correctAnswersEl = document.getElementById('correctAnswers');
        this.finalScoreEl = document.getElementById('finalScore');
        this.percentageEl = document.getElementById('percentage');
        this.badgeTextEl = document.getElementById('badgeText');
        this.playAgainBtn = document.getElementById('playAgain');
    }
    
    attachEventListeners() {
        // Difficulty selection
        this.difficultyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.difficultyButtons.forEach(btn => btn.classList.remove('selected'));
                e.target.classList.add('selected');
                this.currentDifficulty = e.target.dataset.difficulty;
            });
        });
        
        // Start game
        this.startGameBtn.addEventListener('click', () => this.startGame());
        
        // Next button
        this.nextButton.addEventListener('click', () => this.goToNextQuestion());
        
        // Play again
        this.playAgainBtn.addEventListener('click', () => this.resetGame());
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    startGame() {
        this.currentCategory = this.categorySelect.value;
        
        // Check if difficulty is selected
        if (!this.currentDifficulty) {
            this.showMessage('Please select a difficulty level!');
            return;
        }
        
        // Get questions for selected category and difficulty
        this.currentQuestions = [...this.questions[this.currentCategory][this.currentDifficulty]];
        this.shuffleArray(this.currentQuestions);
        
        // Set game parameters
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = this.currentQuestions.length;
        this.gameActive = true;
        
        // Update UI
        this.totalQuestionsEl.textContent = this.totalQuestions;
        this.currentScoreEl.textContent = this.score;
        this.currentQuestionEl.textContent = 1;
        
        // Show game screen
        this.showScreen('gameScreen');
        
        // Load first question
        this.loadQuestion();
    }
    
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.currentQuestions.length) {
            this.endGame();
            return;
        }
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Update question counter
        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        
        // Hide Next button
        this.nextButton.style.display = 'none';
        
        // Update character speech
        this.characterQuestionEl.textContent = this.getRandomQuestionPhrase();
        
        // Update question text
        this.questionTextEl.textContent = question.question;
        
        // Clear and populate options
        this.optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.optionsContainer.appendChild(button);
        });
    }
    
    getRandomQuestionPhrase() {
        const phrases = [
            "Here's your next question!",
            "Let's test your knowledge!",
            "Time for another challenge!",
            "What do you think about this?",
            "Ready for this one?",
            "Here comes a good one!",
            "Let's see what you know!",
            "Question time!"
        ];
        return phrases[Math.floor(Math.random() * phrases.length)];
    }
    
    selectAnswer(selectedIndex) {
        if (!this.gameActive) return;
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const buttons = this.optionsContainer.querySelectorAll('.option-btn');
        
        // Disable all buttons
        buttons.forEach(button => {
            button.disabled = true;
            button.style.cursor = 'not-allowed';
        });
        
        // Show correct/incorrect
        if (selectedIndex === question.correct) {
            buttons[selectedIndex].classList.add('correct');
            this.score += question.points;
            this.correctAnswers++;
            this.currentScoreEl.textContent = this.score;
            this.showAppreciation(question.points);
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            buttons[question.correct].classList.add('correct');
        }
        
        // Show Next button
        this.nextButton.style.display = 'block';
    }
    
    goToNextQuestion() {
        // Hide Next button
        this.nextButton.style.display = 'none';
        
        // Move to next question
        this.currentQuestionIndex++;
        this.loadQuestion();
    }
    
    showAppreciation(points) {
        const messages = {
            10: ["Great job! +10", "Nice work! +10", "Well done! +10", "Excellent! +10"],
            20: ["Awesome! +20", "Fantastic! +20", "Brilliant! +20", "Superb! +20"],
            30: ["Amazing! +30", "Outstanding! +30", "Incredible! +30", "Phenomenal! +30"]
        };
        
        const messageArray = messages[points] || messages[10];
        const message = messageArray[Math.floor(Math.random() * messageArray.length)];
        
        this.appreciationMessageEl.textContent = message;
        this.appreciationMessageEl.style.display = 'block';
        
        setTimeout(() => {
            this.appreciationMessageEl.style.display = 'none';
        }, 1500);
    }
    
    showMessage(message) {
        this.appreciationMessageEl.textContent = message;
        this.appreciationMessageEl.style.display = 'block';
        
        setTimeout(() => {
            this.appreciationMessageEl.style.display = 'none';
        }, 2000);
    }
    
    endGame() {
        this.gameActive = false;
        
        // Calculate percentage
        const percentage = Math.round((this.correctAnswers / this.totalQuestions) * 100);
        
        // Update score screen
        this.totalQuestionsScoreEl.textContent = this.totalQuestions;
        this.correctAnswersEl.textContent = this.correctAnswers;
        this.finalScoreEl.textContent = this.score;
        this.percentageEl.textContent = percentage + '%';
        
        // Set final message and badge
        this.setPerformanceMessage(percentage);
        
        // Show score screen
        this.showScreen('scoreScreen');
    }
    
    setPerformanceMessage(percentage) {
        let message, badge;
        
        if (percentage >= 90) {
            message = "Absolutely incredible! You're a genius!";
            badge = "🏆 Legendary Master";
        } else if (percentage >= 80) {
            message = "Outstanding performance! Excellent work!";
            badge = "🥇 Expert Champion";
        } else if (percentage >= 70) {
            message = "Great job! Very impressive!";
            badge = "🥈 Skilled Player";
        } else if (percentage >= 60) {
            message = "Good effort! Keep practicing!";
            badge = "🥉 Rising Star";
        } else if (percentage >= 50) {
            message = "Not bad! Room for improvement!";
            badge = "⭐ Learning Player";
        } else {
            message = "Keep trying! Practice makes perfect!";
            badge = "📚 Beginner";
        }
        
        this.finalMessageEl.textContent = message;
        this.badgeTextEl.textContent = badge;
    }
    
    resetGame() {
        // Reset game state
        this.currentDifficulty = '';
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.totalQuestions = 0;
        this.gameActive = false;
        
        // Reset UI
        this.difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Show welcome screen
        this.showScreen('welcomeScreen');
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizGame();
});
