import matplotlib.pyplot as plt
import json

def plan(data):
    """Requries processed data"""

    plt.plot(data['irrigation'])
    plt.savefig('plot.png')

def tsw(data):
    """Requries unprocessed data"""

    plt.plot(data['TSW'])
    plt.savefig('plot.png')

def rain(data):
    """Requries unprocessed data"""

    plt.plot(data['R'])
    plt.savefig('plot.png')
