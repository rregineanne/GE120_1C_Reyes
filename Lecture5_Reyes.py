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
    def skill(self) :
        print("ATTACK")


hero = MLHero("LUNOX", "MasipagNaUPStudent")
print("Hero Name:", hero.name)
print("Hero Description:", hero.description)
print("Hero Role:", hero.role)
print("Hero Specialty:", hero.specialty.split("/"))
print("Hero Offense+difficulty:", hero.statistics["offense"] + hero.statistics["difficulty"])

