document.addEventListener('DOMContentLoaded', () => {
  const animatedButton = document.querySelector('.animated-button');
  const llama = document.querySelector('.hero img'); 
  const body = document.body;
  const voron = document.querySelector('.voron');
  
  const lightTheme = {
    background: 'rgb(104, 17, 185)',
    text: '#fff'
  };
  
  const darkTheme = {
    background: '#222',
    text: '#7d2ae8'
  };
  
  let isDarkMode = false;


  document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation(); 
      e.preventDefault(); 
      

      console.log('Clicked link:', link.textContent);
    });
  });


  animatedButton.addEventListener('click', (e) => {
    e.stopPropagation(); 
    

    llama.style.transform = 'rotate(360deg)';
    llama.style.transition = 'transform 1s ease-in-out';
    
    setTimeout(() => {
      llama.style.transform = 'rotate(0deg)';
    }, 1000);

   
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
      body.style.background = darkTheme.background;
      document.querySelector('.info').style.backgroundColor = '#111';
      voron.style.filter = 'brightness(0.8)';
    } else {
      body.style.background = lightTheme.background;
      document.querySelector('.info').style.backgroundColor = 'rgb(51, 13, 87)';
      voron.style.filter = 'brightness(1)';
    }

    animatedButton.classList.toggle('active');
  });
});