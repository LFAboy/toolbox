// 日期：2023年9月7日
// 内容：反转单链表的JS 实现

// 思路1非递归方式：用三个指针，分别指向链表中的当前结点，前一个结点，下一个结点，然后让当前节点指向前一个结点，
//    所有这三个指针开始平移，当指向下一个结点的指针值为 null 时，就已经到了链表结尾了。
// 思路2递归方式：


// 采用思路1
function reversal(head) {
  if (head == null || head.next == null) return head;
  let prev = null;
  let cur = head;
  let next = head.next;

  while(1) {
    cur.next = prev;
    if (next == null) break;
    prev = cur;
    cur = next;
    next = cur.next;
  }
  return cur;
}


// 采用思路2