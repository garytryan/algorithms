import math
import pprint
pp = pprint.PrettyPrinter(indent=4)


def create_node(head, weight=math.inf, visited=False, adjacent=[]):
    return [head, math.inf, False, adjacent]


def get_previous(node):
    return node[0]


def get_weight(node):
    return node[1]


def is_visited(node):
    return node[2]


def get_adjacent(node):
    return node[3]


def set_previous(node, previous):
    node[0] = previous
    return node


def set_weight(node, weight):
    node[1] = weight
    return node


def set_visited(node, visited):
    node[2] = visited
    return node


def add_adjacent(node, adjacent):
    node[3].append(adjacent)
    return node


def any_unvisisted(nodes):
    any_unvisisted = False

    for node in nodes.values():
        if not is_visited(node):
            any_unvisisted = True
            break

    return any_unvisisted


def findShortestPath(graph, start, end):
    nodes = {}

    # Create a dictionary where:
    # 1. The key is the node
    # 2. The value is a tuple of the form:
    #   (previous node, weight, visitied, adjecent nodes)
    #
    # {
    #     0: (0, math.inf, False, [1,2,4])
    #     ...
    # }
    for head, tail, weight in graph:
        if head in nodes:
            add_adjacent(nodes[head], (tail, weight))
        else:
            nodes[head] = create_node(head, math.inf, False, [(tail, weight)])

        if tail not in nodes:
            nodes[tail] = create_node(tail, math.inf, False, [])

    # Set the weight of the start node to 0
    set_weight(nodes[start], 0)

    # Set the current node to the start node
    current = start

    while any_unvisisted(nodes):
        current_node = nodes[current]

        # Set current node to visited
        set_visited(current_node, True)

        # Update the weight for adjacent nodes
        current_node_weight = get_weight(current_node)
        for tail, weight in get_adjacent(current_node):
            tail_node = nodes[tail]

            if is_visited(tail_node):
                continue

            tails_weight = get_weight(tail_node)
            tentative_weight = current_node_weight + weight

            if tentative_weight < tails_weight:
                set_previous(tail_node, current)
                set_weight(tail_node, tentative_weight)

        # find the unvisited node with the smallest weight
        smallest_weight = math.inf
        for key, node in nodes.items():
            if is_visited(node):
                continue

            weight = get_weight(node)
            if weight < smallest_weight:
                smallest_weight = weight
                current = key

    paths = {}
    for key, node in nodes.items():
        path = [key]
        current_node = node

        while path[-1] != start:
            # print(path)
            previous = get_previous(current_node)
            current_node = nodes[previous]
            path.append(previous)

        paths[key] = path

    pp.pprint(paths)


graph = [
    (0, 1, 4),
    (0, 2, 3),
    (0, 4, 7),
    (1, 3, 5),
    (2, 1, 6),
    (2, 3, 11),
    (2, 4, 8),
    (3, 4, 2),
    (3, 5, 2),
    (3, 6, 10),
    (4, 6, 5),
    (5, 6, 3),
]


# findShortestPath(graph, 0, 5)

for line in open('entrada', 'r'):
    print(line)
