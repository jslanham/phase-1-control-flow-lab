function scuberGreetingForFeet(distance){
  let response;
  if (distance > 2500){
    response = 'No can do.';
  }else if (distance > 2000){
    response = 'I will gladly take your thirty bucks.';
  }else if(distance > 400){
    response = 'That will be twenty bucks.';
  }else{
    response = 'This one is on me!';
  }
  return response;
}

function ternaryCheckCity(city){
  let response = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
  return response;
}

function switchOnCharmFromTip(tip){
  let response
  switch (tip){
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response =  'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}
