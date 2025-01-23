import {Friend, Colleague, EmailContact} from './myTypes'
import { friends, colleagues } from './01-basics'
function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))
// 定义 allOlder 函数
function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
      friend.age += 1; // 增加年龄
      return `${friend.name} is now ${friend.age}`; // 返回新的描述字符串
    });
  }
  
  // 测试函数
 // console.log(allOlder(friends));

  // Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
 // console.log(highestExtension(colleagues.current));
 function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    // 获取最高扩展名
    const highestExt = highestExtension(cs).contact.extension;
  
    // 创建新同事对象
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: highestExt + 1  // 设置新的最高扩展名
      }
    };
  
    // 将新同事添加到数组
    cs.push(newColleague);
  }
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  function findFriends(friends: Friend[], criteria: (friend: Friend) => boolean): string[] {
    return friends.filter(criteria).map(friend => friend.name);
}
//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));
