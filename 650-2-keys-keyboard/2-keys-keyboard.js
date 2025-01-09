const minSteps = function(n) {
  if(n == 1) return 0
  const q = new MinPriorityQueue() 
  q.enqueue([1,1,1], 1)
  while(q.size()){
    const [count, copy, steps] = q.dequeue().element
    if(count == n) return steps
    if(count + copy <= n){
      q.enqueue([count + copy, copy, steps + 1], steps + 1)
    }
    if(count + count <= n){
      q.enqueue([count + count, count, steps + 2], steps + 2)
    }
  }
};