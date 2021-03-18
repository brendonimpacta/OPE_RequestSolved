window.onload = function() {

  document.body.classList.remove('preload')

  const newsButton = document.getElementById('news-button')
  const emailNews = document.getElementById('email-news')
  
  const contactButton = document.getElementById('contact-button')
  const emailContact = document.getElementById('email-contact')
  const textAreaContact = document.getElementById('textarea-contact')

  const dominio = [
    "@hotmail.com", "@outlook.com", "@gmail.com", "@yahoo.com"
  ];

  emailNews.addEventListener('keyup', function() {
    const inputEmailValue = emailNews.value;

    if (inputEmailValue.includes("@hotmail.com")) {
      newsButton.removeAttribute('disabled');
      newsButton.style.cursor = 'pointer';
      
    } else {
      newsButton.setAttribute('disabled', true);
      newsButton.style.cursor = 'not-allowed';
    };
  });

  [emailContact, textAreaContact].forEach((contactField) => {
    contactField.addEventListener('keyup', function() {
      const inputContactValue = emailContact.value;
      const textAreaContactValue = textAreaContact.value
    
      if (textAreaContactValue != "" && inputContactValue.includes("@hotmail.com")) {
        contactButton.removeAttribute('disabled');
        contactButton.style.cursor = 'pointer';
        
      } else {
        contactButton.setAttribute('disabled', true);
        contactButton.style.cursor = 'not-allowed';
      };
    });
  });

  [...document.getElementsByTagName('a')].forEach((a) => a.classList.add('fromRight'));
};
