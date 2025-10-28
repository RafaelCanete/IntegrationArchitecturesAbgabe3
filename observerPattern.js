import { Subject } from 'rxjs';

const salesSubject = new Subject();

salesSubject.subscribe(sales => {
  console.log("Observer 1:", sales * 0.1);
});

salesSubject.subscribe(sales => {
  console.log("Observer 2:", sales > 5000 ? "Great job!" : "Keep going!");
});

salesSubject.next(6000);
