
        function browseJobs() {
            alert('Redirecting to the job listings page...');
            // Add logic to navigate to the job listings page
        }

        function applyJob() {
            alert('You have applied for this job!');
            // Add logic to handle job application
        }

        document.getElementById('loginBtn').addEventListener('click', function () {
            toggleForm('loginForm');
        });

        document.getElementById('signupBtn').addEventListener('click', function () {
            toggleForm('signupForm');
        });

        function toggleForm(formId) {
            var forms = document.querySelectorAll('form');
            forms.forEach(function (form) {
                form.style.display = 'none';
            });

            var selectedForm = document.getElementById(formId);
            selectedForm.style.display = 'block';
        }

        function closeForm(formId) {
            var form = document.getElementById(formId);
            form.style.display = 'none';
        }

        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Simulate login logic
            if (username === 'demo' && password === 'demo123') {
                alert('Login successful! Welcome, ' + username + '!');
                closeForm('loginForm');
            } else {
                alert('Login failed. Please check your username and password.');
            }
        }

        function signup() {
            var newUsername = document.getElementById('newUsername').value;
            var email = document.getElementById('email').value;
            var newPassword = document.getElementById('newPassword').value;
            var confirmPassword = document.getElementById('confirmPassword').value;

            // Simulate signup logic
            if (newPassword === confirmPassword) {
                alert('Sign Up successful! New Username: ' + newUsername + ', Email: ' + email);
                closeForm('signupForm');
            } else {
                alert('Password and Confirm Password do not match. Please try again.');
            }
        }
   