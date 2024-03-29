// This function initializes a Godot game by creating a new Engine object with a configuration object.
function init_godot_game() {
  const GODOT_CONFIG = {
    args: [],
    canvasResizePolicy: 2,
    executable: "index",
    experimentalVK: false,
    fileSizes: { "index.pck": 1124224, "index.wasm": 17493574 },
    focusCanvas: true,
    gdnativeLibs: [],
  };
  var engine = new Engine(GODOT_CONFIG);

  // This is an immediately invoked function expression (IIFE) that handles the game initialization process.
  (function () {
    const INDETERMINATE_STATUS_STEP_MS = 100;
    var statusProgress = document.getElementById("status-progress");
    var statusProgressInner = document.getElementById("status-progress-inner");
    var statusIndeterminate = document.getElementById("status-indeterminate");
    var statusNotice = document.getElementById("status-notice");

    var initializing = true;
    var statusMode = "hidden";

    // This function sets the status mode of the game initialization process.
    function setStatusMode(mode) {
      if (statusMode === mode || !initializing) return;
      [statusProgress, statusIndeterminate, statusNotice].forEach((elem) => {
        elem.style.display = "none";
      });
      animationCallbacks = animationCallbacks.filter(function (value) {
        return value != animateStatusIndeterminate;
      });
      switch (mode) {
        case "progress":
          statusProgress.style.display = "block";
          break;
        case "indeterminate":
          statusIndeterminate.style.display = "block";
          animationCallbacks.push(animateStatusIndeterminate);
          break;
        case "notice":
          statusNotice.style.display = "block";
          break;
        case "hidden":
          break;
        default:
          throw new Error("Invalid status mode");
      }
      statusMode = mode;
    }

    // This function animates the indeterminate status of the game initialization process.
    function animateStatusIndeterminate(ms) {
      var i = Math.floor((ms / INDETERMINATE_STATUS_STEP_MS) % 8);
      if (statusIndeterminate.children[i].style.borderTopColor == "") {
        Array.prototype.slice
          .call(statusIndeterminate.children)
          .forEach((child) => {
            child.style.borderTopColor = "";
          });
        statusIndeterminate.children[i].style.borderTopColor = "#dfdfdf";
      }
    }

    // This function sets the status notice of the game initialization process.
    function setStatusNotice(text) {
      while (statusNotice.lastChild) {
        statusNotice.removeChild(statusNotice.lastChild);
      }
      var lines = text.split("\n");
      lines.forEach((line) => {
        statusNotice.appendChild(document.createTextNode(line));
        statusNotice.appendChild(document.createElement("br"));
      });
    }

    // This function displays a failure notice if the game initialization process fails.
    function displayFailureNotice(err) {
      var msg = err.message || err;
      console.error(msg);
      setStatusNotice(msg);
      setStatusMode("notice");
      initializing = false;
    }

    // This block of code checks if WebGL is available and starts the game with the given configuration.
    if (!Engine.isWebGLAvailable()) {
      displayFailureNotice("WebGL not available");
    } else {
      setStatusMode("indeterminate");
      engine
        .startGame({
          onProgress: function (current, total) {
            if (total > 0) {
              statusProgressInner.style.width = (current / total) * 100 + "%";
              setStatusMode("progress");
              if (current === total) {
                // wait for progress bar animation
                setTimeout(() => {
                  setStatusMode("indeterminate");
                }, 500);
              }
            } else {
              setStatusMode("indeterminate");
            }
          },
        })
        .then(() => {
          setStatusMode("hidden");
          initializing = false;
        }, displayFailureNotice);
    }
  })();
}
