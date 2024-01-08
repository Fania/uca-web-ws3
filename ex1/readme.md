# Workshop 3 - Exercise 1: A JavaScript Quiz

This exercise focuses on Javascript logic and has little to do with HTML layout or CSS styling, although you will be creating an HTML form for the JS to process.

Look at the `HTML`. There's a `form` with an `id="quiz"` which contains a `fieldset` and a `button` and the `fieldset` in turn contains a `legend` and two sets of `label` and `input`. There is also an `output` tag containing the *current score "0/X"*.

So let's look a bit more in detail at how the quiz questions are formed:

Each question has an input radio button:  
`<input type="radio" name="q1answers" id="q1a1" value="1">`  
All radio buttons have to have `type="radio"` and **each question group** *needs the same `name`*, e.g. `name="q1answers"`, `name="q2answers"`, etc. They also need a unique `id` and a `value` attribute, which (for the purposes of this quiz) should be set to either *"0" if the answer is wrong* or *"1" if the answer is correct*.

And each question has a label:  
`<label for="q1a1">Correct answer</label>`  
This has a `for` attribute that needs to match the `id` of the `input` tag that comes after it.

- [ ] Add several more questions and answers to the first `fieldset` for "Question One" of the Quiz
- [ ] Then add another `fieldset` for "Question Two", making sure you amend the `name` attribute to `name="q2answers"` and all of the `id`s as well.
- [ ] Perhaps add a third Quiz question as well, or more!

> Don't forget to make one of the answers the "correct" one by changing the `value` to "1"!

Now, let's look at the JS!

First of all there are a few variables we need to declare in order to target elements:

- [ ] the quiz `form` as a whole: `const quiz = document.getElementById("quiz");` 
- [ ] the `span` that holds the final results `const result = document.getElementById("result");`
- [ ] the `span` that holds the overall total `const total = document.getElementById("total");`
- [ ] the list of `fieldset`s (from which we can derive the number of questions we have) `const questions = document.getElementsByTagName("fieldset");`

Now that we have `const questions` we can update the total display from the placeholder *"0/X"* to the real number:

- [ ] `total.innerText = questions.length;` (e.g. `innerText` will replace the Text "X" with "3" if we have 3 `fieldset`s in our document...)

Then we have to create an `eventListener` to deal with the `button` and what happens when it is pressed:

- [ ] in this case we are calling a function called "calculateScores" when the `submit` event is triggered by pressing the *"quiz"* `button`: `quiz.addEventListener("submit", calculateScores);`

The **calculateScores** function then needs to do the following:

- [ ] initialise a "score" variable to 0: `let score = 0;`
- [ ] loop through the "quiz" variable (`console.log(quiz[i])` inside the loop to see what is inside it)
  - [ ] inside the loop you need to check if the current element has been checked: `quiz[i].checked`
  - [ ] if that is the case then increase the `score` variable we have created above by the value of the quiz question: `score += parseInt(quiz[i].value);`
- [ ] outside of the loop again we can now set the `result` `span` to the *up-tp-date* `score` text: `result.innerText = score;`

And finally, we need to add a bit at the end, inside the function still, that says `ev.preventDefault();` to ensure the page **does not reload** when we press the submit button.