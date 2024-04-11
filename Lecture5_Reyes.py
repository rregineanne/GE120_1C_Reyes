# Lecture 5 Notes

# creating classes
class Crayon :
    pass

redCrayon = Crayon()
# print(type(redCrayon))

# creating ML heroes
class MLHero :
    def __init__(self, name, description="Twilight Goddess") :
        self.name = name
        self.description = description
        self.role = "Mage"
        self.specialty = "Damage/Poke"
        self.statistics = {
            "durability": 60,
            "offense": 80,
            "skill_effects": 50, 
            "difficulty": 70
        } 
    def __str__(self):
        return(self.name + ", the " + self.description)
    
    def __add__(self, other):
        return(self.name + " and " + other.name + " combined!")
    def __gt__(self, other):
        if (self.statistics["offense" > other.statistics["offense"]]) :
            else 

    def skill(self):
        # print("ATTACK")
        print(self.name + " used the ATTACK!!")

    def superSkill(self, opponent) :
        print(self.name + "used SUPERSKILL against " + opponent)

    def split(self) :
        print("Masakit Mag Split")
        
lunox = MLHero("Lunox")
aldous = MLHero("Aldous", "Demon Slayer")

hero = MLHero("LUNOX", "MasipagNaUPStudent")
print("Hero Name:", hero.name)
print("Hero Description:", hero.description)
print("Hero Role:", hero.role)
print("Hero Specialty:", hero.specialty.split("/"))
print("Hero Offense+difficulty:", hero.statistics["offense"] + hero.statistics["difficulty"])

# hero.superSkill("Zilong")
