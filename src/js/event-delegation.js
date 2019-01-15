<table>
  <tr>
    <th colspan="3"><em>Bagua</em> Chart: Direction, Element, Color, Meaning</th>
  </tr>
  <tr>
    <td>...<strong>Northwest</strong>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>...2 more lines of this kind...</tr>
  <tr>...2 more lines of this kind...</tr>
</table>


Naturally, if a click happens on that <strong> then it becomes the value of event.target.


table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)
  
    if (!td) return; // (2)
  
    if (!table.contains(td)) return; // (3)
  
    highlight(td); // (4)
  };

  The event delegation may be used to optimize event handling. 
  We use a single handler for similar actions on many elements. Like we did it for highlighting <td>.


  ============================================================================================================

  The “behavior” pattern
We can also use event delegation to add “behaviors” to elements declaratively, with special attributes and classes.

The pattern has two parts:

We add a special attribute to an element.
A document-wide handler tracks events, and if an event happens on an attributed element – performs the action.


Counter
For instance, here the attribute data-counter adds a behavior: “increase on click” to buttons:


Counter: <input type="button" value="1" data-counter>
One more counter: <input type="button" value="2" data-counter>

<script>
  document.addEventListener('click', function(event) {

    if (event.target.dataset.counter != undefined) { // if the attribute exists...
      event.target.value++;
    }

  });
</script>