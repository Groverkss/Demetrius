import matplotlib.pyplot as plt
import json

f = open('sarsa1.json','r')
data = json.load(f)
plt.plot(data['irrigation'])
plt.savefig('plan.png')
