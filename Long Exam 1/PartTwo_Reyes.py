"""
Regine Ann Reyes
Part Two
"""
print("Differential Leveling")
print("by Regine Ann Reyes")
print("This code performs direct levelling computations for Geodetic Engineers!")
print()

levelling_table = []
# levelling_table = ("backsight, foresight, height of instrument, elevation of turning point")
# the measurements and derived values are given on the table
total_distance = float()
total_distance = float(total_distance)
tp_counter = int()
tp_counter = int(tp_counter)

def floatInput(prompt) :
    '''
    This function must make sure that its output is already converted to float data type.

    Input:
    parameter - float

    Output:
    prompt - float
    '''
    prompt = float(prompt)
    return prompt

BM0 = floatInput(prompt=input("Enter BM0: "))
# getBM0 = float(input("Enter BM0: "))

runningElev = float(100)

# initialize
tp_counter = 0
backsight = 0
foresight = 0
heightInst = 0

# create loop
while True :
    print()
    print("LINE NO. ", tp_counter)    
    try :
        backsight = floatInput(prompt=input("Enter Backsight: "))
    # If backsight is invalid, ask for input again
    except ValueError :
        print("INVALID: You need to enter a number.")
        print()
    try :
        foresight = floatInput(prompt=input("Enter Foresight: "))
    except ValueError :
        print("INVALID: You need to enter a number.")
        print()

    heightInst = runningElev + backsight
    newElev = heightInst - foresight
    # runningElev should be the first elev
    total_distance = backsight + foresight

    values = (tp_counter, backsight, heightInst, foresight, newElev) # create a touple
    levelling_table.append(values)

     # Ask for input
    YN = input("Add new measurement? (Y/N) ")
    if YN.lower() == "yes" or YN.lower() == "y":
        tp_counter += 1
    else:
        break


print()
print("---------------------------------------------------------------------------------------------")
print('{: ^15} {: ^15} {: ^15} {: ^15} {: ^15} '.format("STA. ", "B.S. ", "H.I. ", "F.S. ", "ELEV. "))
print("----------------------------------------------------------------------------------------------")

for values in levelling_table:
    print('{: ^15} {: ^15} {: ^15} {: ^15} {: ^15} '.format(values[0], values[1], values[2], values[3], values[4]))

print("----------------------------------------------------------------------------------------------")

# ERROR
BMf = newElev
error = BMf - BM0
# GEODETIC CONTROL ORDER
if error < 1/100000 :
    print("FIRST ORDER ")
elif 1/100000 < error and error > 1/50000 :
    print("SECOND ORDER ")
elif 1/50000 < error and error > 1/20000 :
    print("THIRD ORDER ")

print("---------------------END-----------------------")
