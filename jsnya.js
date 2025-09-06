document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cameraButton = document.querySelector('.camera-button');
    const loginButton = document.querySelector('.login-button');
    const loggedInState = document.querySelector('.logged-in');
    const loggedOutState = document.querySelector('.home-page:not(.logged-in)');
    
    // Check if user is logged in (simulated)
    let isLoggedIn = false;
    
    // Simulate login/logout functionality
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            isLoggedIn = true;
            updateLoginState();
            alert('Login successful!');
        });
    }
    
    // Camera button functionality
    if (cameraButton) {
        cameraButton.addEventListener('click', function() {
            if (!isLoggedIn) {
                alert('Please login first to access the camera');
                return;
            }
            
            // This would be replaced with actual camera access code
            alert('Camera access requested. In a real app, this would open the camera.');
            
            // Simulate posture check notification
            setTimeout(() => {
                showPostureNotification();
            }, 3000);
        });
    }
    
    // Update login state visibility
    function updateLoginState() {
        if (isLoggedIn) {
            if (loggedInState) loggedInState.style.display = 'block';
            if (loggedOutState) loggedOutState.style.display = 'none';
        } else {
            if (loggedInState) loggedInState.style.display = 'none';
            if (loggedOutState) loggedOutState.style.display = 'block';
        }
    }
    
    // Simulate posture notification
    function showPostureNotification() {
        const notification = document.createElement('div');
        notification.className = 'posture-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>Posture Alert!</h3>
                <p>Your posture seems incorrect. Please adjust your sitting position.</p>
                <button class="dismiss-btn">OK</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .posture-notification {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background-color: rgba(231, 76, 60, 0.9);
                color: white;
                padding: 15px;
                text-align: center;
                z-index: 1000;
                animation: slideIn 0.5s forwards;
            }
            
            .notification-content {
                max-width: 500px;
                margin: 0 auto;
            }
            
            .dismiss-btn {
                background-color: white;
                color: #e74c3c;
                border: none;
                padding: 5px 15px;
                border-radius: 4px;
                margin-top: 10px;
                cursor: pointer;
            }
            
            @keyframes slideIn {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        
        // Dismiss button
        notification.querySelector('.dismiss-btn').addEventListener('click', function() {
            notification.style.animation = 'slideOut 0.5s forwards';
            
            // Add slideOut animation
            const slideOutStyle = document.createElement('style');
            slideOutStyle.textContent = `
                @keyframes slideOut {
                    from { transform: translateY(0); }
                    to { transform: translateY(-100%); }
                }
            `;
            document.head.appendChild(slideOutStyle);
            
            setTimeout(() => {
                notification.remove();
                style.remove();
                slideOutStyle.remove();
            }, 500);
        });
    }
    
    // Initialize login state
    updateLoginState();
    
    // For demonstration - simulate being logged in after 2 seconds
    // setTimeout(() => {
    //     isLoggedIn = true;
    //     updateLoginState();
    // }, 2000);
});