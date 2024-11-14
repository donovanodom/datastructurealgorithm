const addTwoNumbers = (l1, l2) => {
    let res = new ListNode
    let dum = res
    let car = 0
    while (l1 || l2 || car) {
        let sum = car
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        car = Math.floor(sum / 10)
        dum.next = new ListNode(sum % 10)
        dum = dum.next
    }
    return res.next
}