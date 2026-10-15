// TOON BLAST PAGE CONTENT — edit this file to change the page.
// - "text": list of paragraphs (each string = one paragraph).
// - "media": images/videos shown next to that text. Remove an entry to remove it; paths are relative to index.html.
// - "layout":"wide" shows the media in a row below the text.
// Keep the quotes, commas and brackets intact. Save, then refresh the browser.
window.TOON_CONTENT = {
 "title": "Toon Blast",
 "subtitle": "A tap-to-blast game built on boosters, combinations and objectives.",
 "opening": [
  "Toon Blast uses a tap-to-blast interaction model. Instead of swapping individual pieces, players tap connected cubes of the same color to remove a group.",
  "The size and arrangement of these groups influence how players prepare power-ups and manage objectives. Outside the puzzle board, teams and events provide additional activities and progression contexts."
 ],
 "scope": "This analysis is based on my first 50 Toon Blast levels.",
 "sections": [
  {
   "title": "Game Mechanics",
   "groups": [
    {
     "title": "Core Gameplay",
     "level": 3,
     "text": [
      "Toon Blast is a tap-to-blast puzzle game. Instead of swapping adjacent pieces to create a match, the player taps a connected group of two or more same-coloured cubes to remove them from the board. Each level has an objective and a limited number of moves. The player must complete the objective before the move counter reaches zero.",
      "Because the player chooses which connected group to remove, every tap changes the shape of the board and the relationships between the remaining cubes. Removing a group creates empty spaces, and cubes above those spaces fall down. This can create new groupings and opportunities. A move can therefore be useful because it directly advances the objective, opens space, or sets up a larger group or power-up.",
      "The core decision is not simply “which pieces can I match?” but “which connected group should I remove now, given the board that will remain afterward?” Group size, cube placement, gravity, and the level objective all matter."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/01_Core_Gameplay/02_Toon_Blast_Gameplay.jpeg",
       "caption": "Gameplay: objective and move counter"
      }
     ]
    },
    {
     "title": "Power-Ups",
     "level": 3,
     "text": [
      "Larger groups of same-coloured cubes create power-ups. These clear more of the board than a regular tap and are especially important when the objective requires clearing obstacles or reaching targets efficiently. Their effects differ in shape and scale, so where a power-up is created and when it is activated can change how much progress a move makes. Combining power-ups creates stronger effects and is one of the main ways to clear large areas."
     ],
     "media": []
    },
    {
     "title": "Rocket",
     "level": 4,
     "text": [
      "A Rocket clears a complete row or column, depending on its orientation. It is useful when the player needs to clear a line of cubes or affect targets positioned along that line. Since the direction is fixed by the Rocket’s orientation, the player should consider which row or column will be removed before activating it."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/03_rocket_power_up.jpeg",
       "caption": "Rocket"
      }
     ]
    },
    {
     "title": "Bomb",
     "level": 4,
     "text": [
      "A Bomb clears a surrounding area around its position. It is useful when several cubes or targets are clustered together and a straight-line effect would not reach enough of them. Its value depends on its location: a Bomb near several useful targets can make more progress than one activated in an open area."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/04_bomb_power_up.jpeg",
       "caption": "Bomb"
      }
     ]
    },
    {
     "title": "Disco Ball",
     "level": 4,
     "text": [
      "The Disco Ball clears cubes of a selected colour across the board. Its effect is not limited to a single row, column, or small area, making it useful when many cubes of that colour remain. Removing a colour can also change the board and create follow-up groups or power-up opportunities."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/05_disco_ball_power_up.jpeg",
       "caption": "Disco Ball"
      }
     ]
    },
    {
     "title": "Power-Up Combinations",
     "level": 3,
     "text": [
      "Combining two adjacent power-ups produces a stronger effect than using either one on its own. The result depends on the pair, but combinations can cover more rows, columns, or surrounding space and remove a large portion of the board in one move.",
      "The combination system rewards planning: the player may need to preserve a power-up or position two power-ups next to each other before activating them. The best combination is still determined by the objective; a large effect is not automatically useful if it misses the remaining targets."
     ],
     "media": [
      {"type":"image","src":"Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/06_power_up_combinations.jpeg","caption":"Toon Blast power-up combinations"}
     ]
    },
    {
     "title": "Rocket + Rocket",
     "level": 4,
     "text": [
      "Combining two Rockets creates a cross-shaped effect that clears both a row and a column. This is useful when the two directions intersect at a valuable part of the board."
     ],
     "media": []
    },
    {
     "title": "Rocket + Bomb",
     "level": 4,
     "text": [
      "Combining a Rocket and a Bomb produces a wider clearing effect than a single Rocket. It can clear a line while also affecting a larger area around it, helping the player reach targets spread across the board."
     ],
     "media": []
    },
    {
     "title": "Bomb + Bomb",
     "level": 4,
     "text": [
      "Combining two Bombs produces a larger area blast. This is most useful when obstacles or targets are concentrated around the combination point."
     ],
     "media": []
    },
    {
     "title": "Disco Ball + Rocket",
     "level": 4,
     "text": [
      "Combining a Disco Ball with a Rocket turns cubes of the relevant colour into Rockets and activates a large chain of line-clearing effects. The result can clear multiple rows or columns and reshape the board."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/02_Power_Ups_Combos/02_Toon_Blast_Rocket_Disco_Ball.jpeg",
       "caption": "Disco Ball and Rocket"
      }
     ]
    },
    {
     "title": "Disco Ball + Bomb",
     "level": 4,
     "text": [
      "Combining a Disco Ball with a Bomb turns cubes of the relevant colour into Bombs, creating multiple area blasts across the board."
     ],
     "media": []
    },
    {
     "title": "Disco Ball + Disco Ball",
     "level": 4,
     "text": [
      "Combining two Disco Balls clears the board’s coloured cubes in a broad, board-wide effect. This can create a major change in the board state, although the player must still check whether the level’s specific objectives have been completed."
     ],
     "media": []
    },
    {
     "title": "Boosters",
     "level": 3,
     "text": [
      "Boosters are assistance items used to alter the board directly. They are different from Rockets, Bombs and Disco Balls, which are created during normal gameplay by removing groups of cubes. The official booster set includes the Hammer, Boxing Glove, Anvil and Dice."
     ],
     "media": []
    },
    {
     "title": "Hammer",
     "level": 4,
     "text": [
      "The Hammer pops one cube or obstacle chosen by the player. If an obstacle has multiple parts or layers, the Hammer removes only one part, so additional hits may still be required."
     ],
     "media": [{"type":"image","src":"Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/07_hammer_booster.jpeg","caption":"Hammer booster"}]
    },
    {
     "title": "Boxing Glove",
     "level": 4,
     "text": [
      "The Boxing Glove clears the selected row. It can remove cubes and affect obstacles along that horizontal line, making the chosen row important to the move's value."
     ],
     "media": [{"type":"image","src":"Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/11_boxing_glove_booster.jpeg","caption":"Boxing Glove booster"}]
    },
    {
     "title": "Anvil",
     "level": 4,
     "text": [
      "The Anvil clears the selected column. It creates a vertical clear, so its usefulness depends on which cubes and objectives sit along that column."
     ],
     "media": [{"type":"image","src":"Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/10_anvil_booster.jpeg","caption":"Anvil booster"}]
    },
    {
     "title": "Dice",
     "level": 4,
     "text": [
      "The Dice shuffles the cubes on the board. Rather than clearing a chosen row, column or individual tile, it changes the arrangement and can create new groupings to work with."
     ],
     "media": [{"type":"image","src":"Puzzle_Game_Analysis/03_Toon_Blast/01_Game_Mechanics/12_dice_booster.jpeg","caption":"Dice booster"}]
    }
   ]
  },
  {
   "title": "Level Design",
   "groups": [
    {
     "title": "Gradual Introduction of Mechanics",
     "level": 3,
     "text": [
      "Toon Blast introduces its tap-to-blast rule first, then expands the player’s task with new objectives and obstacles. Early levels give the player space to learn how connected groups work and how removing cubes affects the board. Later, new elements ask the player to consider more than the size of the next group: the player must also consider which targets need to be cleared and how to reach them within the move limit.",
      "As the game introduces new mechanics, levels combine them with familiar elements. This shifts the challenge from learning an isolated rule to deciding how several rules interact on one board. The player has to prioritise objectives, manage the space created by each blast, and decide when to use a power-up rather than making a smaller move."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/01_early_level_board.jpeg",
       "caption": "Early level board"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/02_new_mechanic_introduction.jpeg",
       "caption": "A new mechanic being introduced"
      }
     ]
    },
    {
     "title": "Combined Objectives and Power-Up-Focused Levels",
     "level": 3,
     "text": [
      "Some boards ask the player to work toward more than one objective or use the board layout to create a useful power-up. These levels reward looking ahead: a large group may be available now, but removing a smaller group in the right location may create a better board for the next move.",
      "Power-up-focused levels change the player’s priorities. Instead of tapping the largest available group automatically, the player has to consider which move creates or activates the most useful effect. The move limit keeps this decision meaningful, because spending moves to set up a combination has an opportunity cost."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/03_multiple_objectives.jpeg",
       "caption": "Multiple objectives"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/04_power_up_combo_level.jpeg",
       "caption": "Power-up-focused level"
      }
     ]
    },
    {
     "title": "Duck Objective",
     "level": 3,
     "text": [
      "Ducks appear as a level objective in the observed playthrough, with the relevant objective visible around Level 41. Their introduction shifts the player’s attention from clearing only coloured cubes to making progress toward a specific target. The player must read the objective indicator and choose moves that help complete it, rather than assuming that clearing a large number of cubes will automatically finish the level."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/06_duck_objective_level.jpeg",
       "caption": "Duck objective"
      }
     ]
    },
    {
     "title": "Later-Level Board Layouts",
     "level": 3,
     "text": [
      "Later boards in the first-50-level sample place greater emphasis on managing available space, targeting the required elements, and creating power-ups at useful positions. The same tap-to-blast rule remains in place, but the value of a move increasingly depends on how it changes the next set of available groups."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/02_Level_Design/07_later_level_board.jpeg",
       "caption": "A later level board"
      }
     ]
    }
   ]
  },
  {
   "title": "Level Difficulty",
   "groups": [
    {
     "title": "Difficulty and Failed Attempts",
     "level": 3,
     "text": [
      "Toon Blast’s difficulty comes from the relationship between the objective, the board layout, and the available move count. A level can feel difficult when targets are spread out, useful groups are hard to create, or the player needs to spend moves setting up a power-up before making direct progress.",
      "In the observed first-50-level playthrough, difficulty was not determined only by how many cubes were on the board. A move that clears many cubes may still be inefficient if it does not help complete the target. The player has to balance immediate progress against creating a board state that makes the next move more useful.",
      "Across my first 50 levels, Toon Blast felt harder and less even in difficulty than Royal Match. Some levels felt noticeably more demanding than others. This is a subjective impression from my own playthrough, not a measured difficulty curve or a claim about every player."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/03_Level_Difficulty/03_easy_level_streak.jpeg",
       "caption": "An easy level streak"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/03_Level_Difficulty/04_hard_level_attempt.jpeg",
       "caption": "A hard level attempt"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/03_Level_Difficulty/05_remaining_moves.jpeg",
       "caption": "Remaining moves"
      }
     ]
    },
    {
     "title": "Failed-Level Feedback",
     "level": 3,
     "text": [
      "When a level is not completed within the available moves, the failure screen makes the unsuccessful attempt explicit. This gives the player a clear point to decide whether to retry or use any available continuation option."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/04_Level_Difficulty/02_Toon_Blast_Level_Failed.jpeg",
       "caption": "Failure screen"
      }
     ]
    }
   ]
  },
  {
   "title": "Graphics",
   "groups": [
    {
     "title": "Visual Style and Readability",
     "level": 3,
     "text": [
      "Toon Blast uses a bright, cartoon-oriented visual style, with saturated colours, rounded shapes, and playful character imagery. The coloured cubes are the main interactive elements, and their clear colour differences make connected groups easy to scan. Obstacles and objectives add visual variety to the board, while the character-led presentation maintains a light tone.",
      "In the observed playthrough, the early presentation felt comparatively simple, while later screens and visual effects appeared more polished. This is a subjective observation from the screenshots collected for this analysis, not a claim about every version of the game."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/05_Graphics_Visual_Polish/02_Toon_Blast_Early_Levels.jpeg",
       "caption": "Early levels"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/05_Graphics_Visual_Polish/03_Toon_Blast_Later_Levels.jpeg",
       "caption": "Later levels"
      }
     ]
    },
    {
     "title": "Loading Screen",
     "level": 3,
     "text": [
      "The loading screen continues the game’s cartoon identity before the player reaches the board."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/05_Graphics_Visual_Polish/05_Toon_Blast_Loading_Screen.jpeg",
       "caption": "Loading screen"
      }
     ]
    }
   ]
  },
  {
   "title": "Animation",
   "groups": [
    {
     "title": "Power-Up Activation and Board Reactions",
     "level": 3,
     "text": [
      "Power-up animations make the effect of a move visible. Rockets sweep along a row or column, Bombs clear a surrounding area, and Disco Balls remove cubes of a selected colour across the board. These distinct visual actions help communicate the different roles of the power-ups.",
      "When power-ups are combined, the board can resolve through a sequence of effects. Cubes disappear, pieces fall into newly opened spaces, and new groups may become available. The player sees not only the immediate result of the tap but also the changes it creates in the next board state."
     ],
     "media": [
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/05_Animation/01_cube_blast_and_falling.mp4",
       "poster": "posters/tb_01_cube_blast_and_falling.jpg",
       "caption": "Cube blast and falling"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/05_Animation/02_rocket_activation.mp4",
       "poster": "posters/tb_02_rocket_activation.jpg",
       "caption": "Rocket activation"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/05_Animation/03_power_up_combination.mp4",
       "poster": "posters/tb_03_power_up_combination.jpg",
       "caption": "Power-up combination"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/05_Animation/05_level_completion.mp4",
       "poster": "posters/tb_05_level_completion.jpg",
       "caption": "Level completion"
      }
     ],
     "layout": "wide"
    },
    {
     "title": "Disco Ball Combination",
     "level": 3,
     "text": [
      "Disco Ball combinations can create a visually dense sequence because multiple power-ups may activate across the board."
     ],
     "media": [
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/05_Animation/04_disco_ball_combination_sequence.mp4",
       "poster": "posters/tb_04_disco_ball_combination_sequence.jpg",
       "caption": "Disco Ball combination sequence"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/06_Animation_Special_Effects/02_Toon_Blast_Disco_Ball_Effect.jpeg",
       "caption": "Disco Ball effect"
      }
     ]
    }
   ]
  },
  {
   "title": "Particles & Special Effects",
   "groups": [
    {
     "title": "Obstacle-Clearing Feedback",
     "level": 3,
     "text": [
      "The visual effect that accompanies a cube or obstacle being cleared helps communicate that the move has registered. This feedback is especially important when a level contains multiple targets, because the player needs to see which element has been affected and whether the board has changed in a useful way."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/06_Animation_Special_Effects/04_Toon_Blast_Obstacle_Break_Effect.jpeg",
       "caption": "Obstacle-break effect"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/01_cube_blast_effect.jpeg",
       "caption": "Cube blast effect"
      }
     ]
    },
    {
     "title": "Power-Up Effects",
     "level": 3,
     "text": [
      "Toon Blast gives its major power-ups recognisable effects: a Rocket clears a line, a Bomb clears an area, and a Disco Ball removes cubes of a selected colour. Larger combinations produce more extensive changes across the board, making the outcome of a move easy to notice. The effects communicate the scale of an action, from a small group removal to a board-wide chain reaction."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/02_rocket_trail_and_explosion.jpeg",
       "caption": "Rocket trail and explosion"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/03_bomb_explosion.jpeg",
       "caption": "Bomb explosion"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/04_disco_ball_activation_effect.jpeg",
       "caption": "Disco Ball activation"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/05_level_completion_effects.jpeg",
       "caption": "Level completion effects"
      }
     ],
     "layout": "wide"
    }
   ]
  },
  {
   "title": "User Interface",
   "groups": [
    {
     "title": "In-Level Interface",
     "level": 3,
     "text": [
      "The in-level interface keeps the move limit and level objective visible while the player interacts with the board. This information is essential in a tap-to-blast game because a move can remove many cubes without necessarily advancing the objective. The player needs to track both the moves remaining and the specific target still required to finish the level.",
      "Power-ups and boosters add further choices, but the board remains the main focus. The interface should make it possible to understand the objective and available actions without obscuring the groups the player needs to evaluate."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/07_User_Interface/03_in_game_interface.jpeg",
       "caption": "In-game interface"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/07_User_Interface/02_level_start_screen.jpeg",
       "caption": "Level start screen"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/07_User_Interface/04_level_complete_screen.jpeg",
       "caption": "Level complete screen"
      }
     ]
    },
    {
     "title": "Main Screen and Progression",
     "level": 3,
     "text": [
      "The main screen is the entry point to level progression and the game’s wider systems. It provides access to the current level and other activities that become available as the player progresses."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/07_User_Interface/01_main_screen.jpeg",
       "caption": "Main screen"
      }
     ]
    },
    {
     "title": "Profile and Teams",
     "level": 3,
     "text": [
      "The observed playthrough included a profile screen and a team system. These screens extend the experience beyond individual levels by giving players access to identity and social features outside the puzzle board."
     ],
     "media": []
    },
    {
     "title": "Events, Offers, and Pop-ups",
     "level": 3,
     "text": [
      "The playthrough showed event screens and purchase-related pop-ups in addition to the main level flow. These interfaces compete for the player’s attention with the core puzzle, so their placement and frequency influence how the overall experience feels. In the observed sessions, Toon Blast appeared to present purchase prompts more frequently than Royal Match. This is a subjective observation from my playthrough, not a measured claim about all users or versions.",
      "============================================================"
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/06_Particles_and_Special_Effects/08_event_and_popup_ui.jpeg",
       "caption": "Event and pop-up interface"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/03_Toon_Blast/07_User_Interface/05_event_or_collection_screen.jpeg",
       "caption": "Event or collection screen"
      }
     ]
    }
   ]
  }
 ]
};
