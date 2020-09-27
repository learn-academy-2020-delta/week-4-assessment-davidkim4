# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable in ruby is defined with an @ and is part of the initialize method, setting itself up to whatever parameter is passed through. Instance variables are different from other varibales because they are available throughout the entire ruby class.

  Researched answer: An instance variable has a name beginning with @ and is set to nil unless they are initialized. Its scope is confined to whatever object self refers to.



2. What is a block in Ruby?

  Your answer: A block in Ruby is definied by do and end or by {}. It executes and code that is between do/end or {}.

  Researched answer: An anonymous function that executes code. Blocks can be multi-line or single-line depending on the format you use. You can use blocks on methods. The code in a block is not executed at the time it is encountered. Can invoke a block by using 'yield'.



3. Ruby has an implicit return. What does that mean?

  Your answer: Implicit return means that any method will return a value as long as there is a value to return, but it will not show what the value is. To display the return value, you must use p, puts, or prints which is similar to console.log().

  Researched answer: Any statement in Ruby returns the value of the last evaluated expression.



4. What is object-oriented programming? How is it different than functional programming?

  Your answer: Object oriented programming (OOB) is where developers focus more on objects rather than functions. It is faster to develop programs with rather than functional programmigng.
 
  Researched answer: OOB combines a group of related variables and functions into a unit wwhich is called an object. It is faster and easier to execute and provaides a clear structure for the programs.



5. What is the difference between a class and an object?

  Your answer: A class is a blueprint that can create objects, and objects are instances of a class and can each have a unique values/attributes.

  Researched answer: A class dedescribed the contents of the objects that belong to it. It can hold instance variables and methods. Objects are an instance of a class and can call upon the methods in the class.



6. STRETCH: What is `attr_accessor`?

  Your answer: I had a bried encounter with this method, but I believe it is used to create instance variables of objects in a less repetetive way.

  Researched answer: Allows developers to create a getter and a setter method in just one line of code. 



## Looking Ahead: Terms for Next Week
- PostgreSQL: A highly stable database management system. 
- API: Application-programming-interface is a set of programming instructions and standards for accessing a Web-based software app. Allows two applications to talk to each other and request data from their remote servers.
- CRUD: Stands for create, read, update, adn delete. It is a paradigm for API development stating that a model should have the ability to perform the 4 functions mentioned earlier to be a complete usable model.
- Ruby on Rails: A development tool for Ruby which gives web developers a framework. This framework helps developers simplify common repetetive tasks.
- ORM: Object relational mapping maeks code easier to update, maintain, reuse, and manipulates data as objects.
- Active Record: Facilitates the creation and use of business objects whose data requires persistent storage to a database.
