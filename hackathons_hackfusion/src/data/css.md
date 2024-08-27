

# CSS
&nbsp;

CSS, or **Cascading Style Sheets**, is a stylesheet language used to describe the presentation of a document written in HTML. CSS controls the layout, colors, fonts, and overall visual appearance of a website. It was first introduced by Håkon Wium Lie on October 10, 1994, and has evolved to its current version, CSS3, which introduced numerous enhancements like animations, flexbox, and grid layout.

---
&nbsp;

# The Basics
&nbsp;

To start using CSS, you need to write your styles inside a CSS file and link it to your HTML file, or include the styles directly within your HTML. There are three main ways to apply CSS to your HTML:

1. **Inline CSS**: You can write CSS directly in an HTML tag using the `style` attribute.
    ```html
        <p style="color: blue;">This text will be blue.</p>
    ```

2. **Internal CSS**: You can include CSS within a `<style>` tag inside the `<head>` section of your HTML document.
    ```html
        <head>
            <style>
                p {
                    color: blue;
                }
            </style>
        </head>
    ```

3. **External CSS**: The most common and preferred method. You link to an external CSS file using the `<link>` tag in the `<head>` section.
    ```html
         <head>
             <link rel="stylesheet" href="styles.css">
         </head>

         In the `styles.css` file, you can write:
         p {
             color: blue;
         }
    ```

---
&nbsp;

# Selectors
&nbsp;

Selectors are used to target HTML elements and apply styles to them. There are various types of selectors:

&nbsp;

## **Element Selector**
Applies styles to all instances of a specific HTML element.
```css
    p {
        font-size: 16px;
    }
```

&nbsp;

## **Class Selector**
To use this method you need to give a class to an html element with the class attribute, every element can have a class.
It applies styles to all elements with the same class. Classes are defined with a leading dot `.`.
```css
    .intro {
        color: green;
    }
```
```html
    <p class="intro">This paragraph will be green.</p>
```

&nbsp;

## **ID Selector**
Again, to use this method you need to give an element and ID with the id attribute.
IDs are defined with a leading hash `#`.
```css
    #header {
        background-color: lightblue;
    }
```
```html
    <div id="header">This div will have a light blue background.</div>
```

A specific ID can only be given to onr element, meanwhile even all elements can have the same class, It's also possibile to give multiple class
or ID to the same element.

---
&nbsp;

# Common CSS Properties
&nbsp;

## **Color**
Sets the text color of an element.
```css
    h1 {
        color: blue;
    }
```

&nbsp;

## **Background-color**
Sets the background color of an element.
```css
    div {
        background-color: yellow;
    }
```

&nbsp;

## **Font-size**
Sets the size of the text.
```css
    p {
        font-size: 14px;
    }
```

&nbsp;

## **Margin**
Adds space outside of an element. Can be set for all sides (`margin`), or individually (`margin-top`, `margin-right`, etc.).
```css
    h1 {
        margin: 20px;
    }
```

&nbsp;

## **Padding**
Adds space inside of an element, between the content and the border. Can be set for all sides (`padding`) or individually (`padding-top`, `padding-left`, etc.).
```css
    p {
        padding: 10px;
    }
```

&nbsp;

## **Border**
Adds a border around an element. You can define the width, style, and color.
```css
    div {
        border: 1px solid black;
    }
```

&nbsp;

## **Text-align**
Aligns the text inside an element.
```css
    h2 {
        text-align: center;
    }
```

---
&nbsp;

# Box Model
&nbsp;

The CSS box model describes how the elements on a webpage are structured and spaced. It consists of:

- **Content**: The actual content of the box (e.g., text, images).
- **Padding**: Space between the content and the border.
- **Border**: A line surrounding the padding (if any) and content.
- **Margin**: Space outside the border, separating the element from other elements.

```css
    .box {
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 5px solid black;
        margin: 20px;
    }
```

---
&nbsp;

# Flexbox
&nbsp;

Flexbox is a layout model that allows elements within a container to be automatically arranged. It's great for building responsive layouts.

## **Setting up Flexbox**
To use flexbox, you need to set the display property of a container to `flex`.
```css
    .container {
        display: flex;
    }
```

&nbsp;

## **Align Items**
Controls the alignment of items along the cross-axis.
```css
    .container {
        align-items: center;
    }
```

&nbsp;

## **Justify Content**
Controls the alignment of items along the main axis.
```css
    .container {
        justify-content: space-between;
    }
```
&nbsp;

## **Flex Direction**
Defines the direction in which the items are placed in the flex container.
```css
    .container {
        flex-direction: row; /* can also be column, row-reverse, column-reverse */
    }
```

---
&nbsp;

# Exercise
&nbsp;

With the concepts you've learned, try to create a simple webpage that utilizes some basic CSS properties. Make sure to practice using different selectors, setting margins and paddings, and experimenting with colors.

**Challenge**: Create a `div` with a class of `container` that uses flexbox to layout three child elements (e.g., divs or paragraphs) in a row with space between them. Use CSS to style these elements with different background colors, padding, and borders.