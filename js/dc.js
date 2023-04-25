function processInput() {
    // Get the user's input text
    const userInput = document.getElementById("inputArray").value;
    // getElementById, method that belongs to the document object.
  
    // Split the input text into an array using a comma and space as the delimiter
    const inputArray = userInput.split(", ");
  
    // Trim whitespace from each element in the array
    const trimmedArray = inputArray.map(item => item.trim());
   // creates a new array by applying the given function to every element of the original array.
    // Call the lastItem() function with the trimmed array, remove white spaces
    // if inputArray is ['Watermelon', ' Apple', ' Orange ', ' Kiwi']
    // the expression will return a new array ['Watermelon', 'Apple', 'Orange', 'Kiwi'].

    lastItem(trimmedArray);
  }
  
  // Function to find the last item alphabetically in the array and display the results
function lastItem(arr) {
    // Display the original array on the page
    document.getElementById("output").innerHTML = 'Original array: ' + JSON.stringify(arr) + '<br>';
    // convert a JavaScript array (or object) into a JSON string.
  
    // Sort the array alphabetically with case-insensitive comparison
    const sortedArray = arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    // compare function: a negative value if a should be sorted before b
    // a positive value if a should be sorted after b
    // 0 if a and b are equal and their order doesn't matter
    // undefined means the method will use the default locale. 
    // sensitivity set to 'base' means the comparison will only consider base characters, ignoring differences in case and accents or other diacritic marks.
    document.getElementById("output").innerHTML += 'Sorted array: ' + JSON.stringify(sortedArray) + '<br>';
    // display the sorted array
    
    const lastAlphabeticalItem = sortedArray[arr.length - 1];
    // Get the last element of the sorted array
    // Display the last item alphabetically on the page
    document.getElementById("output").innerHTML += 'Last item alphabetically: ' + lastAlphabeticalItem;}
    
function displayAndSortItems() {
      // Get the values from the input fields
    const fruit = document.getElementById('fruit').value.toLowerCase();
    const animal = document.getElementById('animal').value.toLowerCase();
    const state = document.getElementById('state').value.toLowerCase();
    const country = document.getElementById('country').value.toLowerCase();
    
      // Create an array with the entered values
    const items = [fruit, animal, state, country];
    
      // Display the original order
    const originalOrder = document.getElementById('originalOrder');
    originalOrder.innerHTML = items.join(', ');
    
      // Sort the items and display the sorted order
    const sortedItems = items.slice().sort(); // Create a copy of the array before sorting
    const sortedOrder = document.getElementById('sortedOrder');
    sortedOrder.innerHTML = sortedItems.join(', ');
    }
