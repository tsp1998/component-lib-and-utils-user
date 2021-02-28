const body = document.body;
import(`ComponentLibraryAndUtils/Button`).then(ButtonModule => { 
  const Button = ButtonModule.default;
  body.appendChild(Button)
})

import(`ComponentLibraryAndUtils/Card`).then(CardModule => {
  const Card = CardModule.default;
  body.appendChild(Card)
})