const timeRequiredToBuy = function(tickets, k) {
  let diff = 0, res = (tickets.length * tickets[k]) - (tickets.length - k)
  const target = tickets[k]
  for(let i = 0; i < tickets.length; i++){
    const curr = tickets[i]
    if(target > curr){
      diff += target - curr
      if(i > k) diff--
    } 
  }
  return res - diff + 1
};