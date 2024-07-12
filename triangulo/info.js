function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.getElementById("openbtn");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
        openbtn.style.display = "block";
    } else {
        sidebar.style.display = "block";
        openbtn.style.display = "none";
    }
}

document.getElementById("sidebar").style.display = "none";

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar a').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
        toggleSidebar();
    });
});

window.addEventListener('load', function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    document.querySelectorAll('.sidebar a').forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });
});
