import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asap-scheduler',
  templateUrl: './asap-scheduler.component.html',
  styleUrls: ['./asap-scheduler.component.scss']
})
export class AsapSchedulerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

/*
Asap Scheduler
const asap: any;

Perform task as fast as it can be performed asynchronously
asap scheduler behaves the same as async scheduler when you use it to delay task in time.
If however you set delay to 0, asap will wait for current synchronously executing code to end and then it will try to execute given task as fast as possible.

asap scheduler will do its best to minimize time between end of currently executing code and start of scheduled task.
This makes it best candidate for performing so called "deferring".
Traditionally this was achieved by calling setTimeout(deferredTask, 0), but that technique involves some (although minimal) unwanted delay.

Note that using asap scheduler does not necessarily mean that your task will be first to process after currently executing code.
In particular, if some task was also scheduled with asap before, that task will execute first. That being said, if you need to schedule task asynchronously,
but as soon as possible, asap scheduler is your best bet.
*/
