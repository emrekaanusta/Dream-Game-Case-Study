// ROYAL MATCH PAGE CONTENT — edit this file to change the page.
// - "text": list of paragraphs (each string = one paragraph).
// - "media": images/videos shown next to that text. Remove an entry to remove it; paths are relative to index.html.
// - "layout":"wide" shows the media in a row below the text.
// Keep the quotes, commas and brackets intact. Save, then refresh the browser.
window.ROYAL_CONTENT = {
 "title": "Royal Match",
 "subtitle": "A match game that introduces one idea at a time, then layers them.",
 "opening": "Royal Match teaches by doing: a short on-board prompt introduces each obstacle, later levels stack them, power-ups give the player tools to answer them, and difficulty labels and castle progression frame the pacing.",
 "scope": "The direct comparison with Toon Blast focuses on the first 50 levels of each game.",
 "sections": [
  {
   "title": "Game Mechanics",
   "groups": [
    {
     "title": "Core Gameplay",
     "level": 3,
     "text": [
      "Royal Match is a match-3 puzzle game built around swapping adjacent pieces to create matches of three or more items of the same colour. Each level sets one or more objectives and limits the player to a fixed number of moves. A level is completed when its objectives are fulfilled before the moves run out. The player can see the remaining moves and objectives throughout the level, so every move is a choice between making immediate progress, preparing a larger match, or creating a power-up.",
      "The board combines coloured pieces with obstacles and objective-specific elements. Many obstacles are cleared by making a match beside them, while others require multiple hits or a particular interaction. A match is therefore valuable not only for the pieces it removes, but also for its position relative to objectives and obstacle layers.",
      "Winning a normal level awards a star. Stars are spent on tasks that renovate the castle, connecting the short puzzle loop to a longer progression system. The repeated cycle is simple: complete a level, earn a star, choose a renovation task, and return to the next puzzle."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/01_Core_Gameplay/01_Royal_Match_Gameplay.jpeg",
       "caption": "Gameplay: objectives and remaining moves"
      }
     ]
    },
    {
     "title": "Selected Obstacle Examples",
     "level": 3,
     "text": [
      "This section focuses on selected obstacles encountered during gameplay rather than attempting to catalogue every obstacle in Royal Match. The examples illustrate how obstacle rules work, how hits and layers resolve, and how board placement influences the moves needed to make progress."
     ],
     "media": []
    },
    {
     "title": "Boxes",
     "level": 3,
     "text": [
      "Boxes appear at the beginning of the game and teach the player to pay attention to what is beside a match, not only to the coloured pieces being matched. Making a match next to a box damages it. A box with more than one layer needs to be hit again before it disappears, so one adjacent match can create progress without fully clearing the obstacle.",
      "This adds complexity without changing the basic match-3 rule. The player already understands how to make a match; the new challenge is to position it where it contributes to the level objective. When boxes are clustered together, one well-placed match can make progress on multiple nearby targets."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/02_box_obstacle.jpeg",
       "caption": "Box tutorial prompt"
      }
     ]
    },
    {
     "title": "Grass",
     "level": 3,
     "text": [
      "Grass occupies board tiles and must be cleared through matches made next to it. A layered version appears shortly after the first version. As with layered boxes, the player must distinguish between making a match and fully removing the target: a hit can reduce the obstacle without clearing it completely.",
      "Grass changes how the player evaluates the board because the objective is tied to particular spaces, not just to collecting coloured pieces. A match that does not help clear grass may still be useful for creating a power-up, but with limited moves the player must weigh that setup against direct objective progress."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/03_grass_obstacle.jpeg",
       "caption": "Grass on the board"
      }
     ]
    },
    {
     "title": "Cupboard",
     "level": 3,
     "text": [
      "The Cupboard is opened by making a match next to it. Opening it reveals plates inside, and its objective is completed only after all of those plates have been broken. The player therefore has to work through two connected stages: interact with the Cupboard, then clear the contents it reveals.",
      "Opening the Cupboard is not necessarily the same as finishing its objective. The player must continue to make useful matches around the revealed plates while managing the remaining objectives and move limit."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/10_cabinet_obstacle.jpeg",
       "caption": "Cupboard tutorial prompt"
      }
     ]
    },
    {
     "title": "Royal Egg",
     "level": 3,
     "text": [
      "The Royal Egg is a movable board element observed during the early-level analysis. It can be repositioned as the player makes moves, and it requires adjacent matches to make progress. In the observed example, two adjacent matches were needed to complete its interaction.",
      "Unlike a stationary obstacle, a movable element adds a positional consideration: the player must think about where it is and whether the next match will help interact with it."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/09_special_object_egg.jpeg",
       "caption": "Royal Egg level"
      }
     ]
    },
    {
     "title": "Power-up System",
     "level": 3,
     "text": [
      "Power-ups reward the player for creating larger or more deliberate matches. They can clear more pieces than a standard match and help reach obstacles or objectives that are difficult to approach directly. A power-up can generally be activated by tapping it or swapping it with an adjacent piece. The four main power-ups discussed here are the Rocket, TNT, Propeller, and Light Ball.",
      "Each power-up has a different area of effect, so choosing where to create or activate it matters. A Rocket targets a line, TNT affects a surrounding area, a Propeller travels to a target, and a Light Ball removes pieces of one colour. These differences make power-ups useful in different board situations rather than interchangeable sources of damage."
     ],
     "media": []
    },
    {
     "title": "Rocket",
     "level": 4,
     "text": [
      "A Rocket is created by matching four items of the same colour in a line. Depending on its orientation, it clears either a horizontal row or a vertical column. This makes the Rocket useful when an objective or obstacle is aligned with a row or column, or when the player needs to clear a path across the board.",
      "Because its effect follows a straight line, the Rocket’s position and orientation matter. Activating it where its line crosses several targets can be more valuable than using it where most of the line is empty."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/13_rocket_power_up.jpeg",
       "caption": "Rocket"
      }
     ]
    },
    {
     "title": "TNT",
     "level": 4,
     "text": [
      "TNT is created by matching five items of the same colour in an L or T shape. When activated, it clears items within a two-tile radius. Unlike the Rocket’s straight-line effect, TNT is suited to a concentrated group of obstacles or targets around its position.",
      "Its value depends on placement: TNT surrounded by useful targets can make substantial progress, while TNT activated in an open area may waste much of its area of effect."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/14_tnt_power_up.jpeg",
       "caption": "TNT"
      }
     ]
    },
    {
     "title": "Propeller",
     "level": 4,
     "text": [
      "A Propeller is created by matching four items of the same colour in a 2×2 square. When activated, it first clears neighbouring tiles, then flies to a game element and clears it. This combines a small local clear with the ability to reach a target elsewhere on the board. The target selection is random, so the player does not directly control its destination."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/15_propeller_power_up.jpeg",
       "caption": "Propeller"
      }
     ]
    },
    {
     "title": "Light Ball",
     "level": 4,
     "text": [
      "The Light Ball is created by matching five items of the same colour in a line. When activated, it clears all items of the selected colour from the board. This can be useful when many pieces of that colour remain or when removing them may trigger further matches and reactions.",
      "Its effect is board-wide rather than limited to one row, column, or local area. Its value depends on the number and placement of pieces of the chosen colour and whether removing them helps complete the objectives."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/07_power_up_ball.jpeg",
       "caption": "Light Ball"
      }
     ]
    },
    {
     "title": "Power-up Combinations",
     "level": 3,
     "text": [
      "Swapping two adjacent power-ups combines their effects into one activation. Combinations can cover a larger area or affect the board in a different way from using either power-up alone. The outcome depends on the pair, so recognising the available combination before activating it can make a meaningful difference."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/16_power_up_combination.jpeg",
       "caption": "A recorded power-up combination"
      }
     ]
    },
    {
     "title": "Rocket + Rocket",
     "level": 4,
     "text": [
      "Combining two Rockets clears both a row and a column through the tile where the combination is activated. The cross-shaped effect can reach targets in two directions at once."
     ],
     "media": []
    },
    {
     "title": "Rocket + TNT",
     "level": 4,
     "text": [
      "Combining a Rocket and TNT clears three rows and three columns through the activation tile. It covers a broader cross-shaped area than a single Rocket and reaches more targets around the centre."
     ],
     "media": []
    },
    {
     "title": "TNT + TNT",
     "level": 4,
     "text": [
      "Combining two TNT power-ups creates a larger blast that clears items within a four-tile radius. It is useful when many targets are concentrated around the activation point."
     ],
     "media": []
    },
    {
     "title": "Propeller + Propeller",
     "level": 4,
     "text": [
      "Combining two Propellers creates three Propellers, which travel to clear three random game elements. Each take-off also clears neighbouring tiles. The combination distributes its effects across multiple destinations rather than concentrating them in one fixed area."
     ],
     "media": []
    },
    {
     "title": "Propeller + Rocket",
     "level": 4,
     "text": [
      "When a Propeller is combined with a Rocket, the Propeller carries the Rocket to a random tile and activates it there. The Propeller’s take-off also clears neighbouring tiles. The Rocket’s line-clearing effect is applied from the destination selected by the Propeller, not necessarily from the original combination tile."
     ],
     "media": []
    },
    {
     "title": "Propeller + TNT",
     "level": 4,
     "text": [
      "When a Propeller is combined with TNT, the Propeller carries the TNT to a random tile and activates it there. Its take-off also clears neighbouring tiles. This combines the Propeller’s ability to travel with TNT’s surrounding-area blast."
     ],
     "media": []
    },
    {
     "title": "Light Ball + Rocket",
     "level": 4,
     "text": [
      "Combining the Light Ball with a Rocket turns the most common colour of items on the board into Rockets. These Rockets then activate, creating a chain of line-clearing effects. The result depends on which colour is most common at activation time."
     ],
     "media": []
    },
    {
     "title": "Light Ball + TNT",
     "level": 4,
     "text": [
      "Combining the Light Ball with TNT turns the most common colour of items on the board into TNT power-ups. Those TNT power-ups then activate, creating multiple area blasts across the board."
     ],
     "media": []
    },
    {
     "title": "Light Ball + Propeller",
     "level": 4,
     "text": [
      "Combining the Light Ball with a Propeller turns the most common colour of items on the board into Propellers. The Propellers then travel to clear random game elements, while their take-off effects clear neighbouring tiles."
     ],
     "media": []
    },
    {
     "title": "Light Ball + Light Ball",
     "level": 4,
     "text": [
      "Combining two Light Balls clears all items on the board and removes one layer from each game element. It removes coloured pieces everywhere and reduces layered elements, although it does not necessarily complete every objective in one activation."
     ],
     "media": []
    },
    {
     "title": "Special Missions",
     "level": 3,
     "text": [
      "In addition to standard match-3 levels, Royal Match includes short special missions with a different objective and board setup. These missions interrupt the regular level loop with a rescue scenario and a brief narrative moment. Present them as a separate subsection because their goals and reward structure differ from normal levels."
     ],
     "media": []
    },
    {
     "title": "Water Rescue",
     "level": 4,
     "text": [
      "In the Water Rescue mission observed during the analysis, the player clears sand so that water can flow toward a fountain and rescue the King. The board is built around directing the water path rather than completing the usual coloured-piece objective. In the observed instance, the mission ended with a short rescue moment and awarded 50 gold rather than a normal level star."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/13_kings_nightmare_water_rescue.jpeg",
       "caption": "Water Rescue mission"
      }
     ]
    },
    {
     "title": "Dragon Escape",
     "level": 4,
     "text": [
      "In the observed Dragon Escape mission, the player must break boxes and obtain a key to unlock the King’s room and help him escape from a dragon. The screen includes a timer and a progress counter, making the mission feel more urgent than a standard level."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/01_Game_Mechanics/14_kings_nightmare_dragon_escape.jpeg",
       "caption": "Dragon Escape mission"
      }
     ]
    }
   ]
  },
  {
   "title": "Level Design",
   "groups": [
    {
     "title": "Obstacle Introduction and Progression",
     "level": 3,
     "text": [
      "Royal Match introduces early obstacles gradually, allowing the player to learn one interaction before having to combine it with others. Boxes appear at the beginning, grass follows shortly after, and layered versions make familiar obstacles more demanding without requiring a new control scheme. The challenge evolves from simply making matches to choosing matches that also damage the correct targets.",
      "As levels progress, boards ask the player to manage more than one kind of objective or obstacle at a time. This creates difficulty through interaction and positioning: the player must decide which target to work on first, which matches affect several targets, and when creating a power-up is worth spending moves on setup."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/03_Level_Design_Progression/01_Royal_Match_Boxes_Grass.jpeg",
       "caption": "Early boxes and grass"
      }
     ]
    },
    {
     "title": "Castle Renovation and Star Economy",
     "level": 3,
     "text": [
      "Winning a normal level gives the player one star, and stars are spent on renovation tasks. The player can choose between individual tasks, sometimes with different star costs, such as a one-star task and a two-star task. This gives the player some control over how to spend the reward instead of making every win trigger a single automatic upgrade.",
      "The castle provides visible evidence that progress is accumulating outside the puzzle board. Completing tasks changes the environment and unlocks further areas, turning stars into a tangible progression currency. In the observed playthrough, completing the first area led to the Throne Room, and later progress opened additional areas including the Dining Room and Garden."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/03_Level_Design_Progression/03_Royal_Match_Castle_Renovation.jpeg",
       "caption": "Castle renovation"
      }
     ]
    }
   ]
  },
  {
   "title": "Level Difficulty",
   "groups": [
    {
     "title": "Difficulty Signals and Player Experience",
     "level": 3,
     "text": [
      "Royal Match uses labels such as “Hard” and “Super Hard” to signal levels expected to be more demanding than surrounding stages. These labels set expectations before a level begins, although the label alone does not guarantee how difficult a particular board will feel to an individual player.",
      "In the observed first-50-level playthrough, the early game generally felt forgiving enough to learn the mechanics, with occasional levels that required more than one attempt. The first recorded failure occurred at Level 13, and the game offered five extra moves for 900 gold after the failure. Level 25 took three attempts. Later levels displayed difficulty labels, including Levels 39, 45, and 49, but Level 49 did not feel especially difficult in this playthrough. These are observations from one playthrough, not a universal difficulty rating.",
      "In the observed Team Battle, the first attempt failed and the second succeeded with one move remaining. This shows how challenge can also be experienced through event or team progress, not only through individual levels."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/04_Level_Difficulty/01_Royal_Match_Hard_Level.jpeg",
       "caption": "Hard-level label"
      }
     ]
    },
    {
     "title": "Extra Moves and Failure",
     "level": 3,
     "text": [
      "When the player runs out of moves before completing the objective, the level can end in failure. In the observed Level 13 failure, Royal Match offered five additional moves in exchange for 900 gold. This creates a decision point after failure: spend premium currency to continue the current attempt or leave the level and try again later."
     ],
     "media": []
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
      "Royal Match uses a polished, colourful 3D-inspired visual style with rounded shapes, strong silhouettes, glossy surfaces, and high contrast between interactive pieces and the board background. The art direction supports quick recognition: coloured pieces stand out from the board, while obstacles have distinct shapes and textures that help communicate what they are.",
      "The visual presentation also connects the puzzle to the wider castle setting. Characters, environments, and renovation screens share a friendly, storybook-like tone, giving the player a consistent world beyond the level board. The loading screen reinforces this identity before the player enters the game."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/05_Graphics_Visual_Polish/01_Royal_Match_Visual_Style.jpeg",
       "caption": "Board pieces and obstacles"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/05_Graphics_Visual_Polish/04_Royal_Match_Loading_Screen.jpeg",
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
     "title": "Power-up Activation and Chained Reactions",
     "level": 3,
     "text": [
      "Power-up animations communicate both the effect and the result of an action. Rockets travel along a row or column, TNT produces an area blast, and Propellers take off toward a game element. These different motion patterns help the player understand why each power-up affects the board differently.",
      "When several power-ups activate in sequence, the board can become a chain reaction: one effect removes pieces, those removals trigger further matches or activations, and the board resolves the results before play returns to the player. The ordering of these events affects how powerful the action feels because the player sees the consequences unfold rather than receiving only a numerical progress update."
     ],
     "media": [
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/04_Animation/01_level_completion.mp4",
       "poster": "posters/rm_01_level_completion.jpg",
       "caption": "Level completion"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/04_Animation/02_tnt_disco_ball_chain_reaction.mp4",
       "poster": "posters/rm_02_tnt_disco_ball_chain_reaction.jpg",
       "caption": "TNT and Disco Ball chain reaction"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/04_Animation/03_rocket_animation.mp4",
       "poster": "posters/rm_03_rocket_animation.jpg",
       "caption": "Rocket animation"
      },
      {
       "type": "video",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/04_Animation/04_propeller_rocket_combination.mp4",
       "poster": "posters/rm_04_propeller_rocket_combination.jpg",
       "caption": "Propeller and Rocket combination"
      }
     ],
     "layout": "wide"
    }
   ]
  },
  {
   "title": "Particles & Special Effects",
   "groups": [
    {
     "title": "Feedback When Obstacles Break",
     "level": 3,
     "text": [
      "Particles, flashes, and impact effects provide immediate feedback when an obstacle is damaged or removed. The effect marks the moment a hit registers, helping the player distinguish a successful interaction from a move that only changes the coloured pieces. This feedback is particularly useful for layered obstacles, where the visual state must communicate whether a layer was removed or the obstacle was fully cleared."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/06_Animation_Special_Effects/03_Royal_Match_Obstacle_Break_Effect.jpeg",
       "caption": "Obstacle-break effect"
      }
     ]
    },
    {
     "title": "Power-up Effects",
     "level": 3,
     "text": [
      "Power-ups use different visual signatures to make their effects recognisable. The Rocket’s directional sweep, TNT’s area explosion, the Propeller’s flight, and the Light Ball’s colour-wide clearing effect each communicate a distinct action. During a large combination, these effects can overlap with the removal of pieces and obstacles, creating a more dramatic resolution than a single match."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/05_Particles & Special Effects/01_rocket_fire_trails_sparks.jpeg",
       "caption": "Rocket fire trails and sparks"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/05_Particles & Special Effects/02_tnt_explosion_effects.jpeg",
       "caption": "TNT explosion"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/05_Particles & Special Effects/03_disco_ball_light_effects.jpeg",
       "caption": "Light Ball effects"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/05_Particles & Special Effects/04_propeller_particle_effects.jpeg",
       "caption": "Propeller particles"
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
      "During a level, the interface keeps the objective and remaining moves visible so the player can make decisions with the current constraints in mind. The King’s portrait reinforces the game’s theme, while the board remains the main focus. The move counter makes the cost of each action clear, and the objective display helps the player check whether a match contributes directly to the goal.",
      "The level-completion flow also makes the next step clear: a successful level awards a star, which can be spent on castle renovation. This creates a readable connection between the puzzle interface and the meta-game rather than leaving the reward disconnected from the level."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/06_User Interface/05_level_complete_screen.jpeg",
       "caption": "Level-complete screen with star reward"
      }
     ]
    },
    {
     "title": "Main Screen and Meta-Game Navigation",
     "level": 3,
     "text": [
      "The main screen gives the player access to core level progression and the wider game systems. During the observed playthrough, the castle-renovation entry point was easy to notice, and its placement helped communicate that stars could be spent on visible environmental upgrades. The main screen also provides access to events and other progression systems as they become available."
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/04_Comparison/07_UI_Meta_Game/01_Royal_Match_Main_Screen.jpeg",
       "caption": "Main screen"
      }
     ]
    },
    {
     "title": "Lives, Teams, and Social Systems",
     "level": 3,
     "text": [
      "Royal Match limits the player to five lives. Lives create a pause between repeated attempts after failures, while team features add a social layer. Teams support up to 50 members and include chat and life requests. Helping a teammate was observed to award five gold. Team activities, shields, and support rewards add goals beyond completing individual levels.",
      "============================================================"
     ],
     "media": [
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/06_User Interface/02_team_chat.jpeg",
       "caption": "Team chat and life requests"
      },
      {
       "type": "image",
       "src": "Puzzle_Game_Analysis/02_Royal_Match/06_User Interface/03_science_collection_event.jpeg",
       "caption": "Card collection event"
      }
     ]
    }
   ]
  }
 ]
};
