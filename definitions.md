## 10. Definitions

| **Term** | **Definition** | **Reference** |
|-----------|----------------|----------------|
| **Asynchrony** | Execution model where operations do not block program flow. Tasks start before previous ones finish. In JavaScript, this is handled via callbacks, Promises, or async/await. | [MDN – Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) |
| **Parallelism** | Performing multiple operations literally at the same time, typically on multiple CPU cores or processors. Focuses on simultaneous execution to improve performance. | [Intel – Parallelism Definition](https://www.intel.com/content/www/us/en/developer/tools/oneapi/parallel-programming.html) |
| **Concurrency (Multithreading)** | Structuring a system to handle multiple tasks at once. Tasks make progress independently, possibly interleaved in time, but not necessarily executed in parallel. | [Goetz et al., *Java Concurrency in Practice*, 2006] |
