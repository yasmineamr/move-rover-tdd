/*

You are building a rover that is going to explore Mars (represented as a grid).

1) The initial starting point of a rover is 0:0:N
- 0,0 are X and Y coordinates on a grid
- ‘N’ is the direction rover is facing - alias for North (directions it can face are N, S, E, W)

2) Rover accepts different commands and returns its position after executing them
- ‘L’ and ‘R’ commands rotate the rover left and right, respectively
- ‘M‘ command moves the rover one step in the direction it’s currently facing.
E.g. If its position is “2:3:E” (facing East), sending ‘M’ to the rover moves it one step in the direction of East, i.e. “3:3:E”.

3) The rover receives a string of multiple commands and returns its position after executing commands.
For example, assuming rover’s starting position is “0:0:N”, sending "RMMLML" to the rover will move it to "2:1:W".


initial: [0, 0] N

R: [0, 0] E

M: [1, 0] E

M: [2, 0] E

L: [2, 0] N

M: [2, 1] N

L: [2, 1] W

M command:
E -> (1, 0)
W -> (-1, 0)
N -> (0, 1)
S -> (0, -1)

*/

const moveHover = (position, commands) => {
    if (commands.length === 0) return position;

    let [ x, y, direction ] = position.split(':');

    x = Number(x);
    y = Number(y);

    const moveCommand = {
        'E': [1, 0],
        'N': [0, 1],
        'W': [-1, 0],
        'S': [0, -1]
    }

    const leftCommand = {
        'E': 'N',
        'N': 'W',
        'W': 'S',
        'S': 'E'
    }

    const rightCommand = {
        'E': 'S',
        'S': 'W',
        'W': 'N',
        'N': 'E'
    }

    for (let i = 0; i < commands.length; i++) {
        const currentCommand = commands[i];

        if (currentCommand === 'M') {
            const [dx, dy] = moveCommand[direction];
            x = x + dx;
            y = y + dy;
        }

        if (currentCommand === 'L') {
            direction = leftCommand[direction];
        }

        if (currentCommand === 'R') {
            direction = rightCommand[direction];
        }
    }

    return `${x}:${y}:${direction}`;
}

module.exports = {
    main: moveHover
}
