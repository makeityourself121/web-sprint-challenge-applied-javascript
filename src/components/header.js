const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerD=document.createElement('div')
  headerD.classList.add('header')

  const dateS=document.createElement('span')
  dateS.classList.add('date')
  dateS.textContent=date;
  headerD.appendChild(dateS)

  const titleH1=document.createElement('h1')
  titleH1.textContent=title;
  headerD.appendChild(titleH1)

  const tempS=document.createElement('span')
  tempS.classList.add('temp')
  tempS.textContent=temp;
  headerD.appendChild(tempS)
  
  return headerD
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const head=document.querySelector(selector)
const header=Header('Lambda Times', 'January 6, 2021', '26°')
head.appendChild(header)
return header
}

export { Header, headerAppender }
