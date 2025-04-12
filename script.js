// Nastavení
const CORRECT_PASSWORD = "moreheslo"; // Změňte toto na své skutečné heslo
const STORAGE_KEY = "password_remembered";

// DOM elementy
const loginContainer = document.getElementById('login-container');
const contentContainer = document.getElementById('content-container');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const rememberMe = document.getElementById('remember-me');
const errorMessage = document.getElementById('error-message');

// Funkce pro přihlášení
function login() {
    const enteredPassword = passwordInput.value;
    
    if (enteredPassword === CORRECT_PASSWORD) {
        // Správné heslo - zobraz obsah
        loginContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
        errorMessage.textContent = '';
        
        // Zapamatovat přihlášení, pokud je zaškrtnuto
        if (rememberMe.checked) {
            localStorage.setItem(STORAGE_KEY, 'true');
        }
    } else {
        // Špatné heslo - zobraz chybu
        errorMessage.textContent = 'Nesprávné heslo. Zkuste to znovu.';
        passwordInput.value = '';
    }
}

// Funkce pro odhlášení
function logout() {
    // Skryj obsah a zobraz přihlašovací formulář
    contentContainer.classList.add('hidden');
    loginContainer.classList.remove('hidden');
    
    // Vymaž zapamatované přihlášení
    localStorage.removeItem(STORAGE_KEY);
    passwordInput.value = '';
    rememberMe.checked = false;
}

// Kontrola při načtení stránky - jestli je uživatel přihlášený
function checkRememberedLogin() {
    const isRemembered = localStorage.getItem(STORAGE_KEY) === 'true';
    
    if (isRemembered) {
        loginContainer.classList.add('hidden');
        contentContainer.classList.remove('hidden');
    }
}

// Event listeners
loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);

// Možnost přihlásit se i pomocí Enter
passwordInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        login();
    }
});

// Při načtení stránky zkontroluj zapamatované přihlášení
window.addEventListener('DOMContentLoaded', checkRememberedLogin);