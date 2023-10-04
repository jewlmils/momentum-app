// name
function submitName(evt) {
    if (evt.key === "Enter") {
      const entered_name = document.querySelector('#entered-name');
      const nameInput = document.querySelector('#name');
  
      const newName = nameInput.value.trim();
      if (newName === "") {
        alert("Please enter a name ૮ ˙Ⱉ˙ ა rawr!");
        return; 
      }
  
      setTimeout(() => {
        entered_name.innerHTML = newName;
      }, 0);
  
      nameInput.style.display = 'none';
    }
  }
  
  const nameInput = document.querySelector('#name');
  nameInput.addEventListener('keydown', submitName);
  
  
  // focus
  function submitFocus(evt) {
    if (evt.key === "Enter") {
      const label = document.querySelector('#focus-div-label');
      const focusInput = document.querySelector('#focus');
      const enter_focus = document.querySelector('#focus-result');
      label.style.opacity = 0;
  
      setTimeout(() => {
        label.innerHTML = 'TODAY';
        label.style.opacity = 1;
        enter_focus.innerHTML = focusInput.value;
      }, 500);
  
      focusInput.style.display = 'none';
    }
  }
  
  const focus = document.querySelector('#focus');
  focus.addEventListener('keydown', submitFocus);
  
  
  // quotes
  const quote_list = [
    'Nobody exists on purpose. Nobody belongs anywhere.',
    'Camping is just being homeless without the change.',
    'At least the devil has a job!',
    'B—h, my generation gets traumatized for breakfast.',
    'Wubba lubba dub dub!',
    'I turned myself into a pickle, Morty! I am Pickle Rick!'
  ];
  
  function updateQuote() {
    const random = Math.floor(Math.random() * quote_list.length);
    document.querySelector('#quote-result').innerHTML = quote_list[random];
  }
  
  // Initial quote display
  updateQuote();
  
  // change the quote every 30 sec.
  setInterval(updateQuote, 10000);
  
  const quote = document.querySelector('#quote');
  const quote_add = document.querySelector('#quote-add');
  
  quote_add.addEventListener('click', displayAdd);
  function displayAdd() {
    const quotes = document.querySelector('#quotes');
    quotes.style.display = 'none';
    quote.style.display = 'inline';
    quote.focus();
  }
  
  quote.addEventListener('keypress', addQuote);
  function addQuote(event) {
    if (event.key === 'Enter') {
      const quote_value = document.querySelector('#quote').value;
      quote_list.push(quote_value);
      document.querySelector('#quote-result').innerHTML = quote_value;
      quote.style.display = 'none';
      quote.value = '';
      quotes.style.display = 'inline';
    }
  }
  
  console.log(addQuote)
  
  // change bg
  const change_bg = document.querySelector('#change-bg')
  const bg = document.querySelector('body')
  const bg_list = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg',
  'bg7.jpg','bg8.jpg','bg9.jpg']
  let bg_counter = 0
  change_bg.addEventListener('click', changeBg)
  
  function changeBg() {
    bg_counter++
    if (bg_counter >= bg_list.length) {
      bg_counter = 0
    }
    bg.style.backgroundImage = "url('images/" + bg_list[bg_counter] + "')"
  }
  
  