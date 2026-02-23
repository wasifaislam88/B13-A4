

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
<br>
getElementById – selects one element by its id. 
<br>
getElementsByClassName – selects all elements with a given class.
<br>
querySelector – selects the first element matching any CSS selector. 
<br>
querySelectorAll – selects all elements matching a CSS selector.




### 2. How do you create and insert a new element into the DOM?

Answer:
<br>
First, I create an element using document.createElement. Then set its content with element.textContent = 'Hello' or element.innerHTML, add classes with element.classList.add('my-class'), and finally attach it to the page using parentElement.appendChild(element).


### 3. What is Event Bubbling? And how does it work?

Answer:
<br>
Event bubbling means when an event fires on an element, it automatically propagates upward through all its parent elements in the DOM tree.



### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer
<br>
Event delegation is attaching a single listener on a parent instead of many on each child, using event.target to identify the clicked child. It saves memory and works for dynamically added elements.



### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
<br>
preventDefault() stops the default browser action.
<br>
stopPropagation() stops the event from bubbling up to parent elements.





