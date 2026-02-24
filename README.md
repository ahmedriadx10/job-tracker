1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: There are differences between below
(i)getElementById() takes an element id name as an argument and return specific matched element.

(ii)getElementsByClassName() is used to get specific class elements. It returns matched elements as an HTML collection.

(iii)Inside querySelector(), we write can css selector names to get the needed element, and it returns the first matched element.

(iv) Using querySelectorAll (), we can get elements using css selector, and it returns all matched elements as a nodeList

2. How do you create and insert a new element into the DOM?

Ans : I can create a new element inside the DOM using document.createElement(), and I can insert a new element into the DOM using .appendChild().

3. What is Event Bubbling? And how does it work?

Ans : Event bubbling is a dom event mechanism where we trigger any type of event on an element, and the browsers follow dom tree structure to execute the event. After completing the specific element trigger, it propagates upward to its parent and triggers its parent eventlistener, and the parent triggers its parent eventlistener; thus, it's continuously bubbling before the root comes, Its propagates upward as a water bubble propagates.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is the most efficient technique, where we add an event listener to the parent, and the parent can handle all its child element specific event . When a specified event occurs in any child, the child triggers the parent event listener using bubbling mode, and the parent can easily catch which element triggered his event listener using the event object. The Event delegation is very useful, it improves performance and memory efficiency, and helpfull to ignore large code for adding event listener each element. It's very clean and simple. As an analogy, we can think a ecommerce products list where thousands of product cards stay here, an event delegation technique I think is very helpful for handling all product cards event

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault () prevents the default browser action for an element, and stopPropagation() stops the element's event propagation journey
