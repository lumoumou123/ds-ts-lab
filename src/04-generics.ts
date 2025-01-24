import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

//console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
//console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))
function sort<T>(items: T[], comparator: (a: T, b: T) => number): T[] {
    // 创建数组的副本以避免修改原数组
    return [...items].sort(comparator);
  }
// 按年龄排序朋友
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));

// 按分机号排序同事
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);