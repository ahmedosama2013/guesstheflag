// High-Density Offline Dataset Array (FlagCDN resources) - Israel removed
const fallbackCountries = [
    { name: "Afghanistan", code: "af" }, { name: "Albania", code: "al" }, { name: "Algeria", code: "dz" },
    { name: "Andorra", code: "ad" }, { name: "Angola", code: "ao" }, { name: "Argentina", code: "ar" },
    { name: "Armenia", code: "am" }, { name: "Australia", code: "au" }, { name: "Austria", code: "at" },
    { name: "Azerbaijan", code: "az" }, { name: "Bahamas", code: "bs" }, { name: "Bahrain", code: "bh" },
    { name: "Bangladesh", code: "bd" }, { name: "Barbados", code: "bb" }, { name: "Belarus", code: "by" },
    { name: "Belgium", code: "be" }, { name: "Belize", code: "bz" }, { name: "Benin", code: "bj" },
    { name: "Bhutan", code: "bt" }, { name: "Bolivia", code: "bo" }, { name: "Bosnia and Herzegovina", code: "ba" },
    { name: "Botswana", code: "bw" }, { name: "Brazil", code: "br" }, { name: "Brunei", code: "bn" },
    { name: "Bulgaria", code: "bg" }, { name: "Burkina Faso", code: "bf" }, { name: "Burundi", code: "bi" },
    { name: "Cambodia", code: "kh" }, { name: "Cameroon", code: "cm" }, { name: "Canada", code: "ca" },
    { name: "Cape Verde", code: "cv" }, { name: "Central African Republic", code: "cf" }, { name: "Chad", code: "td" },
    { name: "Chile", code: "cl" }, { name: "China", code: "cn" }, { name: "Colombia", code: "co" },
    { name: "Comoros", code: "km" }, { name: "Congo", code: "cg" }, { name: "Costa Rica", code: "cr" },
    { name: "Croatia", code: "hr" }, { name: "Cuba", code: "cu" }, { name: "Cyprus", code: "cy" },
    { name: "Czechia", code: "cz" }, { name: "Denmark", code: "dk" }, { name: "Djibouti", code: "dj" },
    { name: "Dominica", code: "dm" }, { name: "Dominican Republic", code: "do" }, { name: "Ecuador", code: "ec" },
    { name: "Egypt", code: "eg" }, { name: "El Salvador", code: "sv" }, { name: "Equatorial Guinea", code: "gq" },
    { name: "Eritrea", code: "er" }, { name: "Estonia", code: "ee" }, { name: "Eswatini", code: "sz" },
    { name: "Ethiopia", code: "et" }, { name: "Fiji", code: "fj" }, { name: "Finland", code: "fi" },
    { name: "France", code: "fr" }, { name: "Gabon", code: "ga" }, { name: "Gambia", code: "gm" },
    { name: "Georgia", code: "ge" }, { name: "Germany", code: "de" }, { name: "Ghana", code: "gh" },
    { name: "Greece", code: "gr" }, { name: "Grenada", code: "gd" }, { name: "Guatemala", code: "gt" },
    { name: "Guinea", code: "gn" }, { name: "Guyana", code: "gy" }, { name: "Haiti", code: "ht" },
    { name: "Honduras", code: "hn" }, { name: "Hungary", code: "hu" }, { name: "Iceland", code: "is" },
    { name: "India", code: "in" }, { name: "Indonesia", code: "id" }, { name: "Iran", code: "ir" },
    { name: "Iraq", code: "iq" }, { name: "Ireland", code: "ie" }, { name: "Italy", code: "it" }, 
    { name: "Jamaica", code: "jm" }, { name: "Japan", code: "jp" }, { name: "Jordan", code: "jo" }, 
    { name: "Kazakhstan", code: "kz" }, { name: "Kenya", code: "ke" }, { name: "Kuwait", code: "kw" }, 
    { name: "Kyrgyzstan", code: "kg" }, { name: "Laos", code: "la" }, { name: "Latvia", code: "lv" }, 
    { name: "Lebanon", code: "lb" }, { name: "Lesotho", code: "ls" }, { name: "Liberia", code: "lr" }, 
    { name: "Libya", code: "ly" }, { name: "Liechtenstein", code: "li" }, { name: "Lithuania", code: "lt" }, 
    { name: "Luxembourg", code: "lu" }, { name: "Madagascar", code: "mg" }, { name: "Malawi", code: "mw" }, 
    { name: "Malaysia", code: "my" }, { name: "Maldives", code: "mv" }, { name: "Mali", code: "ml" }, 
    { name: "Malta", code: "mt" }, { name: "Mauritania", code: "mr" }, { name: "Mauritius", code: "mu" }, 
    { name: "Mexico", code: "mx" }, { name: "Moldova", code: "md" }, { name: "Monaco", code: "mc" }, 
    { name: "Mongolia", code: "mn" }, { name: "Montenegro", code: "me" }, { name: "Morocco", code: "ma" }, 
    { name: "Mozambique", code: "mz" }, { name: "Myanmar", code: "mm" }, { name: "Namibia", code: "na" }, 
    { name: "Nepal", code: "np" }, { name: "Netherlands", code: "nl" }, { name: "New Zealand", code: "nz" }, 
    { name: "Nicaragua", code: "ni" }, { name: "Niger", code: "ne" }, { name: "Nigeria", code: "ng" }, 
    { name: "North Korea", code: "kp" }, { name: "North Macedonia", code: "mk" }, { name: "Norway", code: "no" }, 
    { name: "Oman", code: "om" }, { name: "Pakistan", code: "pk" }, { name: "Palestine", code: "ps" }, 
    { name: "Panama", code: "pa" }, { name: "Papua New Guinea", code: "pg" }, { name: "Paraguay", code: "py" }, 
    { name: "Peru", code: "pe" }, { name: "Philippines", code: "ph" }, { name: "Poland", code: "pl" }, 
    { name: "Portugal", code: "pt" }, { name: "Qatar", code: "qa" }, { name: "Romania", code: "ro" }, 
    { name: "Russia", code: "ru" }, { name: "Rwanda", code: "rw" }, { name: "Saudi Arabia", code: "sa" }, 
    { name: "Senegal", code: "sn" }, { name: "Serbia", code: "rs" }, { name: "Seychelles", code: "sc" }, 
    { name: "Sierra Leone", code: "sl" }, { name: "Singapore", code: "sg" }, { name: "Slovakia", code: "sk" }, 
    { name: "Slovenia", code: "si" }, { name: "Somalia", code: "so" }, { name: "South Africa", code: "za" }, 
    { name: "South Korea", code: "kr" }, { name: "South Sudan", code: "ss" }, { name: "Spain", code: "es" }, 
    { name: "Sri Lanka", code: "lk" }, { name: "Sudan", code: "sd" }, { name: "Suriname", code: "sr" }, 
    { name: "Sweden", code: "se" }, { name: "Switzerland", code: "ch" }, { name: "Syria", code: "sy" }, 
    { name: "Taiwan", code: "tw" }, { name: "Tajikistan", code: "tj" }, { name: "Tanzania", code: "tz" }, 
    { name: "Thailand", code: "th" }, { name: "Timor-Leste", code: "tl" }, { name: "Togo", code: "tg" }, 
    { name: "Trinidad and Tobago", code: "tt" }, { name: "Tunisia", code: "tn" }, { name: "Turkey", code: "tr" }, 
    { name: "Turkmenistan", code: "tm" }, { name: "Uganda", code: "ug" }, { name: "Ukraine", code: "ua" }, 
    { name: "United Arab Emirates", code: "ae" }, { name: "United Kingdom", code: "gb" }, { name: "United States", code: "us" }, 
    { name: "Uruguay", code: "uy" }, { name: "Uzbekistan", code: "uz" }, { name: "Vatican City", code: "va" }, 
    { name: "Venezuela", code: "ve" }, { name: "Vietnam", code: "vn" }, { name: "Yemen", code: "ye" }, 
    { name: "Zambia", code: "zm" }, { name: "Zimbabwe", code: "zw" }
].map(item => ({ 
    name: item.name, 
    acceptedNames: [item.name.toLowerCase()],
    flagUrl: `https://flagcdn.com/w320/${item.code}.png` 
}));

// App Global State
let countryPool = [];          
let remainingCountries = [];   
let currentQuestion = null;
let score = 0;

// DOM Cache
const flagImage = document.getElementById('flag-image');
const loadingContainer = document.getElementById('loading-container');
const completionOverlay = document.getElementById('completion-overlay');
const countryInput = document.getElementById('country-input');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackBox = document.getElementById('feedback-box');
const feedbackText = document.getElementById('feedback-text');
const closestMatchText = document.getElementById('closest-match-text');
const scoreDisplay = document.getElementById('score');
const themeToggle = document.getElementById('theme-toggle');
const progressFill = document.getElementById('progress-fill');
const progressCount = document.getElementById('progress-count');

// --- Levenshtein Distance Algorithmic Verification Engine ---
function calculateSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().trim();
    const s2 = str2.toLowerCase().trim();
    
    const track = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null));
    for (let i = 0; i <= s1.length; i += 1) track[0][i] = i;
    for (let j = 0; j <= s2.length; j += 1) track[j][0] = j;
    
    for (let j = 1; j <= s2.length; j += 1) {
        for (let i = 1; i <= s1.length; i += 1) {
            const indicator = s1[i - 1] === s2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1,
                track[j - 1][i] + 1,
                track[j - 1][i - 1] + indicator
            );
        }
    }
    const distance = track[s2.length][s1.length];
    const longestLength = Math.max(s1.length, s2.length);
    
    if (longestLength === 0) return 1.0;
    return (longestLength - distance) / longestLength;
}

// --- Array Shuffling Mechanism ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- API Data Fetch / Fallback Initializer ---
async function initializeFlags() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) throw new Error("API Route Blocked");
        const data = await response.json();
        
        countryPool = data.map(item => ({
            name: item.name.common,
            acceptedNames: [
                item.name.common.toLowerCase(),
                ...(item.name.official ? [item.name.official.toLowerCase()] : []),
                ...(item.altSpellings ? item.altSpellings.map(s => s.toLowerCase()) : [])
            ],
            // Optimized: Prefer lightweight PNGs first to speed up initial network response
            flagUrl: item.flags.png || item.flags.svg
        })).filter(c => c.name && c.flagUrl && c.name.toLowerCase() !== 'israel');
        
        if (countryPool.length === 0) throw new Error("Processing Yield Null");
    } catch (err) {
        console.warn("RestCountries API unreachable. Initializing internal fallback matrix.", err);
        countryPool = [...fallbackCountries];
    } finally {
        loadingContainer.classList.add('hidden');
        flagImage.classList.remove('hidden-opacity');
        countryInput.disabled = false;
        submitBtn.disabled = false;
        
        resetUniquePool();
        generateNextRound();
    }
}

// --- Unique Pool Orchestration ---
function resetUniquePool() {
    remainingCountries = [...countryPool];
    shuffleArray(remainingCountries);
}

// --- Background Image Preloader ---
function preloadNextFlag() {
    if (remainingCountries.length > 0) {
        // Look ahead at the next item in the deck and silently load it into browser cache
        const nextCountry = remainingCountries[remainingCountries.length - 1];
        const preloader = new Image();
        preloader.src = nextCountry.flagUrl;
    }
}

// --- Game Progression Engine ---
function generateNextRound() {
    feedbackBox.className = "feedback-box hidden";
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
    completionOverlay.classList.add('hidden');
    countryInput.disabled = false;
    countryInput.value = "";
    
    if (window.innerWidth > 600) {
        countryInput.focus();
    }
    
    if (remainingCountries.length === 0) {
        completionOverlay.classList.remove('hidden');
        resetUniquePool();
        setTimeout(() => { generateNextRound(); }, 1800);
        return;
    }
    
    currentQuestion = remainingCountries.pop();
    
    flagImage.classList.add('hidden-opacity');
    flagImage.onload = () => {
        flagImage.classList.remove('hidden-opacity');
    };
    flagImage.src = currentQuestion.flagUrl;

    const seenCount = countryPool.length - remainingCountries.length;
    progressCount.textContent = `${seenCount}/${countryPool.length}`;
    const percentage = (seenCount / countryPool.length) * 100;
    progressFill.style.width = `${percentage}%`;

    // Fire preloader immediately to fetch the upcoming image while user interacts with UI
    preloadNextFlag();
}

function processGuess() {
    const userGuess = countryInput.value.trim();
    if (!userGuess) return;
    
    countryInput.disabled = true;
    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
    
    let bestAccuracy = 0;
    currentQuestion.acceptedNames.forEach(altName => {
        const accuracy = calculateSimilarity(userGuess, altName);
        if (accuracy > bestAccuracy) {
            bestAccuracy = accuracy;
        }
    });
    
    const targetName = currentQuestion.name;
    
    if (bestAccuracy >= 0.82) {
        score++;
        scoreDisplay.textContent = score;
        feedbackBox.className = "feedback-box correct";
        feedbackText.textContent = "✓ Correct!";
        
        if (bestAccuracy < 1.0) {
            closestMatchText.textContent = `Accepted Match Name: ${targetName}`;
        } else {
            closestMatchText.textContent = "";
        }
    } else {
        score = 0;
        scoreDisplay.textContent = score;

        feedbackBox.className = "feedback-box wrong";
        feedbackText.textContent = `✕ Incorrect`;
        closestMatchText.textContent = `That was the flag of: ${targetName}`;
    }

    nextBtn.focus();
}

// --- Theme Management System ---
function initTheme() {
    const savedTheme = localStorage.getItem('flag_game_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
    }
}

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('flag_game_theme', isDark ? 'light' : 'dark');
});

// --- Action Listeners ---
document.getElementById('guess-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!submitBtn.classList.contains('hidden') && !countryInput.disabled) {
        processGuess();
    }
});

nextBtn.addEventListener('click', generateNextRound);
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initializeFlags();
});
