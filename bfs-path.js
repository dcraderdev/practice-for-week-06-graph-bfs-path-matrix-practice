function findNeighbors(index, graph) {

    let neighbors = new Array();
    let [row,col] = index
  

    
    // Check top
    if (row > 0 && graph[row - 1][col]) {
      neighbors.push([row - 1, col]);
    }
    // Check bottom
    if (row < graph.length - 1 && graph[row + 1][col]) {
      neighbors.push([row + 1, col]);
    } 
    // Check left
    if (col > 0 && graph[row][col - 1]) {
      neighbors.push([row, col - 1]);
    }
    // Check right
    if (col < graph[0].length - 1 && graph[row][col + 1]) {
      neighbors.push([row, col + 1]);
    }
    
    // Return neighbors
    return neighbors
  }


function bfsPath(matrix, startNode, endValue) {
    let queue = new Array()
    let visited = new Set()
    const path = []

    queue.push(startNode)
    visited.add(startNode.toString())

    while (queue.length > 0) {
        
        let currPath = queue.shift();
        let [row,col] = currPath
        let lastVal = matrix[row][col]

        if(lastVal === endValue){
                return [...path, currPath]
        }

        path.push(currPath);
        const neighbors = findNeighbors(currPath, matrix);
        for(let neighbor of neighbors){
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                queue.push(neighbor);
              }
        }
    }
return false
}





// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];