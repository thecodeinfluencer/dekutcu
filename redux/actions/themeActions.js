export const checkTheme = () => {
  return (dispatch, getState) => {
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
      document.querySelector("html").classList.add("dark-theme");

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", event => {
        if (event.matches) {
          document.querySelector("html").classList.add("dark-theme");
          document.querySelector("#select_darkmode").defaultChecked = true;
        } else {
          document.querySelector("html").classList.remove("dark-theme");
          document.querySelector("#select_darkmode").style.color = "inherit";
        }
      });

    // let theme = getState().theme.bool;

    // if (theme) {
    //   document.querySelector("html").classList.add("dark-theme");
    // } else {
    //   document.querySelector("html").classList.remove("dark-theme");
    // }

    dispatch({ type: "CHECK_THEME" });
  };
};

export const changeTheme = bool => {
  return (dispatch, getState) => {
    let themeVal = getState().theme.bool;
    let newThemeVal = !themeVal;

    dispatch({ type: "CHANGE_THEME_VAL", newThemeVal });

    if (themeVal) {
      document.querySelector("html").classList.remove("dark-theme");
    } else {
      document.querySelector("html").classList.add("dark-theme");
    }
  };
};
