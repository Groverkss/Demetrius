import matplotlib.pyplot as plt
import json

f = open('sample1.json','r')
data = json.load(f)
plt.plot(data['R'])
plt.savefig('rain.png')
