document.getElementById("themeToggle").addEventListener("click", () =>
{
document.body.classList.toggle("dark-theme");
});
document.getElementById("loadUsersBtn").addEventListener("click", async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = ""; // Clear previous data
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
    }
});
document.querySelectorAll('.question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    console.log(answer);
    answer.classList.toggle('visible');
  });
});
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("liveClock").textContent = time;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();