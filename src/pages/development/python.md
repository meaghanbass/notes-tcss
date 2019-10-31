---
title: "Python"
tag: ["dev","language"]
---

<div class="card">
    <h4>Resources</h4>
    <table class="col-1_2">
        <tr>
            <td><a href="https://repl.it/@whearst3/Python-Sandbox" target="_blank">Repl.it</a></td>
            <td>Powerful and simple online compiler, IDE, interpreter, and REPL. Code, compile, and run code in 50+ programming languages.</td>
        </tr>
        <tr>
            <td><a href="https://repl.it/@whearst3/Python-Sandbox" target="_blank">Python Sandbox</a></td>
            <td>Practice your Python skills in the cloud.</td>
        </tr>
        <tr>
            <td><a href="https://jupyter.org/" target="_blank">Jupityr</a></td>
            <td>Web-based interactive development environment for Jupyter notebooks, code, and data.</td>
        </tr>
    </table>
    <section>
        <span class="marker-green-sm"></span><a href="/development/python-libraries/">See also: Python Libraries</a>
    </section>
</div>

<div class="card">
    <ul>
        <h4>Basics</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print("Hello, World!") # this is a comment
# this is also a comment</pre></code>
            </li>
    </ul>
    <ul>
        <h4>Truncation - <em>Note that truncation does not round the number, it only cuts off the decimal points</em></h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(10/3)           3.3333
print(10//3)          3
<br>
print(7.0 / 3.0)      2.3333
print(7.0 // 3.0)     2.0</pre></code>
            </li>
    </ul>
    <ul>
        <h4>Exponents</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(4 ** 2)         16
print(2 ** 3 ** 2)    # the right-most ** operator gets done first!</pre></code>
            </li>
        <section>Python math follows the standard order of operations.</section>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Data Types</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(type("Hello, world"))             &lt;class 'str'>
print(type(17))                         &lt;class 'int'>
print("Hello, world")                   Hello, world
print(type(3.2))                        &lt;class 'float'>
print(type("3.2"))                      &lt;class 'str'></pre></code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(type('This is a string.'))        &lt;class 'str'>
print(type("And so is this."))          &lt;class 'str'>
print(type("""and this."""))            &lt;class 'str'>
print(type('''and even this.'''))       &lt;class 'str'></pre></code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print("""This message will span         This message will span
several lines                           several lines
of the text.""")                        of the text</pre></code>
            </li>
    </ul>
    <ul>
        <details class="accordion">
            <summary>Strings</summary>
                <li>Sequential collections of characters</li>
                <li>The characters are in a particular order from left to right</li>
                <li>Empty string: <pre class="pre-sm">''</pre> or <pre class="pre-sm">""</pre></li>
        </details>
        <details class="accordion">
            <summary>Lists</summary>
                <li>Sequential collection of data values, each identified by an index</li>
                <li>Each data value is an element</li>
                <li>Each element can contain any data type</li>
                <li>Lists are held in square brackets: <pre class="pre-sm">[ ]</pre></li>
                <li class="nobullet"><pre class="pre-sm">[10, 20, 30, 40]
["spam", "100", 200]
["hello", 2.0, 5, [10, 20]]</pre>
                </li>
        </details>
        <details class="accordion">
            <summary>Tuples</summary>
                <li>Tuples are just like lists, <b>except</b> they are immutable - cannot be changed or modified</li>
                <li>Tuples are held in parenthesis: <pre class="pre-sm">( )</pre></li>
                <li>If the tuple only has one element, is has to have a comma after the element <pre class="pre-sm">myTuple = (100,)</pre></li>
        </details>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Type Conversion Functions</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(3.14, int(3.14))                  3.14 3
print(3.9999, int(3.9999))              3.9999 3
print(3.0, int(3.0))                    3.0 3
print(-3.999, int(-3.999))              -3.999 -3
<br>
print("2345", int("2345"))              2345 2345
print(17, int(17))                      17 17
print(int("23bottles"))                 ValueError: invalid literal for int() with base 10: '23bottles' </pre></code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">
val = 50 + 5
print("the value is " + str(val))</pre></code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(float("123.45"))                  123.45
print(type(float("123.45")))            &lt;class 'float'></pre></code>
            </li>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Variables</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
x = 6
print(x)            6
x += 3
print(x)            9
x -= 1
print(x)            8</pre></code>
            </li>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Functions, Statements, and Expressions</h4>
            <li class="nobullet">
                <code>functionName(argument)</code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">
print(len("hello"))                     5</pre></code>
            </li>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Inputs</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
input("Please enter your name: ")
print("Hello", n)</pre></code>
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">total_secs = int(input("Please enter the number of seconds you wish to convert: "))
<br>
hours = total_secs // 3600
secs_still_remaining = total_secs % 3600
minutes = secs_still_remaining // 60
secs_finally_remaining = secs_still_remaining % 60
<br>
print("Hours = ", hours,", Minutes = ", minutes,", Seconds = ", secs_finally_remaining)</pre></code>
            </li>
        <section>Values of inputs are always passed in as strings.</section>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>For Loop</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">print("This will execute first")                           This line will execute first
                                                           This line will execute three times
for _ in range(3):                                         This line will also execute three times
    print("This line will execute three times")            This line will execute three times
    print("This line will also execute three times")       This line will also execute three times
                                                           This line will execute three times
print("Now we are outside of the for loop!")               This line will also execute three times
                                                           Now we are outside of the for loop!</pre></code>
            </li>
    </ul>
</div>

<div class="accordion-wrapper">
    <div class="card">
        <ul>
        <h4>Importing Modules</h4>
            <details class="accordion">
                <summary>random()</summary>
                <li class="nobullet">
                    <code>
    <pre>
import random
<br>
prob = random.random()
print(prob)
<br>
diceThrow = random.randrange(1,7)
print(diceThrow)            #return an int, one of 1,2,3,4,5,6</pre>
                    </code>
                </li>
        </ul>
    </div>
</div>

<div class="card">
    <ul>
        <h4>Syntax Errors</h4>
            <li class="nobullet">
                Forgetting a semi-colon at the end of a statement where one is required.
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">print("Hello world!"<span class="code-error">)                           SyntaxError: unexpected EOF while parsing</span></pre></code>
            </li>
            <li class="nobullet">
                <b>ParseError:</b> the result of a syntax error.
            </li>
    </ul>
    <ul>
        <h4>Runtime Errors</h4>
            <li class="nobullet">
                Attempting to divide by 0.
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">print(3/0)                                      <span class="code-error">ZeroDivisionError: division by zero</span>
#division by zero is not a legal operation</pre></code>
            </li>
    </ul>
    <ul>
        <h4>Semantic Errors - <em>the code will run, but not as intended by the user</em></h4>
            <li class="nobullet">
                Forgetting to divide by 100 when printing a percentage amount.
            </li>
            <li class="nobullet">
                <code><pre class="pre-sm white">print("one half as a percentage is ", 1/2)      one half as a percentage is  0.5</pre></code>
            </li>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Slicing</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
L = [0.34, '6', 'SI106', 'Python', -2]
print(len(L[1:-1]))                             3</pre></code>
            </li>
    </ul>
</div>

<div class="card">
    <ul>
        <h4>Concatenation and Repetition</h4>
            <li class="nobullet">
                <code><pre class="pre-sm white">
fruit = ["apple","orange","banana","cherry"]
print([1,2] + [3,4])                                [1, 2, 3, 4]
print(fruit+[6,7,8,9])                              ['apple', 'orange', 'banana', 'cherry', 6, 7, 8, 9]
print([0] * 4)                                      [0, 0, 0, 0]
print((fruit[0]) * 4)                               appleappleappleapple
print((fruit+[1]) * 4)                              ['apple', 'orange', 'banana', 'cherry',1,'apple', 'orange', 'banana', 'cherry',1,'apple', 'orange', 'banana', 'cherry',1,'apple', 'orange', 'banana', 'cherry',1]</pre></code>
            </li>
    </ul>
</div>


<iframe class="pyide" src="https://repl.it/repls/CraftyWorthlessNonlinearprogramming?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>