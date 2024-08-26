const minimumTotal = function(triangle) {
    let cur = triangle.length - 2
    while(cur >= 0){
        for(i = 0; i < triangle[cur].length; i++){
            triangle[cur][i] += Math.min(triangle[cur + 1][i], triangle[cur + 1][i + 1])
        }
        cur--
    }
    return triangle[0][0]
}
