// Programming Quiz Application
class QuizApp {
    constructor() {
        this.questions = {
            python: {
                medium: [
                    {
                        question: "Which of these is NOT a Python data type?",
                        options: ["list", "tuple", "dict", "array"],
                        correct: 3
                    }
                ]
            },
            ruby: {
                medium: [
                    {
                        question: "Ruby file extension?",
                        options: [".ru", ".rb", ".rby", ".r"],
                        correct: 1
                    }
                ]
            },
            javascript: {
                medium: [
                    {
                        question: "Which keyword declares a constant in JavaScript?",
                        options: ["var", "let", "const", "static"],
                        correct: 2
                    }
                ]
            }
        };

        // Expanded question database for all categories
        this.allQuestions = [
            // Python
            { category: "python", question: "Which of these is NOT a Python data type?", options: ["list", "tuple", "dict", "array"], correct: 3, difficulty: "medium" },
            { category: "python", question: "What is the output of print(2 ** 3)?", options: ["6", "8", "9", "23"], correct: 1, difficulty: "easy" },
            { category: "python", question: "Which method is used to add an element to a list?", options: ["add()", "append()", "push()", "insert()"], correct: 1, difficulty: "easy" },
            { category: "python", question: "What does PEP 8 stand for?", options: ["Python Enhancement Proposal", "Python Error Protocol", "Python Extension Package", "Python Environment Path"], correct: 0, difficulty: "hard" },
            { category: "python", question: "What is a list comprehension?", options: ["Concise way to create lists", "List documentation", "List compression", "List concatenation"], correct: 0, difficulty: "medium" },
            
            // Ruby
            { category: "ruby", question: "Ruby file extension?", options: [".ru", ".rb", ".rby", ".r"], correct: 1, difficulty: "medium" },
            { category: "ruby", question: "What is Ruby on Rails?", options: ["Web framework", "Ruby compiler", "Ruby IDE", "Ruby debugger"], correct: 0, difficulty: "easy" },
            { category: "ruby", question: "Which symbol creates a block in Ruby?", options: ["{ }", "do end", "Both", "def end"], correct: 2, difficulty: "medium" },
            { category: "ruby", question: "What is a mixin in Ruby?", options: ["Module included in class", "Ruby gem", "Ruby method", "Ruby variable"], correct: 0, difficulty: "hard" },
            { category: "ruby", question: "What does 'everything is an object' mean in Ruby?", options: ["All values are objects", "Everything is a class", "Everything is a method", "Everything is a variable"], correct: 0, difficulty: "easy" },
            
            // JavaScript
            { category: "javascript", question: "Which keyword declares a constant in JavaScript?", options: ["var", "let", "const", "static"], correct: 2, difficulty: "medium" },
            { category: "javascript", question: "What is the output of typeof null?", options: ["'null'", "'undefined'", "'object'", "'number'"], correct: 2, difficulty: "hard" },
            { category: "javascript", question: "Which method converts JSON to object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.convert()"], correct: 1, difficulty: "easy" },
            { category: "javascript", question: "What is hoisting in JavaScript?", options: ["Moving declarations to top", "Raising errors", "Lifting DOM elements", "Scrolling page"], correct: 0, difficulty: "hard" },
            { category: "javascript", question: "What does '===' operator check?", options: ["Value only", "Type only", "Value and type", "Reference only"], correct: 2, difficulty: "medium" },
            
            // Java
            { category: "java", question: "Which keyword is used to inherit a class in Java?", options: ["extends", "implements", "inherits", "super"], correct: 0, difficulty: "easy" },
            { category: "java", question: "What is the default value of int in Java?", options: ["0", "1", "null", "undefined"], correct: 0, difficulty: "easy" },
            { category: "java", question: "Which collection allows duplicate elements?", options: ["Set", "Map", "List", "Queue"], correct: 2, difficulty: "medium" },
            { category: "java", question: "What is JVM?", options: ["Java Virtual Machine", "Java Variable Manager", "Java Version Manager", "Java Vector Method"], correct: 0, difficulty: "easy" },
            { category: "java", question: "What is the difference between String and StringBuilder?", options: ["String is immutable, StringBuilder is mutable", "StringBuilder is immutable", "No difference", "StringBuilder is deprecated"], correct: 0, difficulty: "hard" },
            
            // C
            { category: "c", question: "Which header file contains printf()?", options: ["<stdlib.h>", "<stdio.h>", "<conio.h>", "<math.h>"], correct: 1, difficulty: "easy" },
            { category: "c", question: "What is the size of int in C (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"], correct: 1, difficulty: "medium" },
            { category: "c", question: "Which operator gets the address of a variable?", options: ["*", "&", "#", "@"], correct: 1, difficulty: "medium" },
            { category: "c", question: "What does malloc() do?", options: ["Allocates memory", "Frees memory", "Reallocates memory", "Copies memory"], correct: 0, difficulty: "medium" },
            { category: "c", question: "What is a pointer in C?", options: ["Variable storing memory address", "Variable storing value", "Function name", "Array name"], correct: 0, difficulty: "easy" },
            
            // C++
            { category: "cpp", question: "What is the default access specifier in class?", options: ["public", "private", "protected", "internal"], correct: 1, difficulty: "easy" },
            { category: "cpp", question: "Which feature allows function overloading?", options: ["Different return types", "Different parameter lists", "Different names", "Different namespaces"], correct: 1, difficulty: "medium" },
            { category: "cpp", question: "What is a constructor?", options: ["Initializes object", "Destroys object", "Copies object", "Compares objects"], correct: 0, difficulty: "easy" },
            { category: "cpp", question: "What is polymorphism?", options: ["Multiple forms", "Single inheritance", "Memory management", "Templates"], correct: 0, difficulty: "medium" },
            { category: "cpp", question: "Which operator cannot be overloaded?", options: ["+", "::", "=", "<<"], correct: 1, difficulty: "hard" },
            
            // SQL
            { category: "sql", question: "Which SQL statement retrieves data?", options: ["GET", "SELECT", "FETCH", "READ"], correct: 1, difficulty: "easy" },
            { category: "sql", question: "Which clause filters grouped data?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correct: 1, difficulty: "medium" },
            { category: "sql", question: "What is a primary key?", options: ["Unique identifier", "Foreign reference", "Index field", "Auto-increment"], correct: 0, difficulty: "easy" },
            { category: "sql", question: "Which join returns all records from left table?", options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "FULL JOIN"], correct: 2, difficulty: "medium" },
            { category: "sql", question: "What is normalization?", options: ["Organizing data to reduce redundancy", "Encrypting data", "Backing up data", "Indexing data"], correct: 0, difficulty: "hard" },
            
            // DBMS
            { category: "dbms", question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Application, Configuration, Interface, Database", "Automation, Computation, Integration, Distribution"], correct: 0, difficulty: "hard" },
            { category: "dbms", question: "What is a transaction?", options: ["Unit of work", "Database backup", "User login", "Table creation"], correct: 0, difficulty: "medium" },
            { category: "dbms", question: "Which is NOT a database model?", options: ["Relational", "Hierarchical", "Network", "Linear"], correct: 3, difficulty: "medium" },
            { category: "dbms", question: "What is indexing used for?", options: ["Faster data retrieval", "Data security", "Data compression", "Data backup"], correct: 0, difficulty: "easy" },
            { category: "dbms", question: "What is a deadlock?", options: ["Two transactions waiting for each other", "Database crash", "Memory overflow", "Connection timeout"], correct: 0, difficulty: "hard" }
        ];

        this.currentDifficulty = 'medium';
        this.currentCategory = 'all';
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalTime = 0;
        this.timerInterval = null;
        this.timeLeft = 15;
        this.selectedOption = null;
        this.isAnswered = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadFromStorage();
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

        // Start button
        document.getElementById('startBtn').addEventListener('click', () => this.startQuiz());

        // Option selection
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', (e) => this.selectOption(e));
        });

        // Control buttons
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('exitBtn').addEventListener('click', () => this.exitQuiz());
        document.getElementById('checkBtn').addEventListener('click', () => this.checkAnswer());

        // Results buttons
        document.getElementById('restartBtn').addEventListener('click', () => this.restartQuiz());
        document.getElementById('homeBtn').addEventListener('click', () => this.goHome());

        // Theme toggle
        document.querySelector('.theme-toggle').addEventListener('click', () => this.toggleTheme());
    }

    loadFromStorage() {
        const savedDifficulty = localStorage.getItem('quizDifficulty');
        const savedCategory = localStorage.getItem('quizCategory');
        
        if (savedDifficulty) {
            this.selectDifficultyByValue(savedDifficulty);
        }
        
        if (savedCategory) {
            this.selectCategoryByValue(savedCategory);
        }
    }

    selectDifficulty(e) {
        const btn = e.currentTarget;
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentDifficulty = btn.dataset.difficulty;
        localStorage.setItem('quizDifficulty', this.currentDifficulty);
    }

    selectDifficultyByValue(value) {
        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.difficulty-btn[data-difficulty="${value}"]`);
        if (btn) {
            btn.classList.add('active');
            this.currentDifficulty = value;
        }
    }

    selectCategory(e) {
        const btn = e.currentTarget;
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.category;
        localStorage.setItem('quizCategory', this.currentCategory);
    }

    selectCategoryByValue(value) {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        const btn = document.querySelector(`.category-btn[data-category="${value}"]`);
        if (btn) {
            btn.classList.add('active');
            this.currentCategory = value;
        }
    }

    getQuestions() {
        let filtered = this.allQuestions;
        
        // Filter by category
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(q => q.category === this.currentCategory);
        }
        
        // Filter by difficulty
        filtered = filtered.filter(q => q.difficulty === this.currentDifficulty);
        
        // Shuffle
        filtered = this.shuffleArray(filtered);
        
        // Get required count based on difficulty
        const count = {
            easy: 3,
            medium: 5,
            hard: 10
        }[this.currentDifficulty] || 5;
        
        return filtered.slice(0, count);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    startQuiz() {
        this.currentQuestions = this.getQuestions();
        
        if (this.currentQuestions.length === 0) {
            alert('No questions available for this category and difficulty combination.');
            return;
        }
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalTime = 0;
        
        this.showScreen('quizScreen');
        this.loadQuestion();
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    }

    loadQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        this.isAnswered = false;
        this.selectedOption = null;
        this.timeLeft = 15;
        
        // Update UI
        document.getElementById('questionNumber').textContent = 
            `Question ${this.currentQuestionIndex + 1}/${this.currentQuestions.length}`;
        document.getElementById('categoryBadge').textContent = 
            question.category.charAt(0).toUpperCase() + question.category.slice(1);
        document.getElementById('questionText').textContent = question.question;
        
        // Update options
        const options = document.querySelectorAll('.option');
        options.forEach((opt, idx) => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.querySelector('.option-text').textContent = question.options[idx];
            opt.style.pointerEvents = 'auto';
        });
        
        // Update progress bars
        const progress = ((this.currentQuestionIndex + 1) / this.currentQuestions.length) * 100;
        document.getElementById('progressFill1').style.width = `${progress}%`;
        document.getElementById('progressFill2').style.width = `${Math.min(progress + 20, 100)}%`;
        
        // Update controls
        document.getElementById('prevBtn').disabled = this.currentQuestionIndex === 0;
        document.getElementById('checkBtn').disabled = true;
        
        // Start timer
        this.startTimer();
    }

    startTimer() {
        this.updateTimerDisplay();
        
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.totalTime++;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerEl = document.getElementById('timer');
        timerEl.textContent = `${this.timeLeft}s`;
        
        if (this.timeLeft <= 5) {
            timerEl.style.color = '#ef4444';
        } else if (this.timeLeft <= 10) {
            timerEl.style.color = '#fbbf24';
        } else {
            timerEl.style.color = 'white';
        }
    }

    selectOption(e) {
        if (this.isAnswered) return;
        
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
        this.selectedOption = e.currentTarget.dataset.option;
        document.getElementById('checkBtn').disabled = false;
    }

    checkAnswer() {
        if (this.isAnswered || !this.selectedOption) return;
        
        this.isAnswered = true;
        clearInterval(this.timerInterval);
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        const correctIndex = question.correct;
        const selectedIndex = this.selectedOption.charCodeAt(0) - 65;
        const isCorrect = selectedIndex === correctIndex;
        
        // Show results
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.style.pointerEvents = 'none';
            if (idx === correctIndex) {
                opt.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                opt.classList.add('incorrect');
            }
        });
        
        if (isCorrect) {
            this.score++;
        }
        
        // Auto-advance after delay
        setTimeout(() => {
            if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.loadQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }

    timeUp() {
        this.isAnswered = true;
        clearInterval(this.timerInterval);
        
        const question = this.currentQuestions[this.currentQuestionIndex];
        
        // Show correct answer
        document.querySelectorAll('.option').forEach((opt, idx) => {
            opt.style.pointerEvents = 'none';
            if (idx === question.correct) {
                opt.classList.add('correct');
            }
        });
        
        setTimeout(() => {
            if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
                this.currentQuestionIndex++;
                this.loadQuestion();
            } else {
                this.showResults();
            }
        }, 1500);
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.loadQuestion();
        }
    }

    exitQuiz() {
        if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
            clearInterval(this.timerInterval);
            this.goHome();
        }
    }

    showResults() {
        this.showScreen('resultsScreen');
        
        const accuracy = Math.round((this.score / this.currentQuestions.length) * 100);
        
        document.getElementById('correctCount').textContent = this.score;
        document.getElementById('totalCount').textContent = this.currentQuestions.length;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        document.getElementById('totalTime').textContent = `${this.totalTime}s`;
        
        // Feedback message
        let feedback = '';
        if (accuracy >= 80) {
            feedback = 'Excellent! 🎉';
        } else if (accuracy >= 60) {
            feedback = 'Good job! 👍';
        } else if (accuracy >= 40) {
            feedback = 'Needs Practice';
        } else {
            feedback = 'Keep trying! 💪';
        }
        document.getElementById('feedbackText').textContent = feedback;
    }

    restartQuiz() {
        this.startQuiz();
    }

    goHome() {
        clearInterval(this.timerInterval);
        this.showScreen('startScreen');
    }

    toggleTheme() {
        document.body.classList.toggle('light-theme');
        const icon = document.querySelector('.theme-toggle i');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
