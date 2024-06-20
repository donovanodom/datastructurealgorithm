const isValidBST = (root, low = -2147483649, high = 2147483649) => {
    if(!root) {
        return true
    }
    if(root.val <= low || root.val >= high) {
        return false
    }
    return (isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high))  
}