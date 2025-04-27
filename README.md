<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Scroll Animation Framer Motion</title>
</head>
<body>

  <h1>Scroll Animation Framer Motion</h1>

  <h2>Introduction</h2>
  <p>
    <strong>scroll-animation-framer-motion</strong> is a simple, customizable React component that allows you to add scroll-based animations to your web applications with ease. Using the power of <strong>Framer Motion</strong>, this component enables smooth, performant animations that trigger as elements scroll into view.
  </p>
  <p>
    Whether you're looking to add subtle animations like fade-ins, slide-ins, or more dynamic effects like flips and zooms, this library provides a flexible API to suit various animation styles.
  </p>

  <h2>Features</h2>
  <ul>
    <li><strong>Multiple Animation Directions</strong>: Choose from animations like slide from left, right, up, down, pop-in, fade-in, zoom-in, flip X, flip Y, and more.</li>
    <li><strong>Customizable Delays</strong>: Set a delay before animations start.</li>
    <li><strong>Responsive Animations</strong>: The component ensures smooth animations for both desktop and mobile views.</li>
    <li><strong>One-Time Animation</strong>: Control whether the animation should trigger only once or every time the element enters the viewport.</li>
    <li><strong>Easy to Use</strong>: Integrate animations into your React app with minimal setup.</li>
  </ul>

  <h2>Installation</h2>
  <p>
    To install the package, run the following command in your terminal:
  </p>
  <pre><code>npm install scroll-animation-framer-motion</code></pre>

  <h2>Usage</h2>
  <p>
    Import the <code>ScrollAnimation</code> component into your project and wrap any content you want to animate:
  </p>
  <code>
import React from "react";
import ScrollAnimation from "scroll-animation-framer-motion";

const MyComponent = () => {
return (

<!--
<div>
<ScrollAnimation direction="fadeIn" delay={0.3}>
<h2>Scroll to Animate</h2>
</ScrollAnimation>
</div>
-->

);
};

export default MyComponent;
</code>

  <h3>Props</h3>
  <table border="1">
    <thead>
      <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>direction</td>
        <td>"left" | "right" | "up" | "down" | "popIn" | "fadeIn" | "zoomIn" | "flipX" | "flipY"</td>
        <td>"right"</td>
        <td>Direction or style of animation</td>
      </tr>
      <tr>
        <td>delay</td>
        <td>number</td>
        <td>0</td>
        <td>Delay before the animation starts (in seconds)</td>
      </tr>
      <tr>
        <td>className</td>
        <td>string</td>
        <td>""</td>
        <td>Custom CSS classes</td>
      </tr>
      <tr>
        <td>once</td>
        <td>boolean</td>
        <td>true</td>
        <td>Animate only once or every time it enters the view</td>
      </tr>
      <tr>
        <td>amount</td>
        <td>number</td>
        <td>0.2</td>
        <td>How much of the element must be visible to trigger animation</td>
      </tr>
    </tbody>
  </table>

  <h2>Example</h2>
<code>
import React from "react";
import ScrollAnimation from "scroll-animation-framer-motion";

const ScrollComponent = () => {
return (

<!-- 
<div>
<ScrollAnimation direction="left" delay={0.5} amount={0.4}>
<div className="content">This is a left slide animation!</div>
</ScrollAnimation>

<ScrollAnimation direction="zoomIn" delay={0.3}>
<div className="content">This is a zoom-in animation!</div>
</ScrollAnimation>
</div> 
-->

);
};
</code>
  <h2>Contributing</h2>
  <p>
    If you find this library helpful, consider giving it a ⭐ on GitHub! Your contributions and feedback are always welcome.
  </p>
  <ul>
    <li>Fork the repo.</li>
    <li>Clone it to your local machine.</li>
    <li>Make your changes.</li>
    <li>Create a pull request with a detailed description of your changes.</li>
  </ul>

  <h2>License</h2>
  <p>
    This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.
  </p>

  <h2>GitHub Repository</h2>
  <p>
    <a href="https://github.com/xnafi/scroll-animation-framer-motion"><strong>Check out the repo here!</strong></a>
  </p>
  <p>
    If you find this library helpful, please consider starring the repository on GitHub to support its growth and development. Thank you! 😊
  </p>

</body>
</html>
