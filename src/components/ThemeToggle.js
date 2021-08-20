//temporary button for light/dark mode visualization purposes, delete this file when needed.
//checks body.classList for 'light-theme' or 'dark-theme'
//replaces all classes of 'light-theme' to class 'dark-theme and visa-versa

const ThemeToggle = () => {
  return (
    <button onClick={() => {
      console.log(document.body);
  
      if (document.body.classList.contains('light-theme') !== false) {
        const lightTheme = document.querySelectorAll('.light-theme');

      lightTheme.forEach(e => {
        e.classList.remove('light-theme');
        e.classList.add('dark-theme');
      });
      } else if (document.body.classList.contains('light-theme') === false){
        const darkTheme = document.querySelectorAll('.dark-theme');

      darkTheme.forEach(e => {
        e.classList.remove('dark-theme');
        e.classList.add('light-theme');
      });
      }
    }}>Light/Dark</button>
  )
}

export default ThemeToggle
