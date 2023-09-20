# Introduction:

This is a template bulid for the ideal reel talk website.

The User Form context is the location where all user information is stored

The following pages have been implemented:
- Display Name, Location, & Photo Add section
    - The photo adding doesn't work yet so it's a placeholder profile photo
- Birthday Selection
    - I added a carousel style Brithday Movies list to the side
- Genre Selection

# Design Decisions:
- I decided to just use react with no front-end libraries as a form of refresher on css.
    - Normally I would have used a front-end framework
- React-icons was the only library used to get the icons I needed
- For this project, I decided that 2 Contexts would be enough:
    - one for querying from database so I can cache what I queried easier
    - one for storing user information so I don't have to prop chain
- For the Object-oriented Data Structures, I decided to just use basic interfaces of Javascript.
    - These are only in apiFormats right now
    - If there's anything more complex, I would have considered making full classes so each object can manage itself (i.e validate itself, updating itself, more complex matching)
- Right Now, the Next button still works even if disabled for easier debugging purposes

# File Format:
This describes the format inside src, though the placeholder images are all in public/images

## api:
The api folder would hold the direct connections to the end-points. 
It also holds the object representation of the data collected. 

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
        - This does NOT mean the the main file and only call these supporting files though
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
