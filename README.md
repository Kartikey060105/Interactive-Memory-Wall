# Interactive Memory Wall

## Overview
The *Interactive Memory Wall* is a dynamic and user-friendly web application that allows users to add, view, search, edit, and delete memories. Memories can be accompanied by text, images, or videos, creating a visual memory board. It features a dark mode toggle, a search bar to filter memories, and an intuitive modal interface for adding new memories.

## Features
- *Add Memories*: Users can add memories with titles, descriptions, and multimedia (images and videos).
- *Search Functionality*: Users can search for specific memories by title or description.
- *Edit and Delete*: Users can edit or delete their memories easily.
- *Dark Mode*: Toggle between light and dark themes for a customized experience.
- *Responsive Design*: The application is designed to be mobile-friendly with a responsive grid layout.
  
## Technologies Used
- *HTML*: Structuring the content and the application.
- *CSS*: Styling the layout, including light and dark themes, modal design, and memory cards.
- *JavaScript*: Handling the memory creation, editing, deletion, theme toggle, and search functionalities.
  
## Installation
1. Clone the repository:
   bash
   git clone https://github.com/Kartikey060105/Interactive-Memory-Wall.git
   

2. Open the index.html file in your browser.

## Usage
1. *Add a Memory: Click the **+ Add Memory* button, fill in the title and description, and optionally upload an image or video.
2. *Search Memories*: Use the search bar to filter memories by title or description.
3. *Edit or Delete a Memory*: Each memory card has options to edit or delete the memory.
4. *Toggle Theme: Use the **Toggle Theme* button to switch between light and dark modes.

## Features in Detail
- *Memory Wall*: The memory wall is a grid that displays each added memory as a card with the title, description, and associated media.
- *Search Bar*: Allows for searching through the memory cards, hiding those that don't match the search query.
- *Modal Interface*: A simple and clean modal that pops up when adding or editing memories.
- *Dark Mode*: The dark mode improves the viewing experience in low-light environments. The theme is persistent across sessions, thanks to localStorage.


## How It Works
- The memory data is stored temporarily in the browser’s memory (memories array) and can be viewed, edited, or deleted at any time.
- When a memory is added, the media file (if provided) is displayed alongside the text content.
- The dark mode is managed by toggling a dark class on the body element, changing the background and text colors.

## Contributing
Feel free to fork the repository, open issues, or submit pull requests to contribute to the project. Improvements, bug fixes, or additional features are always welcome!

## License
This project is open-source and available under the [MIT License](https://github.com/Kartikey060105/Interactive-Memory-Wall/blob/main/LICENSE).
