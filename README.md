Cars Spot

Overview

Cars Spot is a modern web application that showcases a gallery of cars available for sale, primarily focusing on vehicles imported from Europe. This project features a responsive design optimized for mobile, tablet, and desktop screens, ensuring a smooth user experience across devices. The application also includes interactive sections, such as sliders and collapsible text sections, powered by React.

Features

Responsive Design: Optimized for mobile, tablet, and desktop screens.
Interactive Slider: Displays various cars with smooth transitions.
Expandable Sections: Users can expand or collapse sections for additional information.
Custom Backgrounds: Tailored background images that adapt to different screen sizes.
Contact CTA: Includes an easy-to-access "Call Us" button.
Technologies Used

React.js: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
Slick Carousel: A carousel/slider component used to display car images.
Custom CSS: Additional styles to enhance layout and visuals.

Usage

On mobile devices, the navigation menu and content sections are stacked for better readability.
Background images and buttons adjust based on screen width, ensuring a smooth user experience.
Users can expand sections with additional details using the Rozwiń/Zwiń buttons.
The "Call Us" button allows users to quickly access contact information.

Customization

Background Images
To change background images in the CSS:

Modify the background-image property for the .custom-bg-cars and .custom-bg-lines classes in App.css.
Media Queries
Tailwind's responsive classes and custom CSS media queries are used for adaptive design. You can adjust the breakpoints in the following sections of the code:

Mobile: (min-width: 375px) and (max-width: 639px)
Tablet: (min-width: 640px) and (max-width: 1023px)
Desktop: (min-width: 1024px)
Tailwind Customizations
You can further tweak the styles or add new components by modifying the tailwind.config.js file.