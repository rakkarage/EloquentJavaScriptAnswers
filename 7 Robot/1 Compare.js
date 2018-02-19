const intro = require('./0 Intro.js')
runRobot2 = function (state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Done in ${turn} turns`)
			break
		}
		let action = robot(state, memory)
		state = state.move(action.direction)
		memory = action.memory
		console.log(`Moved to ${action.direction}`)
	}
}
function compareRobots(robot1, memory1, robot2, memory2) {
	for (let i = 0; i < 100; i++) {

	}
}
compareRobots(intro.routeRobot, [], intro.goalOrientedRobot, [])
console.log('done');