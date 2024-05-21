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
# OBJECT ORIENTED PROGRAMMING

#creating classes
class Crayon:
    pass

redCrayon = Crayon()

# print(type(redCrayon))

# creating ML HEROES

class MLHero:
    def __init__(self, name, description="Twilight Goddess", offense=80):
        self.name = name
        self.description = description
        role = "Mage"
        self.role = role.upper()[0]
        self.specialty = "Damage/Poke"
        self.statistics = {
            "durability": 60,
            "offense": offense,
            "skill_effects": 50,
            "difficulty": 70
        }

    def __str__(self):
        return(self.name + ", the " + self.description)

    def __add__(self, other):
        return(self.name + " and " + other.name + " combined!")

    def __gt__(self, other):
        if (self.statistics["offense"] > other.statistics["offense"]):
            return(self.name + " ATTACKED AND WON!")
        else:
            return(self.name + "lost. " + other.name + " is too strong!")

    def skill(self):
        print(self.name + " used the ATTACK!!")

    def superSkill(self, opponent):
        print(self.name + " used SUPERSKILL against " + opponent)

    def split(self):
        print("MASAKIT Mag split")

class Tank(MLHero):
    def __init__(self, name, description="Twilight Goddess", offense=80):
        super().__init__(name, description, offense)
        self.role = "Tank"

# lunox = MLHero("Lunox")
# aldous = MLHero("Aldous", "Demon Slayer", 90)

tigreal = Tank("Tigreal")
tigreal.skill()

# print(aldous + lunox)
# print(lunox > aldous)

# print(aldous.__name)
# aldous.__name = "BOGART"
# print(aldous.__name)

# print(dir(aldous))

# class Spam:
#     def __init__(self):
#         self.__egg=7

#     def print_egg(self):
#         print(self.__egg)

# s = Spam()
# s.print_egg()
# print(s._Spam__egg)


# print("Hero Name:", hero.name)
# print("Hero Desc:", hero.description)
# print("Hero Role:", hero.role)
# print("Hero Specialty:", hero.specialty.split("/"))
# print("Hero Offense+Difficulty:", hero.statistics["offense"] + hero.statistics["difficulty"])

# hero.superSkill("Zilong")
# hero.split()

# split is just a method of the class String
# text = "HELLO,PLUS,ME"
# text.split()

