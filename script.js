    function showAlert() {
        alert("Hallooooo Gesssss");
    }
    document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active link
                document.querySelector('.nav-links a.active').classList.remove('active');
                link.classList.add('active');
                
                // Show the selected page
                const page = link.getAttribute('data-page');
                if (page === 'home') {
                    document.getElementById('home').style.display = 'block';
                    document.getElementById('about').style.display = 'none';
                } else if (page === 'about') {
                    document.getElementById('home').style.display = 'none';
                    document.getElementById('about').style.display = 'block';
                }
            });
        });
         document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('home').style.display = 'block';
            document.getElementById('about').style.display = 'none';
        });