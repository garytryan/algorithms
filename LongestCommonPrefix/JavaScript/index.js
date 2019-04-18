const createPrefixTrie = () => {
  const root = {};

  const add = word => {
    let currentNode = root;

    word.split("").forEach(character => {
      if (!currentNode.hasOwnProperty(character)) {
        currentNode[character] = {};
      }

      currentNode = currentNode[character];
    });
  };

  const longestPrefix = () => {
    let prefix = "";
    let currentNode = root;

    while (true) {
      const keys = Object.keys(currentNode);

      if (keys.length !== 1) {
        return prefix;
      }

      const character = keys[0];
      prefix += character;
      currentNode = currentNode[character];
    }
  };

  return {
    root,
    add,
    longestPrefix
  };
};

const prefixTrie = createPrefixTrie();

["apple", "app", "april"].forEach(prefixTrie.add);

console.log(prefixTrie.longestPrefix());
