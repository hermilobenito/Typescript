// Import stylesheets
import './style.css';

// Write TypeScript code!
//const appDiv: HTMLElement = document.getElementById('app');
//appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function greeter(person){
  return "Hello, "+person;
}

let user ="Hermilo User";
console.log(user);
document.body.textContent=greeter(user);
