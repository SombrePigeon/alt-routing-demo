self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  const url = new URL(event.request.url)
  const path = url.pathname;
  if(path == "/dice/content.html")
  {
      const dice = url.searchParams.get("dice");
      
      event.respondWith(handleCustomHTMLResponse(dice));
  }

});

function handleCustomHTMLResponse(dice) {
    const dices = dice.split('d');
    let result = 0;
    let htmlContent = "";
    for(let d = 0; d< dices[0];d++ )
    {
        const res =  Math.floor(getRandomIntInclusive(1, dices[1]));
        result += res;
        htmlContent += `
        <p><em>Dice ${d+1} is d${dices[1]} résult :</em> ${res}</p>
    `;

    }
    htmlContent += `
        <p><em>Dice total résult :</em> ${result}</p>
    `;
    return new Response(htmlContent, {
        headers: {
        'Content-Type': 'text/html; charset=UTF-8'
        }
    });
}
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}
