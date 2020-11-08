import random

n = 80

rain = [0]*n
rain[13] = 67
rain[52] = 82
rain[7] = 5
rain [20] = 6
rain[71] = 3

mois = [20]*n

evaporation = []

final = []
init = 0
for i,j in zip(rain, mois):
    if init:
        init = .3*init + (i+j)
    else:
        init = i+j
    evap = 100/random.randrange(20,50)
    init = init/evap
    final.append(round(init,3))
    evaporation.append(round(evap,3))

def PredictYield(TSW):
    total_sum = sum(TSW)
    if total_sum < 600:
        return total_sum*10
    elif total_sum < 700:
        return 7000
    else:
        return 6000

# print(final)
# print(evaporation)
# print(sum(final))