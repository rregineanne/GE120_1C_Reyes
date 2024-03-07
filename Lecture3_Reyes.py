# Lecture 3 Notes

listahan = ["mafe","justine","mika","uste"]

# get mika (position)
# print(listahan[2])

# subset of the list, mafe and justin
# print(listahan[0:2])

# start at 0
# print(listahan[:3])

# start at the end
# print(listahan[2:])

#print(listahan[-1])
# print(listahan[-2])
# get first item, lat item, then those in between
# print(listahan[-3:3])
# addition of list
# print(listahan[0:2]+listahan[2:4])

listahan[0] = "chelzy"
# print(listahan)

# Tuples
tuple_1 = ("maja", "gianna","jewel")
# print(tuple_1)

# tuples are immutable 
# tuple_1[0] = "quinmar"
# cannot print not possible
# print(tuple_1[0])

# NESTED LISTS
list_1 = [["apple","bola","carton"],["apricot","banana","cow"]]
# print(list_1)
# print(list_1[0][2])

# NESTED TUPLES
tuple_2 = ((12.1244, -12.124),(25.42, -67.123))
## print(tuple_2[2][0])

# DICTIONARIES -key value pairs
dog ={
    "name": "Bogart",
    "age" : 2,
    "color" : "white"
    "favorite_num" : 3,
    1.113: 45 # pwede number as key (float or int)
}
print(dog[1.113])
print(dog.values()) # returns a list of values
print(dog.keys()) # returns a list of keys