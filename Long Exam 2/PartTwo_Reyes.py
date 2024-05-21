"""
GE120: Long Exam 2
REYES - Part Two
Coding
"""
class Parcel:
    def __init__(self, owner, area): # initialize the given parameters
        self.owner = str(owner)
        self.area = int(area)

    def getClassification(self): 
        '''
        Define or classify a parcel of land.

        Input :
        area - float

        Output:
        land classification - string
        '''
        # convert the are from square meters to hectares
        area = (self.area/10000)

        if area < 1:
            return("Residential")
        elif area > 1 and self.area < 12:
            return("Private Agricultural")
        elif area > 12:
            return("Public Agricultural")
        
        return area
    
print()
def __str__(self): # overload the print function using __str__
    print("A parcel of land owned by " + self.owner + " with an area of " + self.area + " square meters.")

def __add__(self, other): # overload the + operator using __add__
    return("Consolidated lot of " + self.owner + " and " + other.owner + " with a total area of " + sum(self.area) + " square meters. ")

class Riparian(Parcel): # new class that inherits the parent class, which is Parcel
    def __init__(self, owner, area, type): 
        super().__init__(owner, area, type)
        self.owner = str(owner)
        self.area = int(self.area)
        self.type = int(type) 

    def getAdjoiningWaterbody(self):
        '''
        Create a method that returns a string.

        Input: 
        type - integer

        Output:
        description - string 
        '''
        try:
            if self.type == 1:
                return("Adjacent River -- can be subject to titling")
            elif self.type == 2:
                return("Adjacent to Ocean (Littoral) -- cannot be subject to titling")
            
        except ValueError: # if type is not equal to 1 or 2, it will not work/invalid
            return("Invalid Riparian Parcel")
            

    
        




    


