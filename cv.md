# Denis Shmuratkin

**Location**: Russia, Syktyvkar

## Contacts

* Email: d.shmuratkin@mail.ru
* GitHub: DialecticalLaw
* Discord: proxyMC

## Summary

I became interested in programming about four months ago (from the moment I write this text). I was really surprised when I discovered for myself that I was very interested in the topic of programming, in particular, front-end development. I found that I know how to bring a case to an end, if the case is really interesting to me. There were also difficult moments when I wanted to give up everything. However, I continued to go towards my goal and at the moment I have already mastered the minimum base of Git, HTML, CSS and JavaScript.

## Skills

* **Git, GitHub** basics
* **HTML** basics
* **CSS** basics
* **JavaScript** basics

## Code

```
function dataReverse(data) {
  let bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    if (i === 0) {
      bytes.push(data.slice(0, 8))
    } else {
      bytes.push(data.slice(i, i + 8));
    }
  }
  const reverseBytes = bytes.reverse();
  const reverseData = [];
  reverseBytes.map(function(item) {
    reverseData.push(...item)
  })
  return reverseData;
}
```

## Projects

* [***Library***](https://dialecticallaw.github.io/first-training-projects/library/)
* [***Image gallery***](https://dialecticallaw.github.io/first-training-projects/image-galery/)
* [***Audio player***](https://dialecticallaw.github.io/first-training-projects/audio-player/)
* [***2048***](https://dialecticallaw.github.io/first-training-projects/random-game/)

## Education

* RS Schools Course "JavaScript/Front-end. Stage 0"
* Syktyvkar Trade end Economic College (in progress)

## Languages

* **English** - A1 (A2 in progress)
* **Russian** - native