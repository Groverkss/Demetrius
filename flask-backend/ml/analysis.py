import matplotlib.pyplot as plt
import json

def plan(data):
    """Requries processed data"""

    plt.plot(data['irrigation'])
    plt.savefig('plan.png')

def tsw(data):
    """Requries unprocessed data"""

    plt.plot(data['TSW'])
    plt.savefig('tsw.png')

def tsw(data):
    """Requries unprocessed data"""

    plt.plot(data['R'])
    plt.savefig('rain.png')
