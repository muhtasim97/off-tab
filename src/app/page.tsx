"use client";
import { useEffect, useState } from "react";
import Modal from "./components/modal";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // const elementRef = useRef(null);
  // const [isFullScreen, setIsFullScreen] = useState(false);

  // const toggleFullScreen = () => {
  //   const elem: any = elementRef.current;

  //   if (document.fullscreenElement) {
  //     try {
  //       exitFullscreenWithConfirmation();
  //     } catch (err) {
  //       console.error("Exit fullscreen failed:", err);
  //     }
  //   } else {
  //     elem.requestFullscreen().catch((err: any) => {
  //       console.error("Request fullscreen failed:", err);
  //     });
  //   }
  // };

  // const exitFullscreenWithConfirmation = () => {
  //   if (window.confirm("Are you sure you want to exit full-screen mode?")) {
  //     document.exitFullscreen();
  //   }
  // };

  // const handleEscapeKey = (event: any) => {
  //   console.log(event.keyCode, event.key, isFullScreen);
  //   if (isFullScreen && event.key === "Control") {
  //     exitFullscreenWithConfirmation();
  //   }
  // };

  useEffect(() => {
    // Track whether the alert has been shown already
    let alertShown = false;
    let count = 0;
    let count2 = 0;

    // Disable right-click context menu
    document.addEventListener("contextmenu", (e) => {
      count++;
      e.preventDefault();
      if (!alertShown) {
        alert(`You cannot right click`);
        alertShown = true;
      }
    });

    document.addEventListener(
      "keydown",
      (event: any) => {
        if (event.keyCode == 123) {
          console.log("Me here too");
          alert(
            "This function has been disabled to prevent you from stealing my code!"
          );
          // setIsModalOpen(true);
          return false;
        }
        if (
          event.ctrlKey &&
          event.shiftKey &&
          (event.keyCode == 73 || event.keyCode == 67)
        ) {
          console.log("I am here");
          alert(
            "This function has been disabled to prevent you from stealing my code!"
          );
          // setIsModalOpen(true);
          return false;
        }
        if (event.ctrlKey && event.keyCode == 85) {
          alert(
            "This function has been disabled to prevent you from stealing my code!"
          );
          // setIsModalOpen(true);
          return false;
        }
      },
      false
    );

    // when the user loses focus
    window.addEventListener("blur", () => {
      count2++;
      console.log(count2);
      if (!alertShown && count2 <= 3) {
        // alert(`Warning!!!!`);
        // if (window.confirm("Are you sure you want to exit full-screen mode?"))
        setIsModalOpen(true);
        alertShown = true;
      }
    });

    // when the user's focus is back to your tab (website) again
    window.addEventListener("focus", () => {
      // Reset the alertShown flag when the focus is back to your tab
      alertShown = false;
      setIsModalOpen(false);
    });
    
    window.addEventListener("resize", function () {
      if (
        window.outerWidth - window.innerWidth > 100 ||
        window.outerHeight - window.innerHeight > 100
      ) {
        alert("Developer tools are open!");
        // You can take further action here.
      }
    });
  }, []);

  return (
    <div>
      {isModalOpen && (
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close Modal</button>
          </Modal>
        </div>
      )}
      {/* <button onClick={toggleFullScreen}>
        {isFullScreen ? "Exit Full Screen" : "Toggle Full Screen"}
      </button>
      <div
        style={{ background: "white" }}
        ref={elementRef}
        tabIndex={0} // Ensure the element is focusable
        onKeyDown={handleEscapeKey}
      >
        Here is the content
        <button onClick={toggleFullScreen}>
          {isFullScreen ? "Exit Full Screen" : "Toggle Full Screen"}
        </button>
      </div> */}
    </div>
  );
}

export default MyComponent;
