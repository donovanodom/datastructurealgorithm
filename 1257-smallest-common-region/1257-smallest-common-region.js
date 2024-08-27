/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
const findSmallestRegion = function(regions, region1, region2) {
  const parent = {}
  for(let region of regions){
    for(let i = 1; i < region.length; i++){
      parent[region[i]] = region[0]
    }
  }
  let chain = {[region1]: 1};
  while(region1 != parent[region1]){
    chain[parent[region1]] = 1;
    region1 = parent[region1];
  }
  while (!(region2 in chain)) {        
      region2 = parent[region2];
  }
  return region2
};
