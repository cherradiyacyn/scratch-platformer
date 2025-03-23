# Platformer Mechanics using Lists in Scratch

## Overview
This project demonstrates how to create platformer mechanics in Scratch using a list to store the positions of all the bricks (platforms).

## How It Works
1. **Level Design**  
   - Using an Excel spreadsheet, we design a level. (Like the old SMB days, everything is tile-based!)

2. **Data Generation**  
   - A VBA script in Excel generates a `bricksData.txt` file that contains the coordinates of all the bricks.
   - The file is saved to disk.

3. **Importing Data into Scratch**  
   - The `bricksData.txt` file is imported into Scratch (yes, we can do that!).
   - The data is stored in a list named `bricksData`.

4. **Game Initialization**  
   - When the Green Flag is clicked:
     - Variables are initialized.
     - The bricks are rendered.
     - The game starts.

## Collision Detection: Axis-Aligned Bounding Box (AABB)
The game uses AABB for collision detection. This method determines if two rectangles (the player and a brick) overlap by checking if there is any gap between their edges:

- If there is no gap between any of the four sides, a collision is detected.
- If there is a gap, no collision occurs.

This is a simple and efficient way to handle collision detection in a tile-based platformer.

## Additional Information
- **Tools Used**: Scratch, Excel, VBA

