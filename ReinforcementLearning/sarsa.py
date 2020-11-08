import numpy as np
import random
import matplotlib.pyplot as plt

############################################################################### 
#############################   CONFIGURATION   ###############################
###############################################################################
# Given data
from generate import final as TSW
from generate import evaporation as ET
from generate import rain as R
from generate import n, PredictYield

# PRICES
WATER_PRICE = 100
PRODUCT_PRICE = 100
MAX_COSTS = 1000

# AGRI CONSTANTS
MAX_SOIL_WATER = 50
ACTIONS = [10, 20, 30, 40]

# RL CONSTANTS
EPSILON = 0.3
DISCOUNT = 0.90
LEARNING_RATE = 0.3

###############################################################################


############################################################################### 
#############################   SIMULATE TSW   ################################
###############################################################################
def irrigate(tsw):
    return MAX_SOIL_WATER - tsw

def predTSW(tsw, water, et, rain):
    return tsw + water + rain - et

def simulate(i, a):    
    I_i = irrigate(TSW[i]) 
    I.append(I_i)
    # TSW[i+1] = predTSW(TSW[i], I_i, ET[i], R[i])
    # return TSW[i+1]

############################################################################### 





############################################################################### 
#############################   Q FUNCTION   ################################## 
###############################################################################
def reset_Q():
    global Q
    Q = []
    for _ in range(n+1):
        temp = []
        for __ in range(len(ACTIONS)):
            temp.append(round(random.random(), 3))   
        Q.append(temp)
def print_Q():
    print()
    print("#"*80)
    for row in Q:
        print(row)
    print("#"*80)
    print()
    print()
############################################################################### 



############################################################################### 
###############################   POLICY   #################################### 
############################################################################### 
def greedy(EPSILON, new_s):
    temp = np.zeros(int(1/EPSILON))
    temp[0] = 1

    if random.choice(temp):
        return random.randint(0, len(ACTIONS)-1)
    else:
        best_score = -float('inf')
        best_action = None
        for action in range(len(ACTIONS)):
            if Q[new_s][action] > best_score:
                best_action = action
                best_score = Q[new_s][action]

        return best_action
############################################################################### 


############################################################################### 
###############################   REWARD   #################################### 
############################################################################### 
def reward(i):
    if i < n:
        r = 0
    else:
        W = sum(I) * WATER_PRICE
        Y = PredictYield(TSW) * PRODUCT_PRICE
        NET_RETURN = Y - W

        r = -50 if MAX_COSTS < W else NET_RETURN

    return r
############################################################################### 



############################################################################### 
###############################   SARSA   ##################################### 
############################################################################### 
def execute_episode():
    # reset the value of TSW
    from generate import final as TSW
    
    # SET s and a for the first time
    s = 0
    a = random.randint(0, len(ACTIONS)-1)

    global I
    I = []

    for i in range(1, n+1):

        simulate(s, a)

        new_s = i
        new_a = greedy(EPSILON, new_s)

        # FINDING REWARD FOR CURRENT TIME STEP
        r = reward(i)

        # LEARNING FROM THE DIFFERENCE
        delta = r + DISCOUNT*Q[new_s][new_a] - Q[s][a]
        
        Q[s][a] += LEARNING_RATE * delta
        Q[s][a] = round(Q[s][a], 3)

        a = new_a
        s = new_s

############################################################################### 

############################################################################### 
#######################   FINAL IRRIGATION AMOUNTS   ########################## 
###############################################################################
def find_amounts():
    final_actions = []
    for i in range(len(Q)-1): 
        final_actions.append(ACTIONS[np.argmax(Q[i])])
    
    return final_actions

if __name__ == "__main__":
    reset_Q()
    print_Q()
    
    for _ in range(100):
        execute_episode()

    print_Q()
    # print(ET)

    plt.plot(TSW)
    final_actions = find_amounts()
    plt.plot(final_actions)
    plt.show()