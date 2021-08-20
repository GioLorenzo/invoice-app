//temporary button for visualization purposes, delete this file when needed.

const ThemeToggle = () => {
  return (
    <button onClick={() => {
      console.log(document.body);
      if (document.querySelector('light-theme') !== 'undefined') {
        console.log('yay');
        const lightTheme = document.querySelectorAll('.light-theme');

      lightTheme.forEach(e => {
        e.classList.remove('light-theme');
        e.classList.add('dark-theme');
      });
      } else if (document.querySelector('dark-theme') !== 'undefined') {
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
