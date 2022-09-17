 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </script>
    <script> 
      let dictionary = [];
      let displayText = document.getElementById("displayText");

      function addWords() {
        dictionary[dictionary.length] = document.getElementById("addWord").value.toUpperCase();
        displayText.innerHTML = "This word has been added to the dictionary";
        document.getElementById("display").appendChild(displayText);
      }

      function search() {
        const word = document.getElementById("Word").value.toUpperCase();
        if (dictionary.indexOf(word) > -1) {
          displayText.innerHTML = "This word has been found in dictionary";
          document.getElementById("display").appendChild(displayText);
        } else {
           displayText.innerHTML = "This word has not been found in dictionary";
           document.getElementById("display").appendChild(displayText);
        }
      }

      function restart() {
          location.reload();
      }
  </script>
