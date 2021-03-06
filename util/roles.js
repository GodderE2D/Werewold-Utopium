let tags = require('./tags')

let roles = {
  
  // Villager roles
  
  "Villager": {
    desc: "You are a regular villager without any special abilities.",
    aura: "Good",
    team: "Village",
    abbr: ["reg","vil","vill","forkman","forkmen"],
    cat : "Regular Villager",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Aura Seer": {
    desc: "Each night you can select a player to uncover their alignment: Good, Evil, or Unknown." +
          " Evil players belong to the werewolves and good players belong to the villagers team.\n",
          // + "Unknown targets can be: Gunner, Jailer, Medium, Alpha werewolf, and all solo players.",
    aura: "Good",
    team: "Village",
    abbr: ["az","aura"],
    cat : "Regular Villager",
    nite: "Select a player to uncover their alignment (`w!check [player]`).",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Avenger": {
    desc: "After the first night you can select a player to kill when you die.",
    aura: "Good",
    team: "Village",
    abbr: ["hunter"],
    cat : "Regular Villager",
    day : "Select a player to kill when you die (`w!avenge [player]`).",
    nit1: "Nothing to do. Go back to sleep!",
    nite: "Select a player to kill when you die (`w!avenge [player]`).",
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Beast Hunter": {
    desc: "At night you can place a trap on a person which will become active the following night." +
          " This player cannot be killed at night." +
          " If the player is attacked by werewolves, the weakest werewolf will die." +
          " Solo killers will not be killed by the trap, but will instead remove the trap after attacking." +
          " The trap has no effect on zombies and the sect leader.",
    aura: "Unknown",
    team: "Village",
    abbr: ["bh"],
    cat : "Regular Villager",
    cgp : "250c",
    nite: "Select a player to place your trap on (`w!trap [player]`). You can place the trap on yourself.",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Bodyguard": {
    desc: "You can choose one player to protect every night." +
          " That player cannot be killed that night and instead you will be attacked." +
          " Because you are strong you survive the first attack, but you will die on the second attack." +
          " Every night you automatically protect yourself.",
    aura: "Good",
    team: "Village",
    abbr: ["bg"],
    cat : "Regular Villager",
    nite: "Select a player to protect (`w!protect [player]`).",
    attr: { health: 2 },
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Cupid": {
  	desc: "During the first night you can select two players to be a love couple." +
    			" You win if the village wins or if the lovers are the last survivors.",
    aura: "Good",
    team: "Village",
    abbr: [],
    oneOnly: true,
    cgp : "50r",
    nit1: "Select two players to be a love couple (`w!lovers [player1] [player2]`)." +
          " If you do not select two players, they will be randomly selected.",
    tag : tags.ROLE.VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE | tags.ROLE.ONE_ONLY
  },
  "Cursed": {
    desc: "You are a villager until the werewolves try to kill you, at which point you become a werewolf." +
          " You cannot be converted into another team by sect leader etc.", 
    aura: "Good",
    team: "Village",
    abbr: ["lycan"],
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Detective": {
  	desc: "Each night you can select two players to uncover if they are in the same team.",
    aura: "Good",
    team: "Village",
    abbr: ["det","sherlock","holmes","sherlock holmes","conan"],
    cat : "Strong Villager",
    nite: "Select two players to uncover if they are in the same team (`w!detect [player1] [player2]`).",
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Doctor": {
    desc: "Choose a player to protect every night." +
          " That player cannot be killed that night.",
    aura: "Good",
    team: "Village",
    abbr: ["doc", "medic"],
    cat : "Regular Villager",
    nite: "Choose a player to protect (`w!heal [player]`).",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Flower Child": {
 		desc: "You are a villager who can once protect a player from being lynched by the village.",
    aura: "Good", 
    team: "Village", 
 		abbr: ["fc", "flower"],
    cat : "Regular Villager",
    day : "You can once protect a player from being lynched by the village (`w!protect [player]`).",
    attr: { abil1: 1 },
    cgp : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Forger": {
    desc: "You can forge two shields and then a sword." +
          " Forging takes one day and each new item must be given to another player before forging the next one." +
          " Each shield will save a player once from being attacked at night. The sword can be used to kill another player.",
    aura: "Unknown",
    team: "Village",
    abbr: ["forg"],
    cat : "Strong Villager",
    // nite: "",
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Fortune Teller": {
  	desc: "You have two cards which you can give to other players at night." +
          " These players can use these cards to reveal their roles.",
    aura: "Unknown",
    team: "Village",
    abbr: ["ft"],
    cat : "Strong Villager",
    nite: "Select a player to give your card to (`w!card [player]`).\n" +
          "You can give both cards to two players at once (`w!cards [player1] [player2]`).",
    attr: { abil1: 2, cards: [] },
    cgp : "25r",
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Grumpy Grandma": {
    desc: "After the first night you can select a player who cannot talk or vote during the day.",
    aura: "Good",
    team: "Village",
    abbr: ["granny","gg"],
    cat : "Regular Villager",
    nit1: "Nothing to do. Go back to sleep!",
    nite: "Select a player who cannot talk or vote during the day (`w!mute [player]`).",
    cgp : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Gunner": {
    desc: "You have two bullets which you can use to kill somebody." +
          " Only one bullet can be fired per day." +
          " The shots are very loud so that your role will be revealed after the first shot." +
          " You cannot shoot during the discussion phase on the first day.",
    aura: "Unknown",
    team: "Village",
    abbr: ["gun"],
    cat : "Strong Villager",
    day : "Select a player to kill (`w!shoot [player]`) if you find them suspicious.\n" +
          "**⚠️ Random shooting is a gamethrowing act, and can result in a ban!**",
    attr: { abil1: 2 },
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Jailer": {
    desc: "Select a target each day to put in jail during the next night." +
          " At night you can talk privately with your target." +
          " Your target cannot act or be attacked, but if you find them suspicious, you can kill them.",
    aura: "Unknown",
    team: "Village",
    abbr: ["jail"],
    cat : "Strong Villager",
    oneOnly: true,
    day : "Select a player to put in jail during the next night (`w!jail [player]`).",
    attr: { abil1: 1 },
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE | tags.ROLE.ONE_ONLY
  },
  "Loudmouth": {
    desc: "You can select a player who's role will be revealed when you are killed.",
    aura: "Good",
    team: "Village",
    abbr: ["lm"],
    cat : "Regular Villager",
    day : "Select a player to be revealed when you are killed (`w!reveal [player]`).",
    nite: "Select a player to be revealed when you are killed (`w!reveal [player]`).",
    // attr: { abil1: 1 },
    cap : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Marksman": {
 		desc: "At night you can mark a player as your target." +
          " After the next day, you can kill or change your target." +
          " If you try to kill a villager, your shot will backfire and kill you." +
          " You have two arrows.",
    aura: "Unknown",
    team: "Village",
    abbr: ["mm"],
    cat : "Regular Villager",
    day : "Kill your target (`w!shoot`) if you find them suspicious.\n" +
          "**⚠️ If your target is a villager, your shot will backfire and kill you!**",
    nite: "Mark a player as your target (`w!mark [player]`).\n" +
          "After the next day, you can kill your target (`w!shoot`) if you find them suspicious.\n" +
          "**⚠️ If your target is a villager, your shot will backfire and kill you!**",
    attr: { abil1: 2 },
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Mayor": {
  	desc: "Once during the game you can reveal your role which will make your vote count double during the rest of the game.",
    aura: "Good",
    team: "Village",
    abbr: [],
    day : "You can reveal your role (`w!reveal mayor`) to make your vote count double during the rest of the game.",
    attr: { abil1: 1 },
    cgp : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.REGULAR_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Medium": {
    desc: "During the night you can talk anonymously with the dead." +
          " Once during the game you can revive a dead player.",
    aura: "Unknown",
    team: "Village",
    abbr: ["med"],
    cat : "Strong Villager",
    nite: "You can talk anonymously with the dead." +
          " Once during the game you can revive a dead player (`w!revive [player]`).",
    attr: { abil1: 1, abil2: 1 },
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Pacifist": {
  	desc: "Once per game you can reveal the role of a player and prevent anybody from voting during that day.",
    aura: "Good",
    team: "Village",
    abbr: ["paci"],
    cat : "Regular Villager",
    day : "You can reveal the role of a player (`w!reveal [player]`) and prevent anybody from voting during that day.\n" +
          "**⚠️ Random revealing is a gamethrowing act, and can result in a ban!**",
    attr: { abil1: 1 },
    cgp : "25r",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "President": {
  	desc: "Everyone knows who you are! If you die the village loses.",
    aura: "Good",
    team: "Village",
    abbr: ["trump", "donald trump"],
    oneOnly: true,
    cgp : "50r",
    tag : tags.ROLE.VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE | tags.ROLE.ONE_ONLY
  },
  "Priest": {
    desc: "You can throw holy water on another player." +
          " If that player is a werewolf, they die. If he is not a werewolf, you die.",
    aura: "Good",
    team: "Village",
    abbr: ["pri"],
    cat : "Regular Villager",
    day : "You can throw holy water on another player (`w!water [player]`) if you find them suspicious.\n" +
          "**⚠️ If your target is __not__ a werewolf, you die!**",
    attr: { abil1: 1 },
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Red Lady": {
  	desc: "At night you can visit another player." +
          " If you are attacked while visiting, you will not be killed." +
          " However, if you visit a player that is attacked or is evil, you will die!",
    aura: "Good",
    team: "Village",
    abbr: ["rl", "harlot", "prostitute"],
    cat : "Regular Villager",
    nite: "You can visit another player (`w!visit [player]`)." +
          " If you are attacked while visiting, you will not be killed.\n" +
          "**⚠️ However, if you visit a player that is attacked or is evil, you will die!**",
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Seer": {
    desc: "Every night, you can select a player to uncover their role.",
    aura: "Good",
    team: "Village",
    abbr: [],
    cat : "Strong Villager",
    nite: "Select a player to uncover their role (`w!check [player]`).",
    tag : tags.ROLE.VILLAGER | tags.ROLE.STRONG_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Seer Apprentice": {
    desc: "You are a normal villager until the seer dies, at which point you become the new seer.",
    aura: "Good",
    team: "Village",
    abbr: ["sapp", "sa", "app", "seer app"],
    cat : "Regular Villager",
    cgp : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Sheriff": {
  	desc: "At night you can select someone to watch." +
          " If that player dies during the night, you will uncover two possible suspects who might have killed that player.",
    aura: "Good",
    team: "Village",
    abbr: ["sher", "woody", "cowboy"], 
    cat : "Regular Villager",
    nite: "Select a player to watch (`w!watch [player]`).",
    cgp : "25r",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Spirit Seer": {
  	desc: "Each night you can select two players." +
          " At the beginning of the next day you will be informed if either of those two players has killed last night.",
    aura: "Good",
    team: "Village",
    abbr: ["ss", "sz", "spirit", "spz", "sps"],
    cat : "Regular Villager",
    nite: "Select two players to see if either of them has killed tonight (`w!check [player1] [player2]`).",
    cgp : "25r",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Tough Guy": {
  	desc: "You can choose one player to protect every night." +
          " If you or that player is attacked, neither dies and instead you and the attacker will both see each others' roles." +
          " Because of your injuries, you will die at the end of the following day.",
    aura: "Good",
    team: "Village",
    abbr: ["tg"],
    cat : "Regular Villager",
    nite: "Select a player to protect (`w!protect [player]`).",
    attr: { health: 1 },
    cgp : "75c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Witch": {
  	desc: "You have two potions: One will kill and the other will protect a player." +
          " The protect potion is only consumed if the player was attacked. You cannot kill in the first night.",
    aura: "Unknown",
    team: "Village",
    abbr: [],
    cat : "Regular Villager",
    nit1: "Select a player to heal with your protect potion (`w!heal [player]`).",
    nite: "Select a player to heal with your protect potion (`w!heal [player]`) or to kill with your poison potion (`w!poison [player]`).\n" +
          "**⚠️ Random killing is a gamethrowing act, and can result in a ban!**",
    attr: { abil1: 1, abil2: 1 },
    cgp : "250c",
    tag : tags.ROLE.VILLAGER | tags.ROLE.REGULAR_VILLAGER | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  
  // Werewolf roles
  "Werewolf": {
    desc: "Choose one player to kill every night.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["ww"],
    cat : "Werewolf",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Alpha Werewolf": {
    desc: "You are a regular werewolf, except your vote counts as double.",
    aura: "Unknown",
    team: "Werewolves",
    abbr: ["aww","alpha", "alpha ww"],
    cat : "Werewolf",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).\n" +
          "You vote counts double.",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Guardian Wolf": {
  	desc: "You are a werewolf who can once protect a player from being lynched by the village.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["gww","wwg","gw","wg"],
    cat : "Werewolf",
    day : "You can once protect a player from being lynched by the village (`w!protect [player]`).",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    attr: { abil1: 1 },
    cgp : "75c",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Junior Werewolf": {
    desc: "Because you are so cute, you can select another player to be killed when you are killed.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["jww", "jr", "jnr", "jrww", "jnrww","jw"],
    cat : "Werewolf",
    day : "Select a player to kill when you die (`w!avenge [player]`).",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`)." +
          " Select a player to kill when you die (`w!avenge [player]`).",
    // attr: { abil1: 1 },
    cgp : "250c",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Kitten Wolf": {
    desc: "You are a werewolf with the ability to convert a villager into a werewolf." +
          " You can only do this once." +
          " If your target is not a villager, you lose your ability!",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["kww","wwk","wk","kw"],
    cat : "Werewolf",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).\n" +
          "Once you can convert a villager into a werewolf (`w!scratch [player]`).\n" +
          "**⚠️ If they are not a villager, you lose your ability!**",
    attr: { abil1: 1 },
    cgp : "25r",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Lone Wolf": {
    desc: "You are a regular werewolf, except you only win if you are the last werewolf alive.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["lw"],
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`)." +
          " However, remember you have to be last werewolf alive to win!",
    tag : tags.ROLE.SOLO_VOTING | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Nightmare Werewolf": {
    desc: "Twice during the game you can select a player during the day to \"fall asleep\" for one night ." + 
          " That player won't be able to use any abilities for one night.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["nww","nw"],
    cat : "Werewolf",
    day : "You can select a player during the day to \"fall asleep\" for one night (`w!nightmare [player]`).",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    attr: { abil1: 2 },
    cgp : "250c",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Shadow Wolf": {
    desc: "Once per game you can double your team's votes during the day, while hiding all votes.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["shadow", "watermelon"],
    cat : "Werewolf",
    day : "You can double your team's votes while hiding all votes (`w!shade`).",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    attr: { abil1: 1 },
    cgp : "250c",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Sorcerer": {
    desc: "Each night you can select a player to uncover their role." +
          " You cannot vote or talk with the werewolves at night.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["sorc"],
    nite: "Select a player to uncover their role (`w!check [player]`).",
    cgp : "75c",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Werewolf Berserk": {
    desc: "Once per game, you can active a werewolves \"frenzy\" during the day." +
          " If during the night your selected victim is being protected, your victim and all protectors of your victim will die." +
          " The frenzy will only be announced to the werewolves.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["wwb","bww","bers","berz"],
    cat : "Werewolf",
    day : "Once per game, you can active a werewolves \"frenzy\" during the day (`w!frenzy`).",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    attr: { abil1: 1 },
    cgp : "25r",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Wolf Pacifist": {
    desc: "Once per game you can reveal the role of a player to everybody and prevent anybody from voting during that day.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["wwp","wolf paci","ww paci","wpaci","wp","paci wolf","pww"],
    cat : "Werewolf",
    day : "You can reveal the role of a player (`w!reveal [player]`) and prevent anybody from voting during that day.",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).",
    attr: { abil1: 1 },
    cgp : "25r",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Wolf Seer": {
    desc: "Each night you can select a player to uncover their role." +
          " If you are the last werewolf or you resign your ability, you become a regular werewolf.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["wws", "wwz", "wwseer", "ww seer"],
    cat : "Werewolf",
    nite: "Chat and vote with the werewolves on who to kill tonight (`w!vote [player]`).\n" +
          "Select a player to uncover their role (`w!check [player]`).",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Wolf Shaman": {
    desc: "During the day you can enchant another player." +
          " For investigators, this player will appear to be a wolf shaman at the next night." +
          " If you are the last werewolf, you cannot enchant anybody.",
    aura: "Evil",
    team: "Werewolves",
    abbr: ["ww sham","sham","shaman"],
    cat : "Werewolf",
    day : "Select a player to enchant (`w!enchant [player]`).",
    nite: "Vote to kill a player with the werewolves (`w!vote [player]`).",
    tag : tags.ROLE.WEREWOLF | tags.ROLE.SEEN_AS_WEREWOLF |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  
  // Solo non-killing roles
  
  
  "Fool": {
    desc: "Your goal is to get lynched by the village. You win if they lynch you.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["tanner"],
    cat : "Voting",
    tag : tags.ROLE.SOLO_VOTING | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Headhunter": {
    desc: "Your goal is to get your target lynched by the village." +
          " You target must be lynched before you die in order to win." +
          " If your target dies another way, you become a regular villager.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["hh"],
    cat : "Voting",
    tag : tags.ROLE.SOLO_VOTING | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Instigator": {
    desc: "Choose 2 people each night. If those 2 players are voting each other at the end of the voting phase you win.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["instigate"],
    cat : "Voting",
    nite: "Choose two players to instigate hate between for the next day. (`w!instigate [player1] [player2]`)",
    day: "Try to get the two players you chose to be voting each other",
    tag : tags.ROLE.SOLO_VOTING | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.OTHER_ROLE | tags.ROLE.TO_BE_TESTED | tags.ROLE.ONE_ONLY,
    wrt : "544360819790577676"
  },
  "Soul Collector": {
    desc: "At night select a number of players to collect their souls if they die from villagers or werewolves." +
          " Souls you obtained can't be reached until you die." +
          " Win by filling up all three boxes with souls.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["sc"],
    oneOnly: true,
    cat : "Voting",
    nite: "Select a number of players to collect their souls (`w!collect [player] ...`).",
    tag : tags.ROLE.SOLO_VOTING | tags.ROLE.SEEN_AS_VILLAGER |
          tags.ROLE.WWOWC_ROLE | tags.ROLE.AVAILABLE | tags.ROLE.ONE_ONLY,
    wrt : "516508877194395649"
  },
  
  // Solo killing roles
  
  "Accomplice": {
    desc: "The Bandit can convert another player to be their accomplice at night." +
          " As an Accomplice, you and the Bandit can select a player to kill at night. If the vote is a draw, your vote wins." +
          " You win if all alive players belong to your team.",
    aura: "Unknown",
    team: "Bandits",
    abbr: ["band","bd"],
    cat : "Killer",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Arsonist": {
  	desc: "Each night you can either select two players to douse with gasoline, or ignite all doused players which kills them." + // alias: w!burn
          " You cannot be killed by the werewolves." + 
          " You win if you are the last player alive.", 
    aura: "Unknown", 
    team: "Solo",
    abbr: ["ars", "arso", "arson", "pyro"],
    cat : "Killer",
    nite: "Select two players to douse with gasoline (`w!douse [player1] [player2]`) or" +
          " ignite all doused players (`w!ignite`).",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  }, 
  "Bandit": {
    desc: "Find an Accomplice by converting a player at night. Together you can kill one player each night." +
          " If your Accomplice dies you can select a new one. You cannot be killed by the werewolves." +
          " You win if all alive players belong to your team.",
    aura: "Unknown",
    team: "Bandits",
    abbr: ["band","bd"],
    cat : "Killer",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Bomber": {
  	desc: "At night you can place a bomb which will explode during the following night." +
          " You cannot be killed by the werewolves. You win if you are the last player alive.",
 		aura: "Unknown",
    team: "Solo",
    abbr: ["bb", "bomb"],
    cat : "Killer",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Corruptor": {
  	desc: "Every night you can select one player to \"glitch\"." +
    			" That player won't be able to speak or vote the next day and will die at the end of the day." +
  				" The role of that player won't be revealed when dying. The player cannot be revived by the medium." +
          " You cannot be killed by the werewolves." +
          " You win if you are the last player alive.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["corr"],
    cat : "Killer",
    nite: "Select a player to \"glitch\" (`w!corrupt [player1]`).",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Cannibal": {
  	desc: "Each night you can either kill a player by eating him or save up your hunger to eat 5 players in one night." +
          " You cannot be killed by the werewolves." +
          " You win if you are the last player alive.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["canni", "cani", "cb"],
    cat : "Killer",
    nite: "Select a player to \"eat\" (`w!eat [player1]`) or save up your hunger.",
    attr: { abil1: 1 },
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Dazzler": {
  	desc: "Every other night, you can kill two players." +
    "The next day, you can shine the beam on another player to stop their ability. "+
    "If their role has the ability to see, you can choose to use their ability once.",
    aura: "Unknown",
    team: "Solo",
    abbr: ["dazz", "dazzle"],
    cat : "Killer",
    nite: "Select a player to \"dazzle\" (`w!dazzle [player1]`).",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.OTHER_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Illusionist": {
  	desc: "Each night you can disguise a player." +
          " This player will appear to be an illusionist to seer roles." +
          " You can kill all disguised players during the discussion phase." +
          " You cannot be killed by the werewolves." +
          " You win if you are the last player alive.",
    aura: "Unknown", 
    team: "Solo", 
    abbr: ["illu", "illusion"],
    cat : "Killer",
    day : "You can kill all disguised players (`w!kill`).",
    nite: "Select a player to disguise (`w!disguise [player]`).",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Sect Leader": {
  	desc: "Every night you can convert a player to join your sect." +
          " Together you win if you are the last players alive." +
          " All sect members will commit suicide if the sect leader dies." +
    			" You cannot convert werewolves and solo killers.", 
    aura: "Unknown",
    team: "Sect",
    abbr: ["sl"],
    cat : "Killer",
    nite: "Select a player to be converted into your sect (`w!sect [player]`)." + 
          " You cannot convert werewolves and solo killers.",
    oneOnly: true,
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE | tags.ROLE.ONE_ONLY
	},
  "Serial Killer": {
    desc: "Each night you can kill one player." +
          " You cannot be killed by the werewolves." +
          " You win if you are the last player alive.", 
    aura: "Unknown",
    team: "Solo",
    abbr: ["sk"],
    cat : "Killer",
    nite: "Select a player to stab (`w!stab [player]`).",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.AVAILABLE
  },
  "Zombie": {
  	desc: "Each night you can bite a player which will turn that player into a zombie at the end of the next night." +
          " Bitten players will remain in their team for one day before converting." +
          " All zombies can select different targets." +
          " Only players from the village team or solo voting roles can be converted." +
          " You win if all players have been converted.",
    aura: "Unknown",
    team: "Zombies",
    abbr: ["zomb", "zom", "zb", "zombert", "walking dead"],
    cat : "Killer",
    nite: "Select a player to bite (`w!bite [player]`).",
    cgp : "1000c",
    tag : tags.ROLE.SOLO_KILLER |
          tags.ROLE.WWO_ROLE | tags.ROLE.UNAVAILABLE
  },
  
  // Random Roles
  
  "Random": {
    desc: "Any role.",
    abbr: ["rdm"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  "Random Regular Villager": {
    desc: "One of: Villager, Aura Seer, Avenger, Beast Hunter, Bodyguard, Doctor, Flower Child," +
          " Grumpy Grandma, Marksman, Pacifist, Priest, Red Lady," +
          " Seer Apprentice, Sheriff, Spirit Seer, Tough Guy, Villager or Witch",
    abbr: ["rrv"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  "Random Strong Villager": {
    desc: "One of: Detective, Forger, Fortune Teller, Gunner, Jailer, Medium or Seer",
    abbr: ["rsv"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  "Random Werewolf": {
    desc: "One of:\nWerewolf, Alpha Werewolf, Guardian Wolf, Junior Werewolf," +
          "Kitten Wolf, Nightmare Werewolf, Werewolf Berserk, Wolf Seer, Wolf Shaman",
    abbr: ["rw"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  "Random Voting": {
    desc: "One of: Fool, Headhunter or Soul Collector",
    abbr: ["rv"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  "Random Killer": {
    desc: "One of: Arsonist, Bomber, Corruptor, Cannibal, Illusionist," +
          " Sect Leader, Serial Killer, Zombie",
    abbr: ["rk"],
    cat : "Random",
    tag : tags.ROLE.AVAILABLE,
    cgp : "250c",
  },
  
  // WEREWOLF CLASSIC ROLES
  "Amulet of Protection Holder": {
    desc: "You are a regular villager, but you cannot be killed by the werewolves.",
    abbr: ['aph', 'aoph', 'amulet'],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.AVAILABLE
  },
  "Doppelganger": {
    desc: "During the first night you can select a player. If this player dies, you will take their role.",
    abbr: ["actor"],
    aura: "Unknown",
    team: "Village",
    nit1: "Select a player to take their role after they die (`w!inherit [player]`).",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.AVAILABLE,
    wrt : "358980322047688704"
  },
  "Drunk": {
    desc: "You are a regular villager, but you can't speak properly becuase you are drunk. You can still place a vote during the voting session.",
    abbr: ["cheers", "beer"],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.AVAILABLE
  },
  "Idiot": {
    desc: "You are a regular villager, but if you get lynched, you do not die, but instead your role will be shown to the other players. You cannot vote for the rest of the game if this happens.",
    abbr: ["stupid"],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Handsome Prince": {
    desc: "You are a regular villager, but if you get lynched, you do not die, but instead your role will be shown to the other players.",
    abbr: ["prince"],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.AVAILABLE
  },
  "Leprous Human": {
    desc: "You are a regular villager. If the werewolves kill you, they cannot kill the next night.",
    abbr: [],
    aura: "Unknown",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Little Girl": {
    desc: "Each night, you can decide to open your eyes. If you open your eyes, you have a chance of detecting a werewolf." +
          " However, there is also a chance that you will get caught and be attacked instead of the werewolves' target." +
          " Protectors cannot protect a caught Little Girl from dying.",
    abbr: ["girl"],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Lone Wolf": {
    desc: "You are a regular werewolf, but you only win if you are the last werewolf alive.",
    abbr: [],
    aura: "Unknown",
    team: "Solo",
    tag : tags.ROLE.SEEN_AS_WEREWOLF | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Mad Scientist": {
    desc: "When you die, you release a toxin that kills two random players.",
    abbr: ["toxic", "toxin"],
    aura: "Unknown",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Mason": {
    desc: "You are a regular villager, but you know the other Masons in the village.",
    abbr: ["bob", "builder"],
    aura: "Good",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.AVAILABLE
  },
  "Naughty Boy": {
    desc: "Once during the game, you can select two players to have their roles switched. This ability comes into action the next night.",
    abbr: [],
    aura: "Unknown",
    team: "Village",
    attr: { abil1: 1 },
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
  "Sect Hunter": {
    desc: "Each night you can select a player. If that player is in the Sect, they die.",
    abbr: [],
    aura: "Unknown",
    team: "Village",
    tag : tags.ROLE.SEEN_AS_VILLAGER | tags.ROLE.WWC_ROLE | tags.ROLE.UNAVAILABLE
  },
}

for (const [key,] of Object.entries(roles))
  roles[key].name = key

module.exports = roles