function wikiAPI() {
    // Define your variables
    const searchTerm = document.querySelector('#searchTerm').value;
    const wikiDiv = document.querySelector('#wiki');
    const xhr = new XMLHttpRequest();
    const baseURL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + encodeURIComponent(searchTerm);
  
    // Open the API call
    xhr.open('GET', baseURL, true);
  
    // Define the actions that will happen when the response is returned, parse and display the data
    xhr.onload = function() {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
  
        // Locate the branch of the object that is of interest
        const pages = data.query.pages;
  
        // Loop through the branch and output the Wiki pages to the HTML page
        wikiDiv.innerHTML = '';
        for (const pageId in pages) {
          const page = pages[pageId];
          const pageUrl = `https://en.wikipedia.org/?curid=${page.pageid}`;
          const pageInfo = `<a href="${pageUrl}" target="_blank">${page.title}</a><br>`;
          wikiDiv.innerHTML += pageInfo;
        }
      } else {
        console.log('Request failed. Status: ' + xhr.status);
      }
    };
  
    // Send the API request to the server
    xhr.send();
  }
