# HTML
&nbsp;

HTML is a **markup language** used by almost all the websites in the world. It stands for HyperText Markup Language and was first introduced in 1991 by Tim Berners-Lee, over the years it has evolved all the way to it's final major release: HTML5.

---
&nbsp;
# The Basics
&nbsp;

To write an HTML file you use a thing called **Elements**, this elements are components that format the text in a specifica way, or let create tables, put images and videos, and a lot more.
Elements are defined by a **starting tag + some content + the closing tag**, just like this:
`<h1>Hello</h1>`

To start you should first create a file called **index.html**, inside you should define the basic stucture:

```
    <!Doctype html>
    <html lang="en" >
        <head>
        </head>
        <body>
        </body>
    </html>    
```

The first tag we encounter is `<!Doctype html>`, it defines what version of HTML we are using; a special thing about this tag is that it is self-closing it means that it doesn't have a closing tag. Some tags are like this.
In the second line we find the **html** tag, this is basically the root of the project, every other tag goes inside it. It's actually really common to put elements inside elements inside other elements, but more on that later. One thing to notice is the **lang="en"**, this is called an attribute, some elements have them, they change the way this elements behave; the **lang="en"** specify the language used in the website.
In the third and fourth line we have **head** tag, in this tag we put the non-visible thing of a website, like links to other language to make the website interactive or stylized. You can also define the title and an icon for the website, this title and icon will be put on top in the browser window title.
In the fifth and sixth we fing the **body** tag, in this tag we put all the visible elements of a website: text, images, videos, tables...
In the final line we have the closing tag of the html element.

---
&nbsp;
# Common HTML Elements
&nbsp;

## `<h1>Headings</h1> - <h6></h6>`
Headings, there are a total of 6 heading (<h1></h1> -> <h6></h6>) and they become smaller as you go. It's good to know from the start that there should only be one of each heading in a website and that they should be in an increasing order:

**Bad**
```
    <h1>Heading 1</h1>
    <h1>Another Heading 1</h1>
    <h3>Heading 3</h3>
    <h2>Why am I here?</h2>
```

**Good**
```
    <h1>Heading 1</h1>
    <h2>An Heading 2!</h2>
    <h3>I'm an Heading 3</h3>
```
&nbsp;

## `<p>Paragraph</p>`
Commonly used to display text.

&nbsp;

## `<br/>`
Another self-closing tag, this tag can be used both to put element on the next line or to break text:

**EXAMPLE**
```
    <p>Hi! My name is <br/> Jon Doe<!/p> <br/>
    <p>Hi Jone Doe! My name is also Jon Doe!</p>
```

**OUTPUT**
```
    Hi! My name is
    Jon Doe!
    Hi Jone Doe! My name is also Jon Doe!
```

Notice how there is a line break exactly where the <br/> is placed.

&nbsp;

## `<img src="" alt="" />`
This element is used to insert an image in a website, it's two main attributes are **src** and **alt**, in the src you put the path ore link to the image, while in the alt you put a text that will be displayed if the image is not found or missing.

&nbsp;

## `<ol></ol> - <ul></ul> - <li></li>`
The first 2 elements are used to create an ordered list and an unordered list, all the items in the list needs to be wrapped in the <li></li> element.

**Example**
```
    <ol>
        <li>Item 1<li>
        <li>Item 2<li>
    </ol>

    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
```

&nbsp;

## `<div></div>`
Probably one of the most used element ever, the div is used to group elements together to divide the website into section.

**Example**
```
    <div>
        <h1>Here are my favourites thing:<h1>
        <ul>
            <li>Pizza</li>
            <li>This Website!</li>
            <li>Football</li>
        </ul>
    </div>
```
HTML5 introduced semantic elements, an alternative to div; this elements not only make the website more accessible but also boost SEO (It basically makes your website more popular), there are elements for all the sections you need, but the most used are:

## `<header></header> <footer></header>`

**Example**
```
    <header>
        <h1>My first website</h1>
    </header>

    <footer>
        <p>Thanks for visiting the website!</p>
    </footer>
```

&nbsp;

## <a href="" >Link</a>
The <a></a> element is used to navigate from a page of a website to another, or even to another website! In the href attribute you need to put either the path to another html page, or a link to another website.

```
    <a href="/path/to/page.html">Click here to navigate to another page</a>
```

---

&nbsp;

# Exercise
&nbsp;

These are the most used element in HTML, there still are a lot of other elements but this guide will only teach the basics; for now you're task is to create a website with the elements you just learned.
As an exercise try to recreate this website here:

!["Image"](/public/images/html_exercise.png)