// Debounce Function

A debounced function is a functionn whose execution is deleayed by t milliseconds and whose execution is cancelled 
  if it is called again within that window of time.The debounced function should also receieve th passed paramaters.


Debouncing is a method that limits the rate at which a function gets called.It works by delaying the execution of a funtion
until a ceratin amount of time has passes without any additional function calls.If another function call happens within this time
the timer resets and the function execution is delayed again.

Debouncing is useful in situations where you want to prevent a function from being called too frequently, such as:
  1) Handling user input events like keypresses, mouse movements, or button clicks
  2) Handling expensive computations or network requests that don't need to be performed on every function call.
