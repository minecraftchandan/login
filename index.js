const container = document.getElementById("container");
    const goRegister = document.getElementById("goRegister");
    const goLogin = document.getElementById("goLogin");

    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const placeholder = document.getElementById("formPlaceholder");

    goRegister.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.innerWidth <= 760) {
        signInForm.classList.remove("active");
        signUpForm.classList.add("active");
        placeholder.classList.add("active");
      } else {
        container.classList.add("active");
        placeholder.classList.remove("active");
      }
    });

    goLogin.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.innerWidth <= 760) {
        signUpForm.classList.remove("active");
        signInForm.classList.add("active");
        placeholder.classList.add("active");
      } else {
        container.classList.remove("active");
        placeholder.classList.remove("active");
      }
    })
