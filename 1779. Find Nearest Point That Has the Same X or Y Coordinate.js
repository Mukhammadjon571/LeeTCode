/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let smallest = 999999;

	for (let i = 0; i < points.length; i++) {
		if (points[i][0] == x || points[i][1] == y) {
	
			const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]); 
			if (distance <= smallest) {
				 smallest = distance
			}
		}
	}
	for (let i = 0; i < points.length; i++) {
		if (points[i][0] == x || points[i][1] == y) {
			const distance = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
			if (distance === smallest) {
			return i;
			}
		}
	}
	return -1;

    
};