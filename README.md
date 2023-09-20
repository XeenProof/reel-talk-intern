# Introduction

This is a template bulid for the ideal reel talk website.

The User Form context is the location where all user information is stored

The following pages have been implemented:
- Display Name, Location, & Photo Add section
    - The photo adding doesn't work yet so it's a placeholder profile photo
- Birthday Selection
    - I added a carousel style Brithday Movies list to the side
- Genre Selection

# File Format:
This describes everything inside the src, though the placeholder images are all in public/images

## api:
The api folder would hold the direct connections to the end-points. 
It also holds the object representation of the data collected

## components:
The components folder holds all the react components responsible for the UI side of things.

There are many sub-folder in the components and things look quite messy here.
However, there is a system setup here.

- Inside components, there should only be on Typescript file that is not in any subfolder. 
    - That's the only file called by outside the components folder.
    - It's often named something relating to the project.
    - The general design in here is a tree-like structure. More details below
- For every folder in components, including components itself (i.e body):
    - If the folder has a file with the same name:
        - Then that file is the main file and only file called from outside the folder
        - The other files/folders in the same folder are only there as segments of the main file (like a sub tree)
    - If the folder doesn't have a file with the same name (i.e common):
        - Then everything inside can (and will likely be) called from anywhere and multiple places
        - They are ment as a versitle and reusable component
        - Note: this does NOT mean they are called from multiple places, 
            (Somethings something goes here with the though of be reusable but it didn't end up getting used multiple times)

## context:
The context folder holds all the context hooks that the website would use. 
Currently there is only 2 because not many is needed for this beginning draft.

## css:
Holds all the css files. The main one is App.css. 
The ones with different names are used to update other more specific and difficult parts
