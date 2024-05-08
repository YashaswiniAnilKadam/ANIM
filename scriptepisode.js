function showBlock(blockNumber) {
  // Hide all blocks first
  for (let i = 1; i <= 37; i++) {
    document.getElementById("block" + i).style.display = "none";
  }

  // Show the clicked block
  document.getElementById("block" + blockNumber).style.display = "block";
}

















 // Function to redirect on right-click
  document.addEventListener('contextmenu', function(event) {
    // Prevent right-click context menu
    event.preventDefault();

    // Redirect user to another page
    window.location.href = 'amongus.html'; // Replace 'otherpage.html' with your desired URL
  });

  // Function to redirect on inspect (Ctrl+U or Ctrl+Shift+I)
  document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey && event.keyCode === 85) || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
      // Redirect to another page
      window.location.href = 'amongus.html'; // Replace 'otherpage.html' with your desired URL
    }
  });

  // Function to redirect on view page source
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.keyCode === 83) {
      // Redirect to another page
      window.location.href = 'amongus.html'; // Replace 'otherpage.html' with your desired URL
    }
  });






  // Function to check if developer tools are open
function detectDevTools() {
  // Create a small console profile and check if it exists
  console.profile();
  console.profileEnd();
  if (console.clear) {
    console.clear();
  }
  // Check if console.profiles length is greater than 0
  if (console.profile.length > 0) {
    // Redirect to another page
    window.location.href = "amongus.html";
  }
}

// Check for developer tools on page load
detectDevTools();

// Check for developer tools on keydown event (e.g., Ctrl+Shift+I)
document.addEventListener("keydown", function(event) {
  if (event.keyCode == 123) {
    // Redirect to another page
    window.location.href = "amongus.html";
  }
});

// Check for developer tools on contextmenu event
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
  // Redirect to another page
  window.location.href = "amongus.html";
});





  // Function to check if developer tools are open
    function detectDevTools() {
      // Create a small console profile and check if it exists
      console.profile();
      console.profileEnd();
      if (console.clear) {
        console.clear();
      }
      // Check if console.profiles length is greater than 0
      if (console.profiles.length > 0) {
        // Redirect to another page
        window.location.href = "amongus.html"; // Replace with your desired URL
      }
    }

    // Check for developer tools on page load
    detectDevTools();

    // Check for developer tools on keydown event (e.g., Ctrl+Shift+I)
    document.addEventListener("keydown", function(event) {
      if (event.keyCode == 123) {
        // Redirect to another page
        window.location.href = "amongus.html"; // Replace with your desired URL
      }
    });

    // Check for developer tools on contextmenu event
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
      // Redirect to another page
      window.location.href = "amongus.html"; // Replace with your desired URL
    });


















    (function() {
    // Check if the developer tools are open
    function isDevToolsOpen() {
        const threshold = 160;
        let isOpen = false;
        const devtools = /./;
        devtools.toString = function() {
            isOpen = true;
        };
        console.log('%c', devtools);
        return isOpen;
    }

    // Disable right-click menu
    function disableRightClickMenu() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }

    // Disable shortcut keys
    function disableShortcutKeys() {
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.keyCode === 123)) { // F12
                e.preventDefault();
            }
        });
    }

    // Detect developer tools close event
    function detectDevToolsClose(callback) {
        let isOpen = isDevToolsOpen();
        setInterval(function() {
            const devToolsState = isDevToolsOpen();
            if (isOpen && !devToolsState) {
                callback();
            }
            isOpen = devToolsState;
        }, 500);
    }

    // Disable selection, copy, cut, paste functions
    function disableClipboardFunctions() {
        document.addEventListener('copy', function(e) {
            e.preventDefault();
        });
        document.addEventListener('cut', function(e) {
            e.preventDefault();
        });
        document.addEventListener('paste', function(e) {
            e.preventDefault();
        });
        document.onselectstart = function() {
            return false;
        };
    }

    // Identify and handle eruda and vconsole
    function detectDebuggingTools() {
        if (window.eruda || window.vConsole) {
            // Detected eruda or vconsole
            // Handle accordingly
        }
    }

    // Main function to initialize all features
    function init() {
        disableRightClickMenu();
        disableShortcutKeys();
        detectDevToolsClose(function() {
            // Handle developer tools close event
        });
        disableClipboardFunctions();
        detectDebuggingTools();
    }

    // Initialize
    init();
})();










(function() {
    // Check if the developer tools are open
    function isDevToolsOpen() {
        const threshold = 160;
        let isOpen = false;
        const devtools = /./;
        devtools.toString = function() {
            isOpen = true;
        };
        console.log('%c', devtools);
        return isOpen;
    }

    // Disable right-click menu
    function disableRightClickMenu() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }

    // Disable shortcut keys
    function disableShortcutKeys() {
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.keyCode === 123)) { // F12
                e.preventDefault();
            }
        });
    }

    // Detect developer tools close event
    function detectDevToolsClose(callback) {
        let isOpen = isDevToolsOpen();
        setInterval(function() {
            const devToolsState = isDevToolsOpen();
            if (isOpen && !devToolsState) {
                callback();
            }
            isOpen = devToolsState;
        }, 500);
    }

    // Disable selection, copy, cut, paste functions
    function disableClipboardFunctions() {
        document.addEventListener('copy', function(e) {
            e.preventDefault();
        });
        document.addEventListener('cut', function(e) {
            e.preventDefault();
        });
        document.addEventListener('paste', function(e) {
            e.preventDefault();
        });
        document.onselectstart = function() {
            return false;
        };
    }

    // Identify and handle eruda and vconsole
    function detectDebuggingTools() {
        if (window.eruda || window.vConsole) {
            // Detected eruda or vconsole
            // Handle accordingly
        }
    }

    // Main function to initialize all features
    function init() {
        disableRightClickMenu();
        disableShortcutKeys();
        detectDevToolsClose(function() {
            // Handle developer tools close event
        });
        disableClipboardFunctions();
        detectDebuggingTools();
    }

    // Initialize
    init();
})();










(function() {
    // Check if the developer tools are open
    function isDevToolsOpen() {
        const threshold = 160;
        let isOpen = false;
        const devtools = /./;
        devtools.toString = function() {
            isOpen = true;
        };
        console.log('%c', devtools);
        return isOpen;
    }

    // Disable right-click menu
    function disableRightClickMenu() {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    }

    // Disable shortcut keys
    function disableShortcutKeys() {
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
                (e.keyCode === 123)) { // F12
                e.preventDefault();
            }
        });
    }

    // Detect developer tools close event
    function detectDevToolsClose(callback) {
        let isOpen = isDevToolsOpen();
        setInterval(function() {
            const devToolsState = isDevToolsOpen();
            if (isOpen && !devToolsState) {
                callback();
            }
            isOpen = devToolsState;
        }, 500);
    }

    // Disable selection, copy, cut, paste functions
    function disableClipboardFunctions() {
        document.addEventListener('copy', function(e) {
            e.preventDefault();
        });
        document.addEventListener('cut', function(e) {
            e.preventDefault();
        });
        document.addEventListener('paste', function(e) {
            e.preventDefault();
        });
        document.onselectstart = function() {
            return false;
        };
    }

    // Identify and handle eruda and vconsole
    function detectDebuggingTools() {
        if (window.eruda || window.vConsole) {
            // Detected eruda or vconsole
            // Handle accordingly
        }
    }

    // Function to handle when developer tools are detected as open
    function handleDevToolsOpen() {
        // Here you can redirect the user to another page,
        // display a warning message, or take any other action
        // Example: Redirect to another page
        window.location.href = "amongus.html";
    }

    // Main function to initialize all features
    function init() {
        disableRightClickMenu();
        disableShortcutKeys();
        detectDevToolsClose(function() {
            handleDevToolsOpen();
        });
        disableClipboardFunctions();
        detectDebuggingTools();
    }

    // Initialize
    init();
})();
